from . import models
from .database import engine
from .routers import user, auth, manageRestaurants, restaurantsToPdf
from fastapi import FastAPI
from .config import settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(restaurantsToPdf.router)
# app.include_router(vote.router)
app.include_router(manageRestaurants.router)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




    