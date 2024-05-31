from fastapi import APIRouter, Depends, status, HTTPException, Response
from .. import schemas, database, models, oauth2
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/vote",
    tags=['Vote'] 
)

@router.post('/', status_code=status.HTTP_201_CREATED)
def vote(vote: schemas.Vote, db: Session = Depends(database.get_db), current_user: int = Depends(oauth2.get_current_user)):

    try:
        vote_query = db.query(models.Vote).filter(models.Vote.supplier_id == vote.supplier_id, models.Vote.user_id == current_user.id)
        found_vote = vote_query.first()
        
        if found_vote:
            vote_query.delete(synchronize_session=False)
            db.commit()
            print("message: Vote dislike")
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"user {current_user.id} has already voted on supplier {vote.supplier_id}")
        else:
            new_vote = models.Vote(supplier_id=vote.supplier_id, user_id=current_user.id)
            db.add(new_vote)
            db.commit()
            print("Vote liked")
            return {"message": "vote liked"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal server error")

   