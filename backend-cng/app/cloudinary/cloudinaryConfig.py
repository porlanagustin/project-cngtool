import cloudinary
from config import settings

cloudinary.config( 
    cloud_name = settings.cloud_name_cloudinary,
    api_key = settings.api_key_cloudinary,
    api_secret = settings.api_secret_cloudinary,
    secure=True
)