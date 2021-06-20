import { 
    OBTENER_BLOGS,
    BLOG_ERROR,
    AGREGAR_BLOG,
    BLOG_ACTUAL,
    ELIMINAR_BLOG,
    ACTUALIZAR_BLOG,
    EDITAR_BLOG

} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                errorblog: false,
            }
        case AGREGAR_BLOG:
            return{
                ...state,
                blogs: [...state.blogs, action.payload],
                blog: [action.payload],
                errorblog: false,
            }
        case BLOG_ACTUAL:
            return {
                ...state,
                blog: state.blogs.filter(blog => blog === action.payload )
            }
        case EDITAR_BLOG:
            return {
                ...state,
                blogEdit: state.blogs.filter(blog => blog === action.payload )
            }
        case ACTUALIZAR_BLOG:
            return{
                ...state,
                blogEdit: null,
                blogs: state.blogs.map(blog => blog.id === action.payload.id  ? action.payload : blog),
                blog: [action.payload]
            }
        case ELIMINAR_BLOG:
            return{
                ...state,
                blogs: state.blogs.filter(blog => blog.id !== action.payload ),
                blog: null
            }
        case BLOG_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }
        
        default:
            return state;
    }
}