import React, { useState, 
    useContext, useEffect } from 'react';
import BlogActual           from '../components/Blog';
import BlogContext          from '../context/blog/blogContext';
import Blog                 from './blog';
import Pagination           from '../components/Paginacion';

const Home = () => {
    // Extrar blog de state inicial
    const blogContext = useContext(BlogContext);
    const { blogs, obtenerBlogs, } = blogContext;

    const [actualPagina, setActualPagina ] = useState(10);
    const [blogsPerPage] = useState(10);

    // Obtener Blog cuando carga el componente
    useEffect(() => {
        obtenerBlogs();
        // eslint-disable-next-line
    }, []);

    //Paginacion
    const indexOfLastPost = actualPagina * blogsPerPage;
    const indexOfFirstPost = indexOfLastPost - blogsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setActualPagina(pageNumber);

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
                            <Pagination
                                blogsPerPage={blogsPerPage}
                                totalPosts={blogs.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 mt-5 p-4">
                    <BlogActual />
                </div>
            </div>
        </div>
    );
}
 
export default Home;