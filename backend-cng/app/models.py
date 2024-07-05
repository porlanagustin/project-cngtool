from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey, CheckConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from .database import Base

Base = declarative_base()

class Restaurant(Base):
    __tablename__ = "restaurants"

    name = Column(String, primary_key=True, nullable=False)
    img = Column(String, nullable=False)
    address = Column(String, nullable=False)
    web = Column(String, nullable=True)
    description = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    owner_id = Column(Integer, ForeignKey("users.dni", ondelete="CASCADE"), nullable=False)

    owner = relationship("User")
    

class User(Base):
    __tablename__ = 'users'

    dni = Column(Integer, primary_key=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=func.now())
    
    __table_args__ = (
        CheckConstraint(role.in_(["admin", "user"]), name='role_check'),
    )
    

# class Vote(Base):
#     __tablename__ = 'votes'
#     user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
#     supplier_id = Column(Integer, ForeignKey("suppliers.id", ondelete="CASCADE"), primary_key=True)
   