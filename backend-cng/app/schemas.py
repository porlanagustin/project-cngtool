from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from typing_extensions import Annotated

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr

    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class PostBase(BaseModel):
    name: str
    offers: str
    phone: str
    email: str
    web: str
    type: str
    region: str
    

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    created_at: datetime
    owner_id: int
    owner: UserOut
    

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None

class DataSuppliers(BaseModel):
    nombre: str
    img: str
    direccion: str
    web: str
    descripcion: str
    
class Vote(BaseModel):
    supplier_id: int

#NO FUNCIONA
#class PostOut(PostBase):
#    Post: Post
#    votes: int

    