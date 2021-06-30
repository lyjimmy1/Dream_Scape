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
