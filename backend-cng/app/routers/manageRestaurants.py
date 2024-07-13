from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, status
from starlette.responses import JSONResponse
from sqlalchemy.orm import Session 
from ..database import get_db
from .. import schemas, models, oauth2
from ..cloudinary.cloudinaryConfig import upload_image_to_cloudinary
from .. import schemas
from typing import List

router = APIRouter(
    prefix="/manageRestaurants",
    tags=['manageSupplier'] 
)

from fastapi import HTTPException, status

@router.post('/uploadRestaurant', status_code=status.HTTP_201_CREATED)
def upload_supplier(name: str = Form(...), address: str = Form(...), web: str = Form(None), description: str = Form(...), image: UploadFile = File(...), db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    try:
        if image.content_type not in ["image/jpeg", "image/png"]:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid file type. Only JPEG and PNG are allowed.")
        
        urlImage = upload_image_to_cloudinary(image.file, public_id=f'restaurant_{name}')

        data = schemas.DataRestaurant(name=name, address=address, web=web, description=description, img=urlImage)
        new_restaurant = models.Restaurant(owner_id=current_user.dni, **data.model_dump())

        db.add(new_restaurant)
        db.commit()
        db.refresh(new_restaurant)
        
        return new_restaurant
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication error. Please log in again.")

    
@router.get('/getRestaurants', response_model=List[schemas.RestaurantSchema], status_code=status.HTTP_200_OK)
def get_restaurants(db: Session = Depends(get_db)): 
    restaurants = db.query(models.Restaurant).all()
    return restaurants