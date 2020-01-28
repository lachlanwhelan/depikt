import React, {Component} from 'react';
import Navbar from './navbar/Navbar';
import Upload from './upload/Upload';
import Images from './images/Images';
import {Route} from 'react-router-dom';
import Profile from './profile/Profile';
import auth from '../../Authentication';
import './Home.scss';
import Favourites from './Favourites/Favourites';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            initialImages: [],
            filteredImages: null,
            menu: false,
            imageUploaded: false,
            imageUrl: null,
            imageAuthor: ''
        }
    }


    addImage = (image) => {
        //need to send image file with formdata not json
        const formdata = new FormData()

        formdata.append('blob', image.image, `${image.image.name}`);
        formdata.append('tag', image.tag);
        formdata.append('category', image.category);
        formdata.append('id',auth.user.id);

        fetch('https://rocky-earth-38750.herokuapp.com/upload', {
            method: 'post',
            body: formdata
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                this.setState({
                    imageUploaded: true
                })
                this.props.history.push('/home');
                console.log(this.state.imageUploaded);
            }else{
                console.log(data);
            }
        })
    }

    deleteImage = (image) => {
        fetch('https://rocky-earth-38750.herokuapp.com/delete', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: image.id
            })
        })
        .then(response => response.json())
        .then(message => {
            console.log(message);
        })
    }

    handleOnImageClick = (event, name) => {
        this.setState({
            imageUrl: event.target.src,
            imageAuthor: name
        })
    }

    handleCancelImage = (event) => {
        const className = event.target.className

        if(className === 'imageClicked' || className === 'cancel btn'){
            this.setState({
                imageUrl: null
            })
        }
    }


    handleSearch = (value) => {
        if(value){
            //return images with tags that match search value
            fetch(`https://rocky-earth-38750.herokuapp.com/images/search?q=${value.toLowerCase()}`)
            .then(response => response.json())
            .then(images => {
                this.setState({
                    filteredImages: images
                })
            })  
        }else{
            this.setState({
                filteredImages: null
            })
        }
    }

    handleMenuClick = () => {
        this.state.menu ? 
        this.setState({
            menu: false
        })
        :
        this.setState({
            menu: true
        })

    }

    handlePageClick = () => {
        this.setState({
            menu: false
        })
    }

    saveToFavourites = () => {
        const images = JSON.parse(localStorage.getItem('favourites'));

        if(!images){
            localStorage.setItem('favourites', JSON.stringify([this.state.imageUrl]));
            this.props.history.push('/home/favourites')
            this.setState({
                imageUrl: null
            })
        }else{
            const newImageList = images.concat(this.state.imageUrl);
            localStorage.setItem('favourites', JSON.stringify(newImageList));
            this.props.history.push('/home/favourites')
            this.setState({
                imageUrl: null
            })
        }
    }

    reload = () => {
       this.setState({
        filteredImages: null
       })
    }



    getImages = () => {
        fetch('https://rocky-earth-38750.herokuapp.com/images')
        .then(response => response.json())
        .then(data => {
            this.setState({
                initialImages: [...data]
            })
        })
    }


    componentDidUpdate(){
        //fetch images and store in state after updates/uploads
        this.getImages();
    }

    componentDidMount(){
        //fetch images and store in state when mounts
        this.getImages();
    }

    render(){
        return(
            <div className='home-page'>
            
            <Navbar handleSearch={this.handleSearch}
             reload={this.reload}
             handleMenuClick={this.handleMenuClick}
             menu={this.state.menu}/>   

             
            <Route exact path='/home' render={() => 
            <Images initialImages={this.state.initialImages}
             filteredImages={this.state.filteredImages}  
             handlePageClick={this.handlePageClick} 
             handleOnImageClick={this.handleOnImageClick}/>
             }/>

            <Route path='/home/upload' render={() =>
             <Upload addImage={this.addImage}/>
             }/>

            <Route path='/home/profile' render={() => 
            <Profile initialImages={this.state.initialImages} deleteImage={this.deleteImage}/>
            }/>
            <div onClick={this.handleCancelImage} className={this.state.imageUrl ? 'imageClicked' : 'hide'}>
            <div className='image-grp'>
                <div className='image-container'>
                <img className='image-display' src={this.state.imageUrl} alt='img'/>
                <span className='author'>Uploaded by {this.state.imageAuthor}</span>
                </div>
                <div className='btn-grp'>
                    <button className='btn' onClick={this.saveToFavourites}>Add To Favourites</button>
                    <button className='cancel btn' onClick={this.handleCancelImage}>Cancel</button>
                </div>
            </div>
            </div>
            <Route path='/home/favourites' component={Favourites}/>
                <span className={this.state.imageUploaded? 'uploaded': 'hide'}>Uploaded!</span>
            </div>
            
        )
    }
}

export default Home;