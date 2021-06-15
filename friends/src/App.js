import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import axiosWithAuth from './utils/axiosWithAuth';

const initialState = {
  isAuth: false
}

function App() {
  
  const [state, setState] = useState(initialState);

  const logout = () => {

    console.log('logging out');

    axiosWithAuth()
      .post('/api/logout')

      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
        setState({
          isAuth: false
        })
      })

      .catch(err => {
        console.log(err);
      })
  };
  
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {!state.isAuth ? <Link to='/login'>Login</Link> : <div></div>}
          </li>

          <li>
            {state.isAuth ? <Link to='/friends'>Friends</Link> : <div></div>}
          </li>

          <li>
            {state.isAuth ? <Link onClick={logout}>Logout</Link> : <div></div>}
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' >
            <Login setAuth={setState} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;