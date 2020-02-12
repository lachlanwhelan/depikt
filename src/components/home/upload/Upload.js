import React, {Component} from 'react';
import UploadForm from './UploadForm';
import './Upload.scss';


class Upload extends Component{
    constructor(props){
        super(props);

        this.state = {
            file: '',
            url: '',
            tag: '',
            category:'',
            isValid: true,
            loading: false,
        }
    }

    uploadFile = (file, signedRequest, url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
                this.setState({
                        url: url
                    }, () => {
                        this.props.addImage(this.state)
                    }
                )
            }
            else{
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
    }


    getSignedRequest = (file) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://stark-ridge-74307.herokuapp.com/sign-s3?file-name=${file.name.replace(/\s/,'-')}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
              this.uploadFile(file, response.signedRequest, response.url);
            }
            else{
              alert('Could not get signed URL.');
            }
          }
        };
        xhr.send();
    }

    handleFileChange = (e) => {
        //create fileReader instance
        let reader = new FileReader();
        //get file
        let file = e.target.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.setState({
                file: file,
                url: reader.result
            })   
        }
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

            this.getSignedRequest(this.state.file);

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

            <div className='upload-page' onClick={this.props.handlePageClick}>
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