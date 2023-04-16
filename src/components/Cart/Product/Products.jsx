import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../features/ProductSlice";
import Product from "./Product";
import "../../../styles/cart.css";
import Fade from "react-reveal/Fade";
import { fetchUser } from "../../../features/applicationSlice";

const Products = ({ text }) => {
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer.product);
  const filtered = product.filter(item => {
    return (
      item.category === id &&
      item.name?.toLowerCase().includes(text?.toLowerCase().toString())
    );
  });
  // const allProducts = [];
  // allProducts.push(...filtered);
  // const filteredProducts = allProducts.filter((i) => {
  //   return i.name?.toLowerCase().includes(text?.toLowerCase().toString());
  // });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUser())
  }, [dispatch]);

  return (
    <Fade right>
      <div className="cart_container">
        {filtered.map((item) => {
          return (
            <Product
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

export default Products;
