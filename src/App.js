import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AuthState from './context/auth/authState';
import Home from "./pages/home";
import Login from "./pages/login"
import './App.css';

function App() {
  return (
    <AuthState>
      <Router>
          <Switch>
           <Route exact path="/Home" component={Home} />
           <Route exact path="/" component={Login} />
          </Switch>
      </Router>
    </AuthState>
    
  );
}

export default App;
