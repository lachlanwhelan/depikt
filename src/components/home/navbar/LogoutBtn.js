import React from 'react';
import auth from '../../../Authentication';
import { useHistory} from 'react-router-dom';
import './Navbar.scss';

const LogoutBtn = () => {
    const history = useHistory();
    return(
        <button className='link' onClick={() => {
            localStorage.setItem('authenticated', false);
            auth.logout(
                () => {
                    history.push('/');
                }
            )
        }}>
        Logout
        </button>
    )
}

export default LogoutBtn;