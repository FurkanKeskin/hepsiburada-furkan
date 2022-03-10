import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ProductListContext } from "../../context/Context";
import Card from "./Card";

describe("function called on click", () => {
    const mockValue = {
        basketItems: [],
        addToBasket: jest.fn(),
    };

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render( <
            ProductListContext.Provider value = { mockValue } >
            <
            Card product = {
                {
                    productId: 5,
                    desc: "Xiaomi Redmi Note 10S 128 GB 6 GB Ram",
                    brand: "Xiomi",
                    color: "Kırmızı",
                    colorEn: "red",
                    image: "images/productImages/image1.png",
                    price: "190,85",
                    actualPrice: "130,00",
                    sale: "12%",
                }
            }
            /> <
            /ProductListContext.Provider>
        );
    });

    it("add to basket", () => {
        const addToBasket = jest.fn();
        const button = screen.getByTestId("add-to-basket-5");
        userEvent.click(button);
        expect(addToBasket).toHaveBeenCalledTimes(0);
    });
});