import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ cart }) => {
  console.log(cart, "cart");
  return (
	<>
	<div className="basket_basket">Корзина:</div>
    <div className="sdelat_flex">
		
      <div className="main_boxshadov">
        {cart.map((i) => {
          return (
            <div>
              <CartItem
                key={i.id}
                name={i.name}
                price={i.price}
                discount={i.discount}
                image={i.image}
                model={i.model}
              />
            </div>
          );
        })}
      </div>
      <div className="orderingOrder">
			<div className="orderingOrder_one">оформить заказ</div>
      </div>
    </div>
	 </>
  );
};

export default CartItems;
