import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartItems = ({ cart }) => {
  return (
    <>
      <div className="basket_basket">Корзина:</div>
      <div className="sdelat_flex">
        <div className="main_boxshadov">
          {cart.map((i) => {
            return (
              <CartItem
                key={i._id}
                name={i.name}
                price={i.price}
                discount={i.discount}
                image={i.image}
              />
            );
          })}
        </div>
        <div className="orderingOrder">
          <Link to={"/creditcard"} className="orderingOrder_one">
            Оформить заказ
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartItems;
