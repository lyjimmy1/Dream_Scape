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
    record_id=db.Column(db.Integer, ForeignKey('records.id'))
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)

    record=db.relationship("Record", back_populates="entries")
    user=db.relationship("User", back_populates="entries")
    tags=db.relationship("Tag", back_populates="entry")

    def to_dict(self):
        return{
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "record_id": self.record_id,
            "user_id": self.user_id,
        }
