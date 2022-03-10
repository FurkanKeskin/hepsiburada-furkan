import React, { useContext, useState, useEffect } from "react";
import { ProductListContext } from '../../context/Context';
import "./SideBar.scss";

const SideBar = (props) => {
  const {
    products,
    filterOptions,
    setFilterOptions,
    sortProductsByPrice,
    sortProductsByDescription,
  } = useContext(ProductListContext);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);

  // fires when products change and sets filters
  useEffect(() => {
    setFilterByColor();
    setFilterByBrand();
    // eslint-disable-next-line
  }, [products]);

  // Filter products by color
  const setFilterByColor = () => {
    let filteredByColor = [];
    // eslint-disable-next-line
    products.map((item) => {
      if (filteredByColor.filter((x) => x.color === item.color).length <= 0) {
        filteredByColor.push({
          type: "color",
          color: item.color,
          colorEn: item.colorEn,
          count: 1,
        });
      } else {
        filteredByColor.filter((x) => x.color === item.color)[0].count += 1;
      }
    });
    setColors(filteredByColor);
  };

  // filters products by Brands
  const setFilterByBrand = () => {
    let filteredByBrand = [];
    // eslint-disable-next-line
    products.map((item) => {
      if (filteredByBrand.filter((x) => x.brand === item.brand).length <= 0) {
        filteredByBrand.push({
          type: "brand",
          brand: item.brand,
          count: 1,
        });
      } else {
        filteredByBrand.filter((x) => x.brand === item.brand)[0].count += 1;
      }
    });
    setBrands(filteredByBrand);
  };

  // sets filter data
  const setFilters = (item) => {
    let options = [...filterOptions, item];
    setFilterOptions(options);
  };

  // Removes filters
  const removeFromFilters = (item) => {
    if (filterOptions.length > 0) {
      let newFilter = [...filterOptions];
      let ind = newFilter.findIndex((x) => x[item.type] === item[item.type]);
      newFilter.splice(ind, 1);
      setFilterOptions([...newFilter]);
    }
  };

  return (
    <>
      <div className="filter-wrapper">
        <ul id="color">
          <h4>Renk</h4>
          {colors.length > 0 &&
            colors.map((item) => {
              if (
                filterOptions.filter((x) => x.color === item.color).length > 0
              ) {
                return (
                  <li
                    onClick={() => removeFromFilters(item)}
                    className="filter-item"
                    key={"rem" + item.colorEn}
                    id={"rem" + item.colorEn}
                  >
                    {item.color}&nbsp;({item.count})
                  </li>
                );
              } else {
                return (
                  <li
                    data-testid={"color-" + item.colorEn}
                    className="filter-item"
                    id={"color-" + item.colorEn}
                    key={item.color}
                    onClick={() => setFilters(item)}
                  >
                    {item.color}&nbsp;({item.count})
                  </li>
                );
              }
            })}
        </ul>
        <ul className="sorting">
          <h4>Sıralama</h4>
            <li
              className="filter-item"
              key="price-asc"
              onClick={() => sortProductsByPrice("currentPrice", "asc")}
            >
              En Düşük Fiyat
            </li>
            <li
              className="filter-item"
              key="price-desc"
              onClick={() => sortProductsByPrice("currentPrice", "desc")}
            >
              En Yüksek Fiyat
            </li>
            <li
              className="filter-item"
              key="newest-asc"
              onClick={() => sortProductsByDescription("productName", "asc")}
            >
              En Yeniler (A{">"}Z)
            </li>
            <li
              className="filter-item"
              key="newest-desc"
              onClick={() => sortProductsByDescription("productName", "desc")}
            >
              En Yeniler (Z{"<"}A)
            </li>
          </ul>
          <ul id="brand">
            <h4>Marka</h4>
            {brands.length > 0 &&
              brands.map((item) => {
                if (
                  filterOptions.filter((x) => x.brand === item.brand).length > 0
                ) {
                  return (
                    <li
                      onClick={() => removeFromFilters(item)}
                      className="filter-item"
                      key={"rem-brand" + item.brand}
                    >
                      {item.brand}&nbsp;({item.count})
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={"brand" + item.brand}
                      className="filter-item"
                      onClick={() => setFilters(item)}
                    >
                      {item.brand}&nbsp;({item.count})
                    </li>
                  );
                }
              })}
          </ul>
      </div>
    </>
  );
};

export default SideBar;
