from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from typing_extensions import Annotated

class UserCreate(BaseModel):
    dni: int
    password: str
    role: str

class UserOut(BaseModel):
    dni: int

    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    dni: str
    password: str

class DataRestaurant(BaseModel):
    name: str
    image: str
    address: str
    web: str
    description: str
    image: str

class PostCreate(DataRestaurant):
    pass

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    dni: str

class Post(DataRestaurant):
    id: int
    created_at: datetime
    owner_id: int
    owner: UserOut
    

#     class Config:
#         from_attributes = True

# class Vote(BaseModel):
#     supplier_id: int

#NO FUNCIONA
#class PostOut(PostBase):
#    Post: Post
#    votes: int

 # class PostBase(BaseModel):
#     name: str
#     offers: str
#     phone: str
#     email: str
#     web: str
#     type: str
#     region: str   