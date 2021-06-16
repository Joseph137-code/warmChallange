import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import Blog from './blog';

const Home = () => {
    // Extrar blog de state inicial
    const blogContext = useContext(BlogContext);
    const { blogs, obtenerBlogs } = blogContext;

    const [actualPagina, ] = useState(1);
    const [blogsPerPage] = useState(15);
    // Obtener proyectos cuando carga el componente
    useEffect(() => {

        obtenerBlogs();
        // eslint-disable-next-line
    }, []);
    const indexOfLastPost = actualPagina * blogsPerPage;
    const indexOfFirstPost = indexOfLastPost - blogsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    //const paginate = pageNumber => setActualPagina(pageNumber);



    return (
        <Blog
            blogs={currentPosts}
            key={blogs.id}
        />
    );
}
 
export default Home;