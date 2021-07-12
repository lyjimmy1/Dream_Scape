from .db import db
from sqlalchemy.schema import ForeignKey


class Record(db.Model):
    __tablename__='records'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(255), nullable = False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates="records")
    entries=db.relationship("Entry", back_populates="record", cascade="all, delete")

    def to_dict(self):
        return{
            "id":self.id,
            "title":self.title,
            "user_id":self.user_id
        }
