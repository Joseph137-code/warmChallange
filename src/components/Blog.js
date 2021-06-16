import React, { useContext } from 'react';
import BlogContext from '../context/blog/blogContext';

const BlogActual = () => {
    // Extrar blog de state inicial
    const blogContext = useContext(BlogContext);
    const { blog} = blogContext;

    if(!blog) return  <div className="px-5 py-5 my-5 text-center bg-info">
    <h1 className="display-3 fw-bold">Selecciona</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mt-4">Selecciona un blog para comenzar. Podras ver más detalles, editar o eliminar.</p>
    </div>
  </div>

    // Array destructuring para extraer el blog actual
    const [blogseleccionado] = blog;


    return (
        <div className="card mt-5">
            <h5 className="card-header text-center">Blog Seleccionado: {blogseleccionado.id}</h5>
            <div className="card-body">
                <h5 className="card-title">{blogseleccionado.title}</h5>
                <p className="card-text">{blogseleccionado.body}</p>
                <button type="button" className="btn btn-danger mx-3">Editar</button>
                <button type="button" className="btn btn-warning">Eliminar</button>
            </div>
            </div>

      );
}
 
export default BlogActual;