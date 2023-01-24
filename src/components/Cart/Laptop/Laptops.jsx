import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLaptop } from "../../../features/LaptopSlice";
import Laptop from "./Laptop";
import "../../../styles/cart.css";

const Laptops = () => {
  const { id } = useParams();
  const laptop = useSelector((state) => state.laptopReducer.laptop);
  const filtered = laptop.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaptop());
  }, [dispatch]);
  return (
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <Laptop
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
  );
};

export default Laptops;