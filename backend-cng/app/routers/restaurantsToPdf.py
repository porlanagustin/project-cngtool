from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session 
from ..database import get_db
from .. import models, schemas
from ..pdfgeneration import pdfgenerator
from typing import List

router = APIRouter(
    prefix="/restaurantsToPdf",
    tags=['restaurants'] 
)

@router.post('/{id}')
def create_pdf(id: int, db: Session = Depends(get_db)):

    restaurant = db.query(models.Restaurant).filter(models.Restaurant.name == id).first()
    if not restaurant:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with id: {id} does not exist")
    
    pdfgenerator.createfirstpdf(restaurant)

    return {"STATUS: PDF GENERATED"}


@router.post('/')
def create_pdf_react(data_list: List[schemas.DataRestaurant]):
    pdf_path = pdfgenerator.createfirstpdf(data_list)

    return FileResponse(pdf_path, filename="allRestaurants.pdf", headers={"Content-Disposition": "attachment; filename=allRestaurants.pdf"})
