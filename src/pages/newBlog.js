import React      from 'react';
import Formulario from '../components/Formulario';


const newBlog = () => {
    return ( 
        <div className="container">
            <header className="pb-3 mb-5 border-bottom">
               <h1 className="titlo text-center">Crear Blog</h1>
            </header>
            <div className="p-4  rounded-3">
                <div className="col-8 offset-2">
                    <Formulario />
                </div>
            </div>
        </div>
     );
}
 
export default newBlog;