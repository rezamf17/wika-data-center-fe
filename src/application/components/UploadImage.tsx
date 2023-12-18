import React, { useState, useRef } from 'react'
import '../../assets/css/UploadImage.css'

interface Image {
  name: string;
  url: string;
  base64: string;
}

const UploadImage: React.FC = () => {
  const [images, setImages] = useState<Array<Image>>([]);
  const [base64Image, setBase64Image] = useState('');
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function selectedFiles() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  }

  function onFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files?.length) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;

      if (!images.some((e: any) => e.name === files[i].name)) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result as string;
          setBase64Image(base64String)
          // Set base64 string to state
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
              base64: base64String, // Tambahkan key base64
            },
          ]);
        };

        // Read the image as base64
        reader.readAsDataURL(files[i]);
      }
    }
  }

  function deleteImage(index: number) {
    setImages((prevImages) =>
      prevImages.filter((_, i) => i != index)
    )
  }

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setIsDragging(true)
    event.dataTransfer.dropEffect = "copy"
  }

  function onDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setIsDragging(false)
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setIsDragging(false)
    const files = event.dataTransfer.files
    if (!files?.length) return;
    if (files !== null && files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue
      if (!images.some((e: any) => e.name === files[i].name)) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result as string;
          setBase64Image(base64String)
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
              base64: base64String
            }
          ])
        }
        reader.readAsDataURL(files[i]);
      }
    }
  }

  function upload() {
    console.log('images', images)
    console.log('base64', base64Image)
  }


  return (
    <>
      <div className='card'>
        <div className='top'>
          <p>Drag & Drop image uploading</p>
        </div>
        <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
          {
            isDragging ? (
              <span className='select'> Drop images here</span>
            ) : (
              <>
                Drag & Drop image here or {" "}
                <span className='select' role='button' onClick={selectedFiles}>
                  Browse
                </span>
              </>
            )
          }
          <input name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFileSelect}></input>
        </div>
        <div className='container'>
          {images.map((images: { name: string; url: string }, index: number) => (
            <div className="image" key={index}>
              <span className='delete' onClick={() => deleteImage(index)}>&times;</span>
              <img src={images.url} alt={images.name} />
            </div>
          ))}
        </div>
        <button type="button" onClick={upload}>
          Upload
        </button>
      </div>
    </>
  )
}

export default UploadImage