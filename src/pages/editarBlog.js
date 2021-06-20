import React, { useContext, 
      useState, useEffect } from 'react';
import BlogContext          from '../context/blog/blogContext';
import AlertaContext        from '../context/alerta/alertaContext';
import { useHistory }       from 'react-router-dom'

const EditarBlog = () => {

   // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  
  const blogContext = useContext(BlogContext);
  const { blogEdit, actualizarBlog, mensaje} = blogContext;

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

    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [blogseleccionado])

  // Leer los datos del formulario
  const onChangeFormulario = e => {
      guardarBlog({
        ...blog,
        [e.target.name] : e.target.value
    })
  }

  const {title,body} = blog

  const submitEditarProducto = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if(title.trim() === '' || body.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return
    }
    actualizarBlog(blog) ;
    history.push('/home');
  }


  return (
    <div className="container">
      <header className="pb-3 mb-5 border-bottom">
        <h1 className="titlo text-center">Editar Blog</h1>
      </header>
      <div className="p-4  rounded-3">
        <div className="col-8 offset-2">
          {alerta ? (
            <div className="alert" role="alert">
              <h4 className="alert-heading"> Error! {alerta.msg}</h4>
            </div>
          )
            : null}
          <form
            onSubmit={submitEditarProducto}
            className="p-4 p-md-5 border rounded-3"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                name="title"
                value={title}
                onChange={onChangeFormulario}
              />
              <label htmlFor="floatingInput">Título</label>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Contenido</label>
              <textarea
                className="form-control"
                type="text"
                placeholder="contenido"
                name="body"
                value={body}
                onChange={onChangeFormulario}
                rows="5"></textarea>
            </div>
            <button className="w-100 btn btn-primary" type="submit">Editar Blog!!</button>
            <hr className="my-4" />
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default EditarBlog;