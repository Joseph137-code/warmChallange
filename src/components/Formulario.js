import React, { useContext,}  from 'react';
import BlogContext            from '../context/blog/blogContext';
import {useFormik}            from "formik";
import * as Yup               from 'yup';
import { useHistory }         from 'react-router-dom';

const Formulario = () => {
  const history = useHistory();

  // Extrar blog de state inicial
  const blogContext = useContext(BlogContext);
  const { agregarBlog} = blogContext;
  
  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
        title:'',
        body:''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('El título es Obligatorio'),
      body: Yup.string()
        .required('Ingrese un contenido')
    }),
    onSubmit: valores => {
        agregarBlog(valores)
        history.push('/home');
    }
  });

    return ( 
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="p-4 p-md-5 border rounded-3"
        >
          {formik.touched.title && formik.errors.title ? (
            <div className="alert alert-danger text-center" role="alert">
              <strong>Error!</strong> {formik.errors.title}
            </div>
          ) : null}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="name@example.com"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Título</label>
          </div>
          {formik.touched.body && formik.errors.body ? (
            <div className="alert alert-danger text-center" role="alert">
              <strong>Error!</strong> {formik.errors.body}
            </div>
          ) : null}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Contenido</label>
            <textarea
              className="form-control"
              type="text"
              id="body"
              placeholder="body"
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="5"></textarea>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Crear Blog</button>
          <hr className="my-4" />
        </form>
      </div> 
     );
}
 
export default Formulario;