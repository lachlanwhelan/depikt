import React from 'react';
import './Images.scss';

const Images = ({initialImages, filteredImages, handlePageClick, handleOnImageClick}) => {
    if(!filteredImages){
        return(
            
            <div className='image-page' onClick={handlePageClick}>
            <div className='images'>
            {
                initialImages.map((item, index) => {
                        return(
                            <div className='imageItem' key={index}>
                            <img className='image' src={item.url} alt='' onClick={(e) => handleOnImageClick(e, item.name)} />
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }else{
        console.log(filteredImages);
        return(
            <div className='image-page'>
            <div className='images'>
            {
                filteredImages.map((item, index) => {
                        return(
                            <div className='imageItem' key={index}>
                            <img className='image' src={item.url} alt=''/>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}

export default Images;