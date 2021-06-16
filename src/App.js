import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AuthState from './context/auth/authState';
import BlogState from './context/blog/blogstate';
import Home from "./pages/home";
import Login from "./pages/login"
import New from "./pages/newBlog"
import './App.css';

function App() {
  return (
    <BlogState>
      <AuthState>
        <Router>
            <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/Nuevo" component={New} />
            </Switch>
        </Router>
      </AuthState>
    </BlogState>
    
  );
}

export default App;
