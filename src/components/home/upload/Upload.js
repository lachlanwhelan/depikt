import React, {Component} from 'react';
import UploadForm from './UploadForm';
import imageCompression from 'browser-image-compression';
import './Upload.scss';


class Upload extends Component{
    constructor(props){
        super(props);

        this.state = {
            image: {},
            url: '',
            tag: '',
            category:'',
            isValid: true,
            loading: false,
        }
    }

    handleFileChange = (e) => {
        //create fileReader instance
        let reader = new FileReader();
        //get file
        let file = e.target.files[0];

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: false
        }

        reader.onloadend = () => {
            this.setState({
                selectedFile:file,
                url: reader.result //returns base64 url
            })
        }

        imageCompression(file, options)
        .then((compressedFile) => {
            this.setState({
                image: compressedFile
            })
            reader.readAsDataURL(compressedFile);
        })
        .catch(err => {
            console.log(err.message);
            
        }) 
    }

    
    

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit = (e) => {
        //prevent form from sending + refreshing page
        e.preventDefault();
        const {url, tag, category} = this.state;
        
        if(!url || !tag || !category){
            this.setState({
                isValid: false
            })
        }else{
            this.setState({
                isValid: true
            })
            this.props.addImage(this.state)
            if(this.state.loading === false){
                this.setState({
                    loading: true
                })
            }else{
                this.setState({
                    loading: false
                })
            }

        }
    }

    render(){
        return(

            <div className='upload-page'>
            <h1>Upload An Image</h1>
            <UploadForm handleSubmit={this.handleSubmit}
             handleChange={this.handleChange}
             handleFileChange={this.handleFileChange} 
             url={this.state.url} 
             isValid={this.state.isValid}
             loading={this.state.loading}
             />         
            </div>
        )
    }
}

export default Upload;