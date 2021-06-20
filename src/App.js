import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AuthState from './context/auth/authState';
import BlogState from './context/blog/blogstate';
import AlertaState from "./context/alerta/alertaState"
import Home from "./pages/home";
import Login from "./pages/login"
import New from "./pages/newBlog"
import './App.css';
import Header from './components/header';
import EditarBlog from './pages/editarBlog';
import RutaPrivada from "./components/ruta"



function App() {
  return (
    <BlogState>
      <AlertaState>
      <AuthState>
        <Router>
          <Header/>
            <Switch>
              <RutaPrivada exact path="/Home" component={Home} />
              <Route exact path="/" component={Login} />
              <RutaPrivada exact path="/Nuevo" component={New} />
              <RutaPrivada exact path="/Editar" component={EditarBlog} />
            </Switch>
        </Router>
      </AuthState>
      </AlertaState>
    </BlogState>
    
  );
}

export default App;
