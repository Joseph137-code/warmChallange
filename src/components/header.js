import React, {useContext} from 'react';
import AuthContext         from '../context/auth/authContext';
import { useHistory }      from 'react-router-dom';

const Header = () => {
  const history = useHistory(); // habilitar history para redirección

  const authContext = useContext(AuthContext);
  const { autenticado, cerrarSesion} = authContext;

  // función que redirige de forma programada
  const redireccionarCrear = () => {
    history.push("/nuevo")
  }

  const redireccionarHome = () => {
    history.push("/home")
  }

    return (  
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => redireccionarHome()}>Blog 2.0</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            {autenticado ? (
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => redireccionarCrear()}>Crear Blog</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link mx-5" href="#!">Usuario Activo</a>
                  </li>
                </ul>
                <div className="text-end mt-1">
                  <li className="d-inline"><a href="/" onClick={() => cerrarSesion()} className="nav-link mx-2 d-inline">LogOut</a></li>
                </div>
              </div>
            ) : (
              null
            )}
          </div>
        </nav>
      </header>
    );
}
 
export default Header;