from flask_wtf import FlaskForm
from wtforms import StringField, TextField
from wtforms.validators import DataRequired

class EntryForm(FlaskForm):
    title=StringField('title', validators[DataRequired()])
    content=TextField('content', validators[DataRequired()])
