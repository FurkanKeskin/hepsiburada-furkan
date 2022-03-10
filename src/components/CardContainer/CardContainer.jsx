import React, { useContext } from 'react'
import { ProductListContext } from '../../context/Context';
import Card from '../Card/Card';
import './CardContainer.scss';

function CardContainer() {
  const { products, currentPage } = useContext(ProductListContext);
  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  return (
      <ul className="card-container" data-testid="card-container-list">
         {products
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((product, index) => {
            return <Card key={index} product={product} />;
          })}
      </ul>
  )
}

export default CardContainer
