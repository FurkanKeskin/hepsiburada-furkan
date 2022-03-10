import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ProductListContext } from "../../context/Context";
import Header from "./Header";

describe("function called on click", () => {
  const mockValue = {
    setSearch: jest.fn(),
    search: "",
  };

  beforeEach(() => {
    render(
      <ProductListContext.Provider value={mockValue}>
        <Header />
      </ProductListContext.Provider>
    );
  });

  it("viewcheck", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
