import React from 'react';

const Blog = ({blogs}) => {
    console.log(blogs)
    return (
        <ul className="list-group">
            {blogs.map(blog => (
               <li className="list-group-item"
                    blog={blog}
                    key={blog.id}
               >
                {blog.title}
                <div>
               <button type="button" className="btn btn-info">Detalles</button>
                   <button type="button" className="btn btn-danger">Eliminar</button>
                   <button type="button" className="btn btn-warning">Editar</button>
               </div>
               </li>
               
            ))}
        </ul>
        
        /*<li className="list-group-item">{blog.title}
        <div>
            <button type="button" className="btn btn-info">Detalles</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
                <button type="button" className="btn btn-warning">Editar</button>
            </div>
                     
        </li>*/
     );
}
 
export default Blog;