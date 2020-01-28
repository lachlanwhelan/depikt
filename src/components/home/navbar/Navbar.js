import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LogoutBtn from './LogoutBtn';
import auth from '../../../Authentication';
import './Navbar.scss';



class Navbar extends Component{
    constructor(props){
        super(props);
        
        this.state = { 
            searchInput: ''
        }
    }


    handleSearch = () => {
        this.props.handleSearch(this.state.searchInput);
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.handleSearch(this.state.searchInput);
        }
    }

    render(){
        return(
            <nav className='navbar'>
                <Link className='logo' to='/home' replace><FontAwesomeIcon icon={faHome} size='lg' onClick={this.props.reload}/></Link>
                <Searchbar handleSearch={this.handleSearch} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                <Link className='uploadLink' to='/home/upload'><FontAwesomeIcon icon={faPlus} size='lg'/></Link>
                <FontAwesomeIcon  className='profileLink' icon={faUser} size='lg' onClick={this.props.handleMenuClick}/>
                <div className='user-menu' id={this.props.menu ? 'dropdown' : ''}>
                <p>{`Hi ${auth.user.name}`}</p>
                    <Link className='link' to='/home' onClick={this.props.reload}>Home</Link>
                    <Link className='link' to='/home/profile'>Profile</Link>
                    <Link className='link' to='/home/favourites'>Favourites</Link>    
                    <LogoutBtn/>
                </div>
            </nav>
        )
    }
}

export default Navbar;