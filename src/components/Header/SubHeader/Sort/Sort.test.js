import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { ProductListContext } from "../../../../context/Context";
import Sort from "./Sort";

describe("Dropdown Test", () => {
  let dropDownList, minPrice, maxPrice, latestZa, latest;
  const mockValue = {
    handleSelected: jest.fn(),
    sortByPriceProducts: jest.fn(),
    sortByDescriptionProducts: jest.fn(),
    sortOption: jest.fn(),
    setSortOption: jest.fn(),
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ProductListContext.Provider value={mockValue}>
        <Sort />
      </ProductListContext.Provider>
    );

    dropDownList = screen.getByTestId("dropDownList");
  });

  it("open dropdown menu", () => {
    userEvent.click(dropDownList);
    const options = screen.getByTestId("options");
    minPrice = screen.getByTestId("minimum-price");
    maxPrice = screen.getByTestId("maximum-price");
    latestZa = screen.getByTestId("latest-za");
    latest = screen.getByTestId("latest");
    expect(options).toBeVisible();
  });
});
