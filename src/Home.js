import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push('/login');

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ?
    <button
    onClick={logout}
    >
    Logout
    </button> :
    <button
    onClick={login}
    >
    Login
    </button>;

  return (
      <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to='/'>React Demo</Link><br/>
      <button 
      className="navbar-toggler" 
      type="button"
       data-toggle="collapse"
      data-target="#navbarNav">
       <span className="navbar-toggler-icon"/>   
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav pull-right">
              <li className="nav-item">
              {button}
              </li>
          </ul>
      </div>
    </div>
    </nav>
    <h1 align="center">Hello world</h1>
    </div>
  );
};
export default Home;