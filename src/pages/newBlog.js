import React from 'react';
import Formulario from '../components/Formulario';


const newBlog = () => {
    return ( 
        <div className="container">
            <header className="pb-3 mb-5 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Crea Tu Lugar</span>
                </a>
            </header>
            <h1>Crear Blog</h1>
            <div className="p-3 bg-light rounded-3">
                <div className="col-6 offset-3">
                    <Formulario />
                </div>
            </div>
        </div>
     );
}
 
export default newBlog;