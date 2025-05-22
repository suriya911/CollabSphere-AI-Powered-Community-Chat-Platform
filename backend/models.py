from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    messages = relationship("Message", back_populates="sender")
    rooms = relationship("Room", secondary="user_rooms", back_populates="members")

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text)
    is_private = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    messages = relationship("Message", back_populates="room")
    members = relationship("User", secondary="user_rooms", back_populates="rooms")

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text)
    type = Column(String, default="text")  # text, voice, system
    sender_id = Column(Integer, ForeignKey("users.id"))
    room_id = Column(Integer, ForeignKey("rooms.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    sender = relationship("User", back_populates="messages")
    room = relationship("Room", back_populates="messages")

# Association table for many-to-many relationship between users and rooms
class UserRoom(Base):
    __tablename__ = "user_rooms"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    room_id = Column(Integer, ForeignKey("rooms.id"), primary_key=True)
    role = Column(String, default="member")  # member, admin, owner
    joined_at = Column(DateTime(timezone=True), server_default=func.now()) 