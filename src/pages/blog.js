import React, { useContext } from 'react';
import BlogContext from '../context/blog/blogContext';

const Blog = ({blogs}) => {
    // Extrar blog de state inicial
    const blogContext = useContext(BlogContext);
    const { BlogActual} = blogContext;
    
    // Función para agregar el blog actual
    const seleccionarBlog = blog => {
        BlogActual(blog); // Fijar un blog actual
    
    }


    return (
        <div className="list-group mt-3">
            {blogs.map(blog => (
                <button 
                    type="button" 
                    blog={blog}
                    key={blog.id} 
                    className="list-group-item list-group-item-action"
                    onClick={ () => seleccionarBlog(blog) }
                   
                >{blog.title}
                </button>
        
            ))}
      
        
        </div>





        /*<ul>
            
        </ul>
        
        <li className="list-group-item">{blog.title}
        <div>
            <button type="button" className="btn btn-info">Detalles</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
                <button type="button" className="btn btn-warning">Editar</button>
            </div>
                     
        </li>*/
     );
}
 
export default Blog;