import React from 'react';

const Pagination = ({ blogsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Search results pages">
        <ul className="pagination justify-content-center mt-4">
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='#!' className='page-link'>
                    {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Pagination;