import React from 'react';

const Blog = ({blog}) => {

    return (
        <li className="list-group-item">{blog.title}
            <button type="button" className="btn btn-info">Detalles</button>
            <button type="button" className="btn btn-danger">Eliminar</button>
            <button type="button" className="btn btn-warning">Editar</button>
        </li>
     );
}
 
export default Blog;