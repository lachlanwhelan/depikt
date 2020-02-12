import React from 'react';
import './Profile.scss';
import auth from '../../../Authentication';
const Profile = ({initialImages, deleteImage, handlePageClick}) => { 
    return(
        <div className='profile-page' onClick={handlePageClick}>
            <div className='box-1'>
                <h1>Details</h1>
                <div className='profile-card'>
                    <h3>Id: {auth.user.id}</h3>
                    <h3>Name: {auth.user.name}</h3>
                    <h3>Email: {auth.user.email}</h3>                 
                </div>
            </div>

            <div className='box-2'>
            <h1>Your uploaded images</h1>
                <div className='image-uploads'>
                {
                    initialImages.map(image => {
                        if(image.name === auth.user.name){
                            return (
                                <div className='image-card' key={image.id}>
                                    <img src={image.url} alt={image.tag} id={image.id}/>
                                    <button className='delete-btn' onClick={() => deleteImage(image)}>Delete</button>
                                </div>
                            )
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Profile;