import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch> {/* switch returns the component only when the path matches*/}
          <Route exact path='/' component={Signin}/> {/*route defines the component to render */}
          <Route path='/register' component={Register}/>
          <ProtectedRoute path='/home' component={Home}/>
          <Route path='*' component={() => '404 Not Found'}/>
        </Switch>
    </div>
  );
}

export default App;
