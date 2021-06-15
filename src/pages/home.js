import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import Blog from './blog';

const Home = () => {
    // Extrar blog de state inicial
    const blogContext = useContext(BlogContext);
    const {blogs, obtenerBlogs } = blogContext;

       // Obtener proyectos cuando carga el componente
       useEffect(() => {
       
        obtenerBlogs();
        // eslint-disable-next-line
    }, []);


    return (
        <ul className="list-group">
            {blogs.map(blog => (
                <Blog
                    blog={blog}
                    key={blog.id}
                />
            ))}
        </ul>
        
    );
}
 
export default Home;