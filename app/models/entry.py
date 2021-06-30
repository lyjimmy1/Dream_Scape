from .db import db
from sqlalchemy.schema import ForeignKey
import datetime

class Entry(db.Model):
    __tablename__='entries'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content=db.Column(db.Text, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at=db.Column(db.DateTime, onupdate=datetime.datetime.now)
    record_id=db.Column(db.Integer, ForeignKey('records.id'), nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)

    record=db.relationship("Record", back_populates="entries")
    user=db.relationship("User", back_populates="entries")
    tags=db.relationship("Tag", back_populates="entry")
