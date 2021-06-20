import React, { useReducer } from 'react';
import AuthContext           from './authContext';
import AuthReducer           from './authReducer';
import clienteAxios          from '../../config/login';

import { 
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        mensaje: null, 
        cargando: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    // Cuando el usuario inicia sesión
    const iniciarSesion = async valores => {
        try {
            const response = await clienteAxios({
                method: 'POST',
                data : { 
                    email :`${valores.email}`,
                    password: `${valores.password }`
                } ,
            })
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data
            })
        } catch (error) {
            const alerta = {
                msg: error.response.data.error,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                mensaje: state.mensaje,
                cargando: state.cargando,
                iniciarSesion,
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;