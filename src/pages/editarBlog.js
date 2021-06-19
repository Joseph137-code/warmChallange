import React, { useContext, useState, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import { useHistory } from 'react-router-dom'

const EditarBlog = () => {
  // Formulario y validación con formik y Yup
    const blogContext = useContext(BlogContext);
    const { blogEdit, actualizarBlog} = blogContext;
    const history = useHistory();
  // nuevo state de blog
  const [ blog, guardarBlog] = useState({
    title:'',
    body:'' 
  })

  // Array destructuring para extraer el blog actual
  const [blogseleccionado] = blogEdit;


  useEffect(() => {
    guardarBlog(blogseleccionado);
  }, [blogseleccionado])

// Leer los datos del formulario
const onChangeFormulario = e => {
      guardarBlog({
        ...blog,
        [e.target.name] : e.target.value
    })
}

const { body, title} = blog

const submitEditarProducto = e => {
  e.preventDefault();

  actualizarBlog(blog) ;
  history.push('/home');
}


    return ( 
      <div className="row justify-content-center">
      <div className="col-md-8">
          <div className="card">
              <div className="card-body">
                  <h2 className="text-center mb-4 font-weight-bold">
                      Editar Producto
                  </h2>

                  <form
                      onSubmit={submitEditarProducto}
                  >
                      <div className="form-group">
                          <label>Nombre Producto</label>
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Nombre Producto"
                              name="title"
                              value={title}
                              onChange={onChangeFormulario}
                          />
                      </div>

                      <div className="form-group">
                          <label>Precio Producto</label>
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Precio Producto"
                              name="body"
                              value={body}
                              onChange={onChangeFormulario}
                          />
                      </div>

                      <button 
                          type="submit"
                          className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                      >Guardar Cambios</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
     );
}
 
export default EditarBlog;