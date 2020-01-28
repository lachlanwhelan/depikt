import React from 'react';
import './Profile.scss';
import auth from '../../../Authentication';
const Profile = ({initialImages, deleteImage}) => { 
    return(
        <div className='profile-page'>
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
                    initialImages.map(item => {
                        if(item.name === auth.user.name){
                            return (
                                <div className='image-card' key={item.id}>
                                    <img src={item.url} alt={item.tag} id={item.id}/>
                                    <button className='delete-btn' onClick={() => deleteImage(item)}>Delete</button>
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