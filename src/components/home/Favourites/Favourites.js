import React, {Component} from 'react';
import '../Home.scss';


class Favourites extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
    }



    removeImage = (e) => {
        const imageUrl = e.target.previousElementSibling.src;
        const newImageList = this.state.images.filter(item => {
            return item !== imageUrl;
        })
        localStorage.setItem('favourites', JSON.stringify(newImageList));
        
        this.setState({
            images: newImageList
        })
    }


    componentDidMount(){
        const favouriteImages = JSON.parse(localStorage.getItem('favourites'));
        this.setState({
            images: favouriteImages
        })
    }

    render(){

        if(!this.state.images || this.state.images.length === 0){
            return(
                <div className='fav-page'>
                    <h1 className='favourite-title'>You don't have any favourite pics!</h1>
                </div>
            )
        }
        else{
            return(
                <div className='fav-page'>
                <h1 className='favourite-title'>Favourites</h1>
                    <div className='fav-images'>  
                    {
                        this.state.images.map((image, index) => {
                            return(
                                <div class='fav-image-card'>
                                    <img key={index} src={image} alt='FavouriteImage'/>
                                    <button className='remove-btn' onClick={this.removeImage}>Remove</button>
                                </div>
                                
                            )
                        })
                    }  
                    </div>
                </div>
            )
        }

    }
}

export default Favourites;