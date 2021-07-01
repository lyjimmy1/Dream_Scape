from flask import Blueprint, session, request
from flask_login import login_required, current_user
from app.models import Entry, db
from app.forms import EntryForm

entries_routes=Blueprint('entry', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@entries_routes.route('/get-entries')
def get_all_entries():
    user=current_user.id
    entries=Entry.query.filter(Entry.user_id == user).all()
    return {"entries":[entry.to_dict() for entry in entries]}

@entries_routes.route('/<int:id>')
def get_one_entry(id):
    entry=Entry.query.filter_by(id=id).first()
    print(entry, "THIS IS A SINGLE ENTRY")
    return entry.to_dict()

@entries_routes.route('/new', methods=['POST'])
def new_entry():
    form = EntryForm()
    print("ASJKFHASHFKASHFKJASHKFJHAKSJFKJASHFKHASKFHKJ")
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user=current_user.id
        print(user, "THIS IS THE USERRR")
        print("ARE YOU HITTING THIS ROUTE")
        new_entry=Entry(
            title=form.data['title'],
            content=form.data['content'],
            user_id=user
        )
        db.session.add(new_entry)
        db.session.commit()
        return new_entry.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@entries_routes.route('/edit-entry/<int:id>', methods=["PATCH"])
def edit_entry(id):
    form = EntryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        entry_to_be_edited=Entry.query.filter_by(id=id).first()
        

@entries_routes.route('/<int:id>', methods=["DELETE"])
def delete_entry(id):
    entry_to_be_deleted=Entry.query.filter_by(id=id).first()
    db.session.delete(entry_to_be_deleted)
    db.session.commit()
    return {'id of entry deleted': id}