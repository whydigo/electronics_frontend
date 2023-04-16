import React, { useEffect, useState } from "react";
import "../../../styles/cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchUser } from "../../../features/applicationSlice";
import { deleteProduct } from "../../../features/ProductSlice";

const Product = ({ image, name, price, discount, id }) => {
  const dispatch = useDispatch();
  const ide = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const filt = users.filter((i) => i._id === ide);
  const isAdmin = filt.map((i) => {
    return i.admin;
  });
  const cartItems = filt.map((i) => {
    return i.cart;
  });

  const [buy, setBuy] = useState(false);
  const [dlt, setDlt] = useState(false);

  const handleAdd = () => {
    setBuy(!buy);
    dispatch(
      addToCart({
        userId: localStorage.getItem("id"),
        cartById: id,
      })
    );
  };

  const handleDeleteProduct = () => {
    setDlt(true);
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (cartItems[0]) {
      cartItems[0].map((i) => {
        if (i._id === id) {
          return setBuy(true);
        }
        return null;
      });
    }
  }, [cartItems, id]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="cart">
      <div className="cart_item">
        <div className="product-card__img-wrap">
          <Link to={`/product/${id}`}>
            <img
              className="cart__image"
              src={`http://localhost:4000/${image}`}
              alt=""
            />
          </Link>
          {discount ? (
            <div className="discount_order">
              {Math.round((discount * 100) / price)}%
            </div>
          ) : (
            <div className="discount_none"></div>
          )}
        </div>
        {!discount ? (
          <div className="price_product">{price} ₽</div>
        ) : (
          <div className="price">
            <div className="discount">
              <strike>{price} ₽</strike>
            </div>
            <div className="price_product">
              {Math.round(price - discount)} ₽
            </div>
          </div>
        )}
        <div className="cart_title">
          <span className="cart_title_name">{name}</span>/
        </div>
        {dlt !== true ? (
          <div className="cart__footer_container">
            <button
              disabled={buy}
              className={buy !== true ? "basket" : "basket active"}
              onClick={handleAdd}
            >
              {buy !== true ? "Купить" : "В корзине"}
            </button>
            {isAdmin[0] ? (
              <div
                disabled={dlt}
                onClick={handleDeleteProduct}
                className="dlt_product"
              >
                Удалить
              </div>
            ) : null}
          </div>
        ) : (
          <div className="deleted_product">Продукт удален</div>
        )}
      </div>
    </div>
  );
};

export default Product;
