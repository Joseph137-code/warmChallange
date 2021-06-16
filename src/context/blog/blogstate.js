import React, { useReducer } from 'react';
import BlogContext           from "./blogContext";
import BlogReducer           from "./blogReducer";
import clienteAxios          from '../../config/blog';

import { 
    OBTENER_BLOGS,
    BLOG_ERROR,
    AGREGAR_BLOG,
    BLOG_ACTUAL,
    /*VALIDAR_BLOG,
    ELIMINAR_BLOG,
    ACTUALIZAR_BLOG,
    LIMPIAR_BLOG,*/
} from '../../types';


const BlogState = props => {
    const initialState = {
        blogs: [],
        errorblog: false,
        mensaje: null,
        blog: null
    }

    const [ state, dispatch ] = useReducer(BlogReducer, initialState);

    // Obtener los blog
    const obtenerBlogs = async () => {
        try {
            const resultado = await clienteAxios.get('/posts');
            console.log(resultado.data)
            dispatch({
                type: OBTENER_BLOGS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: BLOG_ERROR,
                payload: alerta
            })
        }
    }

 // Agregar nuevo blog
 const agregarBlog = async blog=> {

    try {
        const resultado = await clienteAxios.post('/posts', blog);
        console.log(resultado);
        // Insertar el blog en el state
        dispatch({
            type: AGREGAR_BLOG,
            payload: resultado.data
        })
    } catch (error) {
        const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
        }
        
        dispatch({
            type: BLOG_ERROR,
            payload: alerta
        })
    }
}

   // Selecciona el blog que el usuario dio click
   const BlogActual = blog => {
    dispatch({
        type: BLOG_ACTUAL,
        payload: blog
    })
}


    return(
        <BlogContext.Provider
            value={{
                blogs: state.blogs,
                errorblog: state.errorblog,
                blogseleccionado: state.blogseleccionado,
                mensaje: state.mensaje,
                blog: state.blog,
                obtenerBlogs,
                agregarBlog,
                BlogActual
            }}
        >{props.children}

        </BlogContext.Provider>
    )
}
export default BlogState;