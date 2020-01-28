import React, {Component} from 'react';
import '../Register/Register.scss';
import {Link} from 'react-router-dom';
import auth from '../../Authentication';

class Register extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            name: '',
            email: '',
            password: '',
            isValid: true
        }
    }
    
    
    handleOnChange = (event) => {
    const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }
    
    handleOnRegister = () => {
        const{name, email, password} = this.state;

        if(name || email || password){
            
            if(this.validateEmail(email)){
                auth.register(name, email, password)
                .then(() => {
                    console.log('props');
                    this.props.history.push('./home');
                })
            }
            else{
                this.setState({
                    isValid:false
                })
            }
        }else{
            this.setState({
                isValid: false
            })
        }
    }

    validateEmail = (email) => {
        //use regex - regular expression to test valid emails
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    render(){
        return(
            <div>
     <div className='sign-in'>
        
        <div className='form-wrapper'>
            <div>
                <h1 className='depik'>Depikt.</h1>
                <h3>Share your ideas</h3>
            </div>

            <div className={this.state.isValid? 'valid': 'invalid'}>
                    Please fill in all fields correctly
            </div>
                
            <form className='register-form'>
                <input type='text'
                 placeholder='name' 
                 name='name' 
                 onChange={this.handleOnChange}/>

                <input type='email'
                 placeholder='email'
                 name='email' 
                 onChange={this.handleOnChange}/>

                <input type='password' 
                 placeholder='password'
                 name='password' 
                 onChange={this.handleOnChange}/>

                <button className='btn' type='button' onClick={this.handleOnRegister}>Register</button>
                <p>OR</p>
                {/* <button className='btn' type='button'>Continue With Facebook</button> */}
            </form>
    
            Already a member?<Link to='/'>Log in</Link>
        </div>
    
        </div>
        </div>
        )
    }
}

export default Register;