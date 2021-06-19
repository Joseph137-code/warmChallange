import React, {useState, useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import { useHistory } from 'react-router-dom';


const BlogActual = () => {
  const history = useHistory(); // habilitar history para redirección
  // Extrar blog de state inicial
  const blogContext = useContext(BlogContext);
  const { blog, eliminarBlog ,formEditar, blogEdit } = blogContext;

  // nuevo estado de producto
  const  [  producto ,  guardarProducto ]  =  useState ( {
    title :'',
    body :'' 
} )

 // llenar el estado automaticamente
 useEffect (  ( )  =>  {
  guardarProducto ( blogEdit ) ;
} ,  [ blogEdit ] ) ;

  // Leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
        ...producto,
        [e.target.name] : e.target.value
    })
}
    // función que redirige de forma programada
    const redireccionarEdicion = blogseleccionado => {
      formEditar(blogseleccionado)
      history.push("/Editar")
  }
  

  if(!blog) return  <div className="px-5 py-5 my-5 text-center bg-info">
    <h1 className="display-3 fw-bold">Selecciona</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mt-4">Selecciona un blog para comenzar. Podras ver más detalles, editar o eliminar.</p>
    </div>
  </div>



    // Array destructuring para extraer el blog actual
    const [blogseleccionado] = blog;
  
  
    
    // Elimina un blog
    const onClickEliminar = () => {
        eliminarBlog(blogseleccionado.id)
    }


    return (
      <div>
      <div>
          <div className="card mt-5">
            <h5 className="card-header text-center">Blog Seleccionado: {blogseleccionado.id}</h5>
            <div className="card-body">
              <h5 className="card-title">{blogseleccionado.title}</h5>
              <p className="card-text">{blogseleccionado.body}</p>
              <button type="button" onClick={() => redireccionarEdicion(blogseleccionado)} className="btn btn-warning mx-3">editar</button>
              <button type="button" onClick={onClickEliminar} className="btn btn-danger">Eliminar</button>
            </div>
          </div>
      </div>

      </div>
      );
}
 
export default BlogActual;