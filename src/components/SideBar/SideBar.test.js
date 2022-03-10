import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { products } from '../../data/products'
import { ProductListContext } from "../../context/Context";
import SideBar from './SideBar'

describe("function called on click", () => {
  beforeEach(() => {
    const mockValue = {
      products: products,
      filterOptions: [],
      setFilterOptions: jest.fn(),
      setProducts: jest.fn(),
      sortProductsByPrice: jest.fn(),
      sortProductsByDescription: jest.fn(),
      setColors: jest.fn(),
      setBrands: jest.fn(),
      colors: jest.mock,
      brands: jest.mock,
    };

    render(
      <ProductListContext.Provider value={mockValue}>
        <SideBar />
      </ProductListContext.Provider>
    );
  });

  it("filterby brand", () => {
    const redColorFilter = screen.getByTestId("color-Red");
    userEvent.click(redColorFilter);
  });
});
