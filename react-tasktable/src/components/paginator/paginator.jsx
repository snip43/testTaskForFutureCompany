import React from 'react';

const Paginator = ({ totalUsers, pageSize, currentPage, setCurrenPage }) => {
  const countPages = Math.ceil(totalUsers / pageSize);
  let pages = [];
  for (let i = 1; i <= countPages; i++) {
    pages.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm justify-content-center mt-3">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {pages.map((page, index) => {
          return (
            <li
              className={currentPage === page ? `active page-item` : `page-item`}
              key={index}
              onClick={() => setCurrenPage(page)}>
              <a className="page-link " href="#">
                {page}
              </a>
            </li>
          );
        })}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Paginator;
