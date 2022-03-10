import React, {useState, useContext} from 'react'
import { ProductListContext } from '../../../../context/Context';
import './Sort.scss'
const Sort = () => {
  const {
    sortProductsByPrice,
    sortProductsByDescription,
    sortOption,
    setSortOption,
  } = useContext(ProductListContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelected = (value) => {
    setSortOption(value);
    switch (value) {
      case "leastPrice":
        sortProductsByPrice("currentPrice", "asc");
        break;
      case "highestPrice":
        sortProductsByPrice("currentPrice", "desc");
        break;
      case "AZ":
        sortProductsByDescription("productName", "asc");
        break;
      case "ZA":
        sortProductsByDescription("productName", "desc");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="sort-button">
        <button
          className="dropDown"
          data-testid="dropDownList"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Sıralama
        </button>
        {isOpen && (
          <div className="options-container">
          <div className="options-wrap" data-testid="options">
            <span
              data-testid="minimum-price"
              onClick={() => handleSelected("leastPrice")}
              className={sortOption === "leastPrice" ? "active" : ""}
            >
              En Düşük Fiyat
            </span>
            <span
              data-testid="maximum-price"
              onClick={() => handleSelected("highestPrice")}
              className={sortOption === "highestPrice" ? "active" : ""}
            >
              En Yüksek Fiyat
            </span>
            <span
              data-testid="latest"
              onClick={() => handleSelected("AZ")}
              className={sortOption === "AZ" ? "active" : ""}
            >
              En Yeniler (A{">"}Z)
            </span>
            <span
              data-testid="latest-za"
              onClick={() => handleSelected("ZA")}
              className={sortOption === "ZA" ? "active" : ""}
            >
              En Yeniler (Z{"<"}A)
            </span>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sort