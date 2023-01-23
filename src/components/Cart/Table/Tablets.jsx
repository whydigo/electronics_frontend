import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTablet } from "../../../features/TabletSlice";
import Tablet from "./Tablet";
import "../../../styles/cart.css";

const Tablets = () => {
  const { id } = useParams();
  const tablet = useSelector((state) => state.tabletReducer.tablet);
  const filtered = tablet.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTablet());
  }, [dispatch]);
  return (
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <Tablet
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
				  discount={item.discount}
				  model={item.model}
            />
        );
      })}
    </div>
  );
};

export default Tablets;