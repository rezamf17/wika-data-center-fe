import React from 'react'
import '../../assets/css/UploadImage.css'

const UploadImage: React.FC = () => {
  return (
    <>
      <div className='card'>
        <div className='top'>
          <p>Drag & Drop image uploading</p>
        </div>
        <div className='drag-area'>
          <span className='select'> Drop images here</span>
          Drag & Drop image here or {" "}
          <span className='select'>
            Browse
          </span>
          <input name='file' type='file' className='file' multiple></input>
          <div className='container'>
            <div className="image">
              <span className='delete'>&times;</span>
            </div>
          </div>
          <img src='' alt='' />
        </div>
        <button type="button">
          Upload
        </button>
      </div>
    </>
  )
}

export default UploadImage