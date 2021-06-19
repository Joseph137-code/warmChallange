import React, { useReducer } from 'react';
import BlogContext           from "./blogContext";
import BlogReducer           from "./blogReducer";
import clienteAxios          from '../../config/blog';

import { 
    OBTENER_BLOGS,
    BLOG_ERROR,
    AGREGAR_BLOG,
    BLOG_ACTUAL,
    ELIMINAR_BLOG,
    ACTUALIZAR_BLOG,
    EDITAR_BLOG,
} from '../../types';


const BlogState = props => {
    const initialState = {
        blogs: [],
        errorblog: false,
        mensaje: null,
        blog: null,
        blogEdit:null,
        blogEditado: null
    }

    const [ state, dispatch ] = useReducer(BlogReducer, initialState);

    // Obtener los blog
    const obtenerBlogs = async () => {
        try {
            const resultado = await clienteAxios.get('/posts');
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
        console.log(resultado.data);
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

  // Elimina un blog
  const eliminarBlog = async blogId => {
    try {
        await clienteAxios.delete(`/posts/${blogId}`);
        dispatch({
            type: ELIMINAR_BLOG,
            payload: blogId
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

const formEditar = blog => {
    console.log(blog)
    dispatch({
        type: EDITAR_BLOG,
        payload: blog
    })
}

// Actualizar un blogS
const actualizarBlog = async blogId => {
    console.log(blogId)
    try {
        const resultado = await  clienteAxios.put(`/posts/${blogId.id}`, blogId);
        console.log(resultado)
        dispatch({
            type: ACTUALIZAR_BLOG,
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
                blogEdit: state.blogEdit,
                mensaje: state.mensaje,
                blog: state.blog,
                blogEditado: state.blogEditado,
                obtenerBlogs,
                agregarBlog,
                BlogActual,
                eliminarBlog,
                formEditar,
                actualizarBlog,

            }}
        >{props.children}

        </BlogContext.Provider>
    )
}
export default BlogState;