import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/ProductSlice";
import Product from "./Product";
import "../../styles/cart.css";
import Fade from "react-reveal/Fade";
import { fetchUser } from "../../features/applicationSlice";
import preloader from "../../assets/loading.gif";

const Products = ({ text }) => {
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer.product);
  const filtered = product.filter((item) => {
    return (
      item.category === id &&
      item.name?.toLowerCase().includes(text?.toLowerCase().toString())
    );
  });

  const loading = useSelector((state) => state.productReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUser());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // if (loading) {
  //   return (
  //     <div className="preloader">
  //       <img className="preloader_item" src={preloader} alt="preloader" />
  //     </div>
  //   );
  // }

  return (
    <div className="cart_container">
      {loading && (
        <div className="preloader">
          <img className="preloader_item" src={preloader} alt="preloader" />
        </div>
      )}
      {filtered.map((item) => {
        return (
          <Fade right>
            <Product
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
              model={item.model}
              id={item._id}
            />
          </Fade>
        );
      })}
    </div>
  );
};

export default Products;
