import React from 'react';
import auth from '../../../Authentication';


const UploadForm = ({handleSubmit, handleFileChange, handleChange, url, isValid, loading}) => {
    return(
        <form className='upload-form' >
        <input name='user' defaultValue={auth.user} hidden/>
        <label className='file'>
            <input
            className='fileUpload' 
            type='file'
            name='image'
            accept='image/*'
            onChange={handleFileChange}
            />
            <span className='file-custom'></span>                    
        </label>

        <div>
            <div className='preview-img'><img src={url}  alt='sample-images'/></div>
        </div>
        
        <div className={isValid ? 'valid' : 'invalid'}>
            Something went wrong with the upload. Please try again.
        </div>
        
        <input type='text' 
        name='tag' 
        placeholder='#tag' 
        onChange={handleChange}
        required
        />

        <input type='text' 
        name='category' 
        placeholder='category' 
        onChange={handleChange}
        required
        />

        <input id='btn' className='btn' type='submit' value='Upload' required onClick={(e) => {
            handleSubmit(e);
        }}/>
        <span className={loading ? 'show': 'hide'}>Loading...</span>

    </form>  
    )
}

export default UploadForm;