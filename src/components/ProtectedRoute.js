import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import auth from '../Authentication';

//home component gets passed to protected route
//...rest operator gathers any number of args into an array
const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <div>
        {/* spread operator unpacks elements of the array {...rest} = path and component */} 
        <Route {...rest} render={
                            (props) => {
                    //check if user is authenticated first
                    if(auth.isAuthenticated()){
                        return <Component {...props} user={auth.user}/>
                    }else{
                    //if not authenticated return Redirect component with signin path
                        return <Redirect to={
                            {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                            }
                        }/>
                    }
                }
        }/>
        </div>
    )
}

export default ProtectedRoute;