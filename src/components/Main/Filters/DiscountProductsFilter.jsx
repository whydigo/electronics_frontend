import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "../../../styles/FiltersProducts.module.css";
import preloader from "../../../assets/loading.gif";

const FiltersProducts = () => {
  const loading = useSelector((state) => state.productReducer.loading);
  const products = useSelector((state) => state.productReducer.product);

  return (
    <div className={s.container}>
      <div className={s.title}>Выгодные предложения</div>
      {loading && (
        <div className="preloader">
          <img className="preloader_item" src={preloader} alt="preloader" />
        </div>
      )}
      <div className={s.products}>
        {products.slice(0, 14).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div className={s.product}>
              <img
                src={`http://localhost:4000/${product.image}`}
                alt="products"
                className={s.pic}
                loading="lazy"
              />
              <div className={s.info}>
                <div className={s.price}>
                  {product.price - product.discount} ₽{" "}
                  <span className={s.discount}>{product.price} ₽</span>
                </div>
                <div className={s.name}>{product.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FiltersProducts;
