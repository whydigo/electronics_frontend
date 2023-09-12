import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../features/applicationSlice";
import preloader from "../../assets/loading.gif";

const CartItem = ({ name, price, discount, image, id }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.application.loading);

  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDelete = () => {
    dispatch(
      deleteFromCart({
        userId: localStorage.getItem("id"),
        cartById: id,
      })
    );
  };

  return (
    <div className="container_islam">
      {loading ? (
        <div className="preloader">
          <img className="preloader_item" src={preloader} alt="preloader" />
        </div>
      ) : (
        <div className="basket_product_parent">
          <div className="basket_product_image">
            <img
              className="basket_product_image_one"
              src={`http://localhost:4000/${image}`}
              alt=""
            />
          </div>
          <div className="basket_product_name">{name}</div>
          <div className="basket_product_inkdec">
            <button onClick={handleDecrement} className="decrem">
              -
            </button>
            <div className="basket_product_amount">{count}</div>
            <button onClick={handleIncrement} className="increm">
              +
            </button>
          </div>
          <div className="basket_product_price_container">
            {!discount ? (
              <div className="basket_product_price">{price} ₽</div>
            ) : (
              <div>
                <div className="basket_product_discount">
                  {Math.round(price - discount)} ₽
                </div>
                <div className="basket_product_price strice">
                  <strike>{price} ₽</strike>
                </div>
              </div>
            )}
          </div>
          <div className="basket_close">
            <div onClick={handleDelete} className="basket_close_el">
              удалить
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
