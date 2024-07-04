import cloudinary
from ..config import settings
from cloudinary.uploader import upload as cloudinary_upload
from fastapi import HTTPException, status

cloudinary.config( 
    cloud_name = settings.cloud_name_cloudinary,
    api_key = settings.api_key_cloudinary,
    api_secret = settings.api_secret_cloudinary,
    secure=True
)

def upload_image_to_cloudinary(file, public_id: str):
    try:
        result = cloudinary_upload(file, resource_type="image", public_id=public_id, transformation=[{"width": 400, "height": 400}])
        url_image = result.get('secure_url')
        
        if not url_image:
            raise Exception("Failed to obtain image URL from Cloudinary")
        return url_image
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))