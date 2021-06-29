from .db import db
from sqlalchemy.schema import ForeignKey

class Tag(db.Model):
    __tablename__='tags'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(255), nullable = False)
    entry_id=db.Column(db.Integer, ForeignKey('entries.id'))

    entry=db.relationship("Entry", back_populates="tags", lazy='dynamic')
