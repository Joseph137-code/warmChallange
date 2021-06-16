import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';

const Formulario = () => {
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
        //iniciarSesion(valores)
    }
});
    return ( 
    
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
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="contenido"
                  placeholder="contenido"
                  value={formik.values.contenido}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingPassword">Contenido</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
              <hr className="my-4" />
    
            </form>
          
     );
}
 
export default Formulario;