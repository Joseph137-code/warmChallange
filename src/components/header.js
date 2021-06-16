import React from 'react';

const Header = () => {
    return (  
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">Blog 2.0</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/nuevo">Crear Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">Editar</a>
                </li>
              </ul>
              
              <div className="text-end mt-1">
       
          <li className="d-inline"><a href="/" className="nav-link mx-2 btn btn-success text-black d-inline">Login</a></li>
          <li className="d-inline"><a href="/logout" className="nav-link mx-2 btn btn-danger link-dark d-inline">LogOut</a></li>
     
      </div>
             
            </div>
          </div>
        </nav>
      </header>
    );
}
 
export default Header;