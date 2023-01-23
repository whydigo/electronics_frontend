import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHeadset } from "../../../features/HeadsetSlice";
import Headset from "./Headset";
import "../../../styles/cart.css";

const Headsets = () => {
  const { id } = useParams();
  const headset = useSelector((state) => state.headsetWatchReducer.headset);
  const filtered = headset.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeadset());
  }, [dispatch]);
  return (
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <Headset
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

export default Headsets;