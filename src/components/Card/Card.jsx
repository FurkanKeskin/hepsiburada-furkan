import React, { useState, useContext, useEffect } from 'react';
import { ProductListContext } from '../../context/Context';
import './Card.scss';

const Card = ({ product }) => {
	const { basketItems, addToBasket } = useContext(ProductListContext);
	const [ isDisabled, setIsDisabled ] = useState(false);

	useEffect(
		() => {
			let controlFlag = basketItems.filter((x) => x.productId === product.productId).length > 0;
			setIsDisabled(controlFlag);
		},
		[ basketItems, product.productId ]
	);

	return (
		<li className="card">
			<div className="card-top">
				<img className="img-fluid" src={'/' + product.image} alt="Cardimg" />
			</div>
			<div className="card-body">
				<div className="card-body_top">
					<div>{product.productName}</div>
				</div>
				<ul className="card-body_bottom">
					<li className="brand">
						Marka:<span className="product-name">{product.brand}</span>
					</li>
					<li className="color">
						Renk:<span className="product-color">{product.color}</span>
					</li>
				</ul>
			</div>
			<div className="card-bottom">
				<ul className="card-bottom_prices">
					<li className="card-bottom_prices-currentprice">
						{product.currentPrice ? `${product.currentPrice} TL` : <div />}
					</li>
					<li className="card-bottom_prices-discountedprice">
						{product.prevPrice ? <span className="prevprice">{product.prevPrice + ` TL`} </span> : <div />}

						{product.discount ? <span className="discountrate">{product.discount}</span> : <div />}
					</li>
				</ul>
				<div className="card_basket-button">
					<button
						className={
							isDisabled ? "basket-button" : "-disabled basket-button"
						}
						disabled={isDisabled}
						data-testid={'add-to-basket-' + product.productId}
						onClick={() => addToBasket(product)}
					>
						<span>{isDisabled ? 'Bu ürünü sepete ekleyemezsiniz.' : 'Sepete Ekle'}</span>
					</button>
				</div>
			</div>
		</li>
	);
};

export default Card;
