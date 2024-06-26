# from .. import models, schemas, oauth2
# from fastapi import status, HTTPException, Depends, APIRouter
# from ..database import get_db
# from sqlalchemy.orm import Session 
# from sqlalchemy import func
# from typing import List
# from fastapi.responses import JSONResponse

# router = APIRouter(
#     prefix="/posts",
#     tags=['Posts'] 
# )

#NO FUNCIONA
#@router.get('/', response_model=List[schemas.PostOut])
#def get_posts(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
#    posts = db.query(models.Post).filter(models.Post.owner_id == current_user.id).all()
#    results = db.query(models.Post, func.count(models.Vote.supplier_id).label("VOTARDOS")).join(models.Vote, models.Vote.supplier_id == models.Post.id, isouter=True)
#    print(results)
#    return results

# @router.post('/', status_code=status.HTTP_201_CREATED, response_model=schemas.Post)
# def create_post(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    
#     new_post = models.Post(owner_id=current_user.id, **post.model_dump())
#     db.add(new_post)
#     db.commit()
#     db.refresh(new_post)
#     return new_post


# @router.get('/{id}')
# def get_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

#     post = db.query(models.Post).filter(models.Post.id == id).first()

#     if not post:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} was not found")
    
#     if post.owner_id != current_user.id:
#         raise HTTPException(status.HTTP_403_FORBIDDEN, detail="Not authorized to perform requested action")

#     return post


# @router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
# def delete_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

#     delete_post = db.query(models.Post).filter(models.Post.id == id)

#     if delete_post.first() == None:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
#     if delete_post.first().owner_id != current_user.id:
#         raise HTTPException(status.HTTP_403_FORBIDDEN, detail="Not authorized to perform requested action")

#     delete_post.delete(synchronize_session=False)
#     db.commit()

#     return JSONResponse(content={"Element deleted. ID = " : id}, status_code=status.HTTP_200_OK)
 

# @router.put('/{id}')
# def update_post(id: int, updated_post: schemas.Post, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

#     post_query = db.query(models.Post).filter(models.Post.id == id)

#     post = post_query.first()

#     if post == None:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} does not exist")
    
#     if post.owner_id != current_user.id:
#         raise HTTPException(status.HTTP_403_FORBIDDEN, detail="Not authorized to perform requested action")

#     post_query.update(updated_post.model_dump(), synchronize_session=False)

#     db.commit()
    
#     return post_query.first()


