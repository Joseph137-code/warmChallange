import React, { useState, useContext, useEffect } from 'react';
import BlogActual from '../components/Blog';
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
        <div>
            <div className="row featurette">
            <div className="col-md-5 mt-5">
                <div className="position-sticky">
                    <div className="p-4">
                        <h2 className="fst-italic">Tus blogs</h2>
                        <Blog
                            blogs={currentPosts}
                            key={blogs.id}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-7 mt-5 p-4">
                <BlogActual/>
            </div>
        </div>

        </div>
        
    );
}
 
export default Home;