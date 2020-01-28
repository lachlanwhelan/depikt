import React from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';


const Searchbar = ({handleSearch, handleChange, handleKeyPress}) => {
    const history = useHistory();
    return(
    <form className='searchGroup' action='.' onSubmit={(e) => {e.preventDefault()}}>
        <input className='searchInput' type='text' name='search' id='search-thing' placeholder='search...' onChange={handleChange} onKeyPress={handleKeyPress}/>
        <button className='searchButton' onClick={
            () => {
            handleSearch();
            history.push('/home');
        }}><FontAwesomeIcon icon={faSearch} size='lg'/></button>
    </form>
    )
}

export default Searchbar;