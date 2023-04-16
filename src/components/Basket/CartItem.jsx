import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../features/applicationSlice";

const CartItem = ({ name, price, discount, image, id }) => {
  const dispatch = useDispatch();
	const ide = useSelector((state) => state.application.id)
  const users = useSelector((state) => state.application.users)
	const filt = users.filter((i) => i._id === ide)
  const isAdmin = filt[0].admin
  console.log(isAdmin);

  const handleDelete = () => {
    alert('Удалено')
    dispatch(
      deleteFromCart({
        userId: localStorage.getItem("id"),
        cartById: id,
      })
    );
  };

  return (
    <div className="container_islam">
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
          <div className="decrem">-</div>
          <div className="basket_product_amount">1</div>
          <div className="increm">+</div>
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
    </div>
  );
};

export default CartItem;
