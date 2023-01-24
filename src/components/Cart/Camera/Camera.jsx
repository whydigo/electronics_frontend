import React from "react";
import "../../../styles/cart.css";
import { Link } from 'react-router-dom';

const Camera = ({ image, name, price, discount,model,id }) => {
  return (
    <div className="cart">
      <div className="cart_item">
        <div className="product-card__img-wrap"><Link to={`/camera/${id}`}>
          <img
            className="cart__image"
            src={`http://localhost:4000/${image}`}
            alt=""
          /></Link>
			 {discount ? <div className="discount_order">-{discount}%</div> : <div className="discount_none"></div>}
			 
        </div>
		  {!discount ? <div className="price_product">{price} ₽</div> :
		  <div className="price">
		   <div className="discount"><strike>{price} ₽</strike></div>
			<div className="price_product">{Math.round(price - (price/100 * discount))} ₽</div>
			</div>}
        <div className="cart_title"><span className="cart_title_name">{name}</span>/<span className="cart_title_model">{model}</span></div>
		  <div className="basket">В корзину</div>
      </div>
    </div>
  );
};

export default Camera;

