import React, { useContext } from "react"
import { ProductListContext } from "../../../context/Context"
import "./Search.scss"

const Search = () => {
    const { setSearch } = useContext(ProductListContext);

  return (
    <input
      className="searchBox"
      type="text"
      id="searchBox"
      data-testid="searchBox"
      placeholder="25 milyon’dan fazla ürün içerisinde ara"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search