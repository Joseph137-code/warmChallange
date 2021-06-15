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

export default (state, action) => {
    switch(action.type) {
        case OBTENER_BLOGS:
            console.log(action.payload)
            return {
                ...state,
                blogs: action.payload
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