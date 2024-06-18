import cloudinary.uploader
from fastapi import APIRouter, Depends, status, HTTPException, Response, UploadFile, File
from .. import schemas, database, models, oauth2
from sqlalchemy.orm import Session
from ..cloudinary.cloudinaryConfig import cloudinary
from starlette.responses import JSONResponse

router = APIRouter(
    prefix="/manageSupplier",
    tags=['manageSupplier'] 
)

@router.post('/uploadSupplier', status_code=201)
def upload_supplier(file: UploadFile = File(...)):
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(status_code=400, detail="Invalid file type. Only JPEG and PNG are allowed.")
    try:
        result = cloudinary.uploader.upload(file.file, resource_type="image")
        
        return JSONResponse(content={"message": "Upload successful", "url": result['secure_url']}, status_code=201)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get('/downloadImg', status_code=status.HTTP_202_ACCEPTED)
def download():
    return "Images route"

# <html lang="en">
# <head>
#     <meta charset="UTF-8">
#     <meta name="viewport" content="width=device-width, initial-scale=1.0">
#     <title>Upload Image</title>
# </head>
# <body>
#     <h1>Upload Image to Cloudinary</h1>
#     <form id="upload-form">
#         <input type="file" id="file-input" name="file" accept="image/jpeg, image/png" required>
#         <button type="submit">Upload</button>
#     </form>
#     <p id="message"></p>
#     <img id="uploaded-image" src="" alt="Uploaded Image" style="display:none;">

#     <script>
#         document.getElementById('upload-form').addEventListener('submit', async (event) => {
#             event.preventDefault();
            
#             const fileInput = document.getElementById('file-input');
#             const formData = new FormData();
#             formData.append('file', fileInput.files[0]);

#             try {
#                 const response = await fetch('http://localhost:8000/uploadSupplier', {
#                     method: 'POST',
#                     body: formData
#                 });

#                 if (!response.ok) {
#                     throw new Error('Upload failed');
#                 }

#                 const result = await response.json();
#                 document.getElementById('message').textContent = result.message;
#                 document.getElementById('uploaded-image').src = result.url;
#                 document.getElementById('uploaded-image').style.display = 'block';
#             } catch (error) {
#                 document.getElementById('message').textContent = 'Error: ' + error.message;
#             }
#         });
#     </script>
# </body>
# # </html>