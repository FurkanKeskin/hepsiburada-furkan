import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ProductListContext } from "../../context/Context";
import CardContainer from "./CardContainer";

describe("function called on click", () => {
    const mockValue = {
      products: [],
      currentPage: 1,
    };
  
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <ProductListContext.Provider value={mockValue}>
          <CardContainer />
        </ProductListContext.Provider>
      );
    });
  
    it("viewcheck", () => {
      const header = screen.getByTestId("card-container-list");
      expect(header).toBeInTheDocument();
    });
  });
  