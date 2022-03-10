import React, {useState, useEffect, createContext } from 'react'
import { products as productList } from '../data/products'
import Wrapper from '../components/Wrapper/Wrapper'

export const ProductListContext = createContext();

const Context = () => {
    const [basketItems, setBasketItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsCount, setProductsCount] = useState();

    // Basket items to the local storage
    useEffect(() => {
        setProducts(productList);
        setBasketItems(JSON.parse(localStorage.getItem("basket")) || []);
    }, []);

    useEffect(() => {
        if (search !== "" && search.length > 2) {
            let searchedProducts = productList.filter((x) =>
                x.productName.toLowerCase().includes(search.toLowerCase())
            );
            setProducts(searchedProducts);
        } else {
            setProducts(productList);
        }
    }, [search]);

    useEffect(() => {
        if (filterOptions.length > 0) {
            let filteredProducts = [...productList];
            filterOptions.forEach((option) => {
                filteredProducts = filteredProducts.filter(
                    (x) => x[option.type] === option[option.type]
                );
            });
            setProducts([...filteredProducts]);
        } else {
            setProducts([...productList]);
        }
    }, [filterOptions]);

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    // add to localStorage and to the Basket
    const addToBasket = (item) => {
        let localBasket = [...basketItems];
        localBasket.push(item);
        localStorage.setItem("basket", JSON.stringify(localBasket));
        setBasketItems(localBasket);
    };

    // Remove product from cart and localStorage
    const removeBasketItem = (index) => {
        let localBasket = [...basketItems];
        localBasket.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(localBasket));
        setBasketItems(localBasket);
    };

    // fires when sorting products by price
    const sortProductsByPrice = (by, type) => {
        let sortedArray = [];
        if (type === "asc") {
            setSortOption("leastPrice");
            sortedArray = products.sort(function(a, b) {
                return parseFloat(a[by]) - parseFloat(b[by]);
            });
        } else {
            setSortOption("highestPrice");
            sortedArray = products.sort(function(a, b) {
                return parseFloat(b[by]) - parseFloat(a[by]);
            });
        }
        setProducts([...sortedArray]);
    };

    // fires when sorting products by Description(Title)
    const sortProductsByDescription = (by, type) => {
        let sortedArray = [];
        if (type === "asc") {
            setSortOption("AZ");
            sortedArray = products.sort((a, b) => {
                var descA = a[by].toLowerCase(),
                    descB = b[by].toLowerCase();
                if (descA < descB) {
                    return -1;
                }
                if (descA > descB) {
                    return 1;
                }
                return 0;
            });
        } else {
            setSortOption("ZA");
            sortedArray = products.sort((a, b) => {
                var descA = a[by].toLowerCase(),
                    descB = b[by].toLowerCase();
                if (descA < descB) {
                    return 1;
                }
                if (descA > descB) {
                    return -1;
                }
                return 0;
            });
        }
        setProducts([...sortedArray]);
    };

    // Context properties
    const properties = {
        products,
        setProducts,
        basketItems,
        setBasketItems,
        addToBasket,
        removeBasketItem,
        filterOptions,
        setFilterOptions,
        sortOption,
        setSortOption,
        sortProductsByDescription,
        sortProductsByPrice,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        productsCount,
        setProductsCount,
    };
    
  return (
  <>
    <ProductListContext.Provider value = { properties } >
        <Wrapper />
    </ProductListContext.Provider>
    </>
  );
};

export default Context;