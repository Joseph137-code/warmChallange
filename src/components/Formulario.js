import React, { useContext,} from 'react';
import BlogContext from '../context/blog/blogContext';
import {useFormik} from "formik";
import * as Yup from 'yup';

const Formulario = () => {
  // Extrar blog de state inicial
  const blogContext = useContext(BlogContext);
  const { agregarBlog, blog} = blogContext;

    // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
        título: '',
        contenido: ''
    },
    validationSchema: Yup.object({
        título: Yup.string()
                  .required('El título es Obligatorio'),
        contenido: Yup.string()
                  .required('Ingrese un contenido')
    }),
    onSubmit: valores => {
        agregarBlog(valores)
    
    }
});

    return ( 
      <div>
        { blog ? (
            <div className="card mt-5">
            <h5 className="card-header text-center">Blog Creado: {blog.id}</h5>
            <div className="card-body">
                <h5 className="card-title">{blog.título}</h5>
                <p className="card-text">{blog.contenido}</p>
                <button type="button" className="btn btn-warning mx-3">Editar</button>
                <button type="button"  className="btn btn-danger">Eliminar</button>
            </div>
            </div>
        ): (
        
          <form
              onSubmit={formik.handleSubmit}
              className="p-4 p-md-5 border rounded-3 bg-light"
            >
              {formik.touched.título && formik.errors.título? (
                <div className="alert alert-danger text-center" role="alert">
                  <strong>Error!</strong> {formik.errors.título}
                </div>
              ) : null}
              
  
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="título"
                  placeholder="name@example.com"
                  value={formik.values.título}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingInput">Título</label>
              </div>
              {formik.touched.contenido && formik.errors.contenido? (
                  <div className="alert alert-danger text-center" role="alert">
                    <strong>Error!</strong> {formik.errors.contenido}
                  </div>
              ) : null}
              <div className="mb-3">
                    <label htmlFor="description" className="form-label">Contenido</label>
                    <textarea 
                      className="form-control" 
                      type="text" 
                      id="contenido"
                      placeholder="contenido"
                      value={formik.values.contenido}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} 
                      rows="5" required></textarea>
                </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Crear Blog</button>
              <hr className="my-4" />
    
            </form>
        )}

      </div>
    
            
          
     );
}
 
export default Formulario;