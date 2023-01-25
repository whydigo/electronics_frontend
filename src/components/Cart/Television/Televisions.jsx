import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTelevision } from "../../../features/TelevisionSlice";
import Television from "./Television";
import "../../../styles/cart.css";
import Fade from 'react-reveal/Fade';

const Televisions = () => {
  const { id } = useParams();
  const television = useSelector((state) => state.televisionReducer.television);
  const filtered = television.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTelevision());
  }, [dispatch]);
  return (
	<Fade right>
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <Television
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
				  discount={item.discount}
				  model={item.model}
				  id={item._id}
            />
        );
      })}
    </div>
	 </Fade>
  );
};

export default Televisions;