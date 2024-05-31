from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session 
from ..database import get_db
from .. import models, schemas
from ..pdfgeneration import pdfgenerator
from typing import List



router = APIRouter(
    prefix="/concierge",
    tags=['Concierge'] 
)

@router.post('/{id}')
def create_pdf(id: int, db: Session = Depends(get_db)):

    suppliers = db.query(models.Post).filter(models.Post.id == id).first()
    if not suppliers:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with id: {id} does not exist")
    
    pdfgenerator.createfirstpdf(suppliers)

    return {"STATUS: PDF GENERATED"}


@router.post('/')
def create_pdf_react(data_list: List[schemas.DataSuppliers]):
    pdf_path = pdfgenerator.createfirstpdf(data_list)

    return FileResponse(pdf_path, filename="all_suppliers.pdf", headers={"Content-Disposition": "attachment; filename=all_suppliers.pdf"})
