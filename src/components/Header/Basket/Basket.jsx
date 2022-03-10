import React, { useState, useContext, useEffect } from "react"
import { ProductListContext } from "../../../context/Context"
import './Basket.scss'

const Basket = () => {
  const { basketItems, removeBasketItem } = useContext(ProductListContext)
  const [ displayBasket, setDisplayBasket ] = useState(false)
  const [ items, SetItems ] = useState([])
  const [ displayModal, setDisplayModal ] = useState(false)
  const [ itemIndex, setItemIndex ] = useState()

  useEffect(() => {
    SetItems(basketItems);
  }, [basketItems]);

  const openModal = (index) => {
    setItemIndex(index);
    setDisplayModal(true);
  }
  return (
    <>
      <div
        data-testid="basketMouseLeave"
        onMouseLeave={() => setDisplayBasket(false)}
      >
        <button
          className="basket"
          type="button"
          data-testid="basketMouseEnter"
          onMouseEnter={() => setDisplayBasket(true)}
        >
          <span className="basket-badge">{items ? items.length : 0}</span>
          <span className="basket-text">Sepetim</span>
        </button>
        {
          <div
          data-testid="basketContainer"
          className={
            displayBasket ? "basket-opened" : "not-visible basket-opened"
          }
          >
            <ul>
            {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="basket-product-wrapper">
                        <div className="basket-product-image"> 
                          <img
                            src={"/" + item.image}
                            alt="product-thumbnail"
                          />
                        </div>
                        <div className="product-info-wrapper">
                          <div className="product-desc">
                            <h4>{item.productName}</h4>
                          </div>
                          <div className="delete-wrapper">
                            <button
                              data-testid={"item-" + item.productId}
                              className="delete-button"
                              onClick={() => {
                                openModal(index);
                              }}
                            >
                              <span>Kaldır</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        }
        {displayModal && (
          <div className="delete-modal" id="delete-modal">
            <div className="delete-modal-body">
              <div className="-title">
              <h1>Ürünü silmek istediğinize emin misiniz ?</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentiall....
              </p>
              <div className="modal-buttons">
              <button
                  className="modal-buttons-yes"
                  onClick={() => {
                    removeBasketItem(itemIndex);
                    setDisplayModal(false);
                    setDisplayBasket(false);
                  }}
                >
                  Evet
                </button>
                <button
                  className="modal-buttons-no"
                  onClick={() => setDisplayModal(false)}
                >
                  Hayır
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Basket
