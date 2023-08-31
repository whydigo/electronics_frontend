import React, { useCallback, useEffect, useState } from "react";
import "../../styles/cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchUser } from "../../features/applicationSlice";
import { deleteProduct } from "../../features/ProductSlice";
import CartFooter from "./CartFooter";

const Product = ({ image, name, price, discount, id }) => {
  const dispatch = useDispatch();
  const ide = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const isAdmin = users.find((i) => i._id === ide)?.admin || false;

  const [buy, setBuy] = useState(false);
  const [dlt, setDlt] = useState(false);

  const handleAdd = useCallback(() => {
    setBuy((prevBuy) => !prevBuy);
    dispatch(addToCart({ userId: localStorage.getItem("id"), cartById: id }));
  }, [dispatch, id]);

  const handleDeleteProduct = useCallback(() => {
    dispatch(deleteProduct(id));
    setDlt(true);
  }, [dispatch, id]);

  useEffect(() => {
    if (users.length > 0) {
      const cartItems = users.find((i) => i._id === ide)?.cart || [];
      const isItemInCart = cartItems.some((item) => item._id === id);
      setBuy(isItemInCart);
    }
  }, [users, id, ide]);

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
        {!dlt ? (
          <CartFooter
            buy={buy}
            isAdmin={isAdmin}
            handleAdd={handleAdd}
            handleDeleteProduct={handleDeleteProduct}
          />
        ) : (
          <div className="deleted_product">Продукт удален</div>
        )}
      </div>
    </div>
  );
};

export default Product;
