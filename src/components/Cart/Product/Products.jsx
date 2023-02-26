import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../features/ProductSlice";
import Product from "./Product";
import "../../../styles/cart.css";
import Fade from "react-reveal/Fade";

const Products = () => {
  const { id } = useParams();
  console.log(id, "id")
  const product = useSelector((state) => state.productReducer.product);
  console.log(product, "product");
  const filtered = product.filter((item) => item.category === id);
  console.log(filtered, "filtered");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
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
