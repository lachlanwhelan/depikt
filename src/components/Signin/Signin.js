import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Signin/Signin.scss';
import auth from '../../Authentication';

class Signin extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            email: '',
            password: '',
            isValid: true // controls simple input validation
        }
    }
    
    
    handleOnChange = (event) => {
    //watch changes for both input fields
    const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleOnLogin();
        }
    }
    
    handleOnLogin = () => {
    const{email, password} = this.state;

    if(!email || !password){
        this.setState({
            isValid:false
        })
    }
    else{
        //login is a thenable method because it returns a promise
        auth.login(email, password)
        .then(() => {
            //so use a callback to execute the route push
            if(auth.authenticated){
                this.props.history.push('/home');
            }else{
                this.setState({
                    isValid:false
                })
            }
        })
    }
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
                        Your email or password is invalid
                    </div>
                        
                    <div className='signin-form' onKeyPress={this.handleKeyPress}>
                        <input 
                        type='email'
                        placeholder='email'
                        onChange={this.handleOnChange}
                        name='email'
                        />
                        <input 
                        type='password' 
                        placeholder='password'
                        onChange={this.handleOnChange}
                        name='password'
                        />
                        <button 
                        className='btn' 
                        type='button'
                        onClick={this.handleOnLogin}
                        >Log in</button>
                        <p>OR</p>
                    {/*  <button className='btn' type='button'>Continue With Facebook</button> */}
                    </div>
                    
                    Dont have an account?<Link to='/register'>Register</Link>
                </div>
            
                </div>
            </div>
        )
    }
}

export default Signin;