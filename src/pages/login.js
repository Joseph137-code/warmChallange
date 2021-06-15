import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import {useFormik} from "formik";
import * as Yup from 'yup';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const { autenticado, iniciarSesion } = authContext;

    // En caso de que el password o usuario no exista
    useEffect(() => {
        if(autenticado) {
            props.history.push('/Home');
        }

        // eslint-disable-next-line
    }, [ autenticado, props.history]);

    // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
        email: Yup.string()
                  .email('El email no es válido')
                  .required('El Email es Obligatorio'),
        password: Yup.string()
                  .required('Ingrese su contraseña')
                  .min(5, 'El password debe contener al menos 5 caracteres')
    }),
    onSubmit: valores => {
        iniciarSesion(valores)
      //LoginAuth(valores)
    }
});
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Inicia Sesión</h1>
          <p className="col-lg-10 fs-4">Inicia sesión para más beneficios.</p>
          <hr className="my-4" />
          <p className="col-lg-10 fs-4">Así conoceras el listado de blog disponibles</p>

        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            onSubmit={formik.handleSubmit}
            className="p-4 p-md-5 border rounded-3 bg-light"
          >
            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger text-center" role="alert">
                <strong>Error!</strong> {formik.errors.email}
              </div>
            ) : null}
            

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger text-center" role="alert">
                  <strong>Error!</strong> {formik.errors.password}
                </div>
            ) : null}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4" />
  
          </form>
        </div>
      </div>
    </div>

    );
}
 
export default Login;