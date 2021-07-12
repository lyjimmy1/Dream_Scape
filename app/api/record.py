from flask import Blueprint, request
from flask_login import current_user
from app.models import Record, db
from app.forms import RecordForm

records_routes= Blueprint('record', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@records_routes.route('/get-records')
def get_all_records():
    user=current_user.id
    records=Record.query.filter(Record.user_id == user).all()
    return {"records":[record.to_dict() for record in records]}

@records_routes.route('/<int:id>')
def get_one_record(id):
    record=Record.query.filter_by(id=id).first()
    return record.to_dict()

@records_routes.route('/new', methods=['POST'])
def create_record():
    form = RecordForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user=current_user.id
        new_record=Record(
            title=form.data['title'],
            user_id=user
        )
        db.session.add(new_record)
        db.session.commit()
        return new_record.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@records_routes.route('/edit-record/<int:id>', methods=['PATCH'])
def edit_record(id):
    form = RecordForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("IS THIS RUNNING")
    if form.validate_on_submit():
        record_to_be_edited=Record.query.filter_by(id=id).first()
        title=form.data['title']
        record_to_be_edited.title=title

        db.session.commit()
        return record_to_be_edited.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@records_routes.route('/<int:id>', methods=['DELETE'])
def delete_record(id):
    record_to_be_deleted=Record.query.filter_by(id=id).first()
    db.session.delete(record_to_be_deleted)
    db.session.commit()
    return {'id of record to be deleted': id}
