import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ProductListContext } from "../../../context/Context";
import Basket from "./Basket";

describe("function called on click", () => {
  let basketEnter, basketContainer, basketLeave, iPhone11, iPhone11RedCase;
  const mockValue = {
    basketItems: [
        {
            productId: 3,
            productName: "iPhone 11",
            brand: "Apple",
            color: "Kırmızı",
            colorEn: "Red",
            image: "images/productImages/image3.png",
            prevPrice: "12.580,00",
            currentPrice: "10.399,00",
            discount: "%4",
        },
        {
            productId: 2,
            productName: "Apple iPhone 11",
            brand: "Apple",
            color: "Sarı",
            colorEn: "Yellow",
            image: "images/productImages/image2.png",
            prevPrice: "12.555,00",
            currentPrice: "11.399,00",
            discount: "%17",
        }
    ],
    removeFromCart: jest.fn(),
    isBasketVisible: jest.mock,
    setIsBasketVisible: jest.fn(),
    setSortOption: jest.fn(),
    items: jest.mock,
    setItems: jest.fn(),
    isModalOpen: jest.mock,
    setIsModalOpen: jest.fn(),
    itemIndex: jest.mock,
    setItemIndex: jest.fn(),
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ProductListContext.Provider value={mockValue}>
        <Basket />
      </ProductListContext.Provider>
    );
    basketLeave = screen.getByTestId("basketMouseLeave");
    basketEnter = screen.getByTestId("basketMouseEnter");
  });

  it("view basket", () => {
    userEvent.hover(basketEnter);
    iPhone11RedCase = screen.getByTestId("item-3");
    iPhone11 = screen.getByTestId("item-2");
    basketContainer = screen.getByTestId("basketContainer");
    expect(basketContainer).toBeVisible();
  });

  it("hide basket", () => {
    userEvent.unhover(basketLeave);
    expect(basketContainer).not.toBeVisible();
  });

  it("remove iPhone 11 from cart", () => {
    userEvent.click(iPhone11);
    expect(iPhone11).not.toBeVisible();
  });

  it("remove iPhone 11 Case from cart", () => {
    userEvent.click(iPhone11RedCase);
    expect(iPhone11RedCase).not.toBeVisible();
  });
});
