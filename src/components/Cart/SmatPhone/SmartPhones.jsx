import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSmartPhone } from "../../../features/SmartPhoneSlice";
import SmartPhone from "./SmartPhone";
import "../../../styles/cart.css";
import Fade from 'react-reveal/Fade';

const SmartPhones = () => {
  const { id } = useParams();
  const smartPhone = useSelector((state) => state.smartPhoneReducer.smartPhone);
  const filtered = smartPhone.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmartPhone());
  }, [dispatch]);
  
  return (
	<Fade right>
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <SmartPhone
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

export default SmartPhones;