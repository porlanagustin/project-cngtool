from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import schemas
from ..oauth2 import verify_access_token
from .. import database, models, utils, oauth2

router = APIRouter(tags=['Authentication'])

@router.post('/login', response_model=schemas.Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):

    user = db.query(models.User).filter(models.User.dni == user_credentials.username).first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"El usuario no existe")
    
    if not utils.verify(user_credentials.password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Contraseña incorrecta")
    
    access_token = oauth2.create_access_token(data={"user_id": user.dni, "role": user.role})
   
    return {"access_token": access_token, "token_type": "bearer"}


# @router.get('/protected')
# def isLoggedIn(token: str):
    