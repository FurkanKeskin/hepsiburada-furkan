import React, { useContext, useState, useEffect } from "react";
import {ProductListContext } from '../../../context/Context';
import "./Paginator.scss";

const Paginator = () => {
  const {
    products,
    currentPage,
    setCurrentPage,
    productsCount,
    setProductsCount,
  } = useContext(ProductListContext);
  const [totalPages, setTotalPages] = useState([1]);

  useEffect(() => {
    setProductsCount(products.length);
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < Math.ceil(productsCount / 12); i++) {
      tempArray.push(i + 1);
    }
    setTotalPages(tempArray);
  }, [productsCount]);

  return (
    <nav>
      <ul className="pagination">
        <button
          data-testid="previous-page"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            } else {
              return;
            }
          }}
        >
          &lt;
        </button>
        {totalPages.map((number) => (
          <li key={number}>
            <button
              data-testid={"page-" + number}
              className={currentPage === number ? "active_page" : ""}
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          data-testid="next-page"
          onClick={() => {
            if (currentPage < totalPages.length) {
              setCurrentPage(currentPage + 1);
            } else {
              return;
            }
          }}
        >
          &gt;
        </button>
      </ul>
    </nav>
  );
}

export default Paginator