import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/applicationSlice";
import "../../styles/basket.css";
import CartItems from "./CartItems";


// Продукты не добавляются в корзину.
const Basket = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const filt = users.filter((i) => i._id === id);
  
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {filt.map((i) => {
        return <CartItems key={i._id} cart={i.cart} />;
      })}
    </div>
  );
};

export default Basket;
