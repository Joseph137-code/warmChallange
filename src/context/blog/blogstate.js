import React, { useReducer } from 'react';
import BlogContext           from "./blogContext";
import BlogReducer           from "./blogReducer";
import clienteAxios          from '../../config/blog';

import { 
    OBTENER_BLOGS,
    BLOG_ERROR,
    /*AGREGAR_BLOG,
    VALIDAR_BLOG,
    ELIMINAR_BLOG,
    BLOG_ACTUAL,
    ACTUALIZAR_BLOG,
    LIMPIAR_BLOG,*/
} from '../../types';


const BlogState = props => {
    const initialState = {
        blogs: [],
        errorblog: false,
        blogseleccionado: null,
        mensaje: null
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




    return(
        <BlogContext.Provider
            value={{
                blogs: state.blogs,
                errorblog: state.errorblog,
                blogseleccionado: state.blogseleccionado,
                mensaje: state.mensaje,
                obtenerBlogs 
            }}
        >{props.children}

        </BlogContext.Provider>
    )
}
export default BlogState;