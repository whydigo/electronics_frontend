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
      {loading ? (
        <div className="preloader">
          <img className="preloader_item" src={preloader} alt="preloader" />
        </div>
      ) : null}
      <div className={s.products}>
        {products.slice(0, 14).map((i) => {
          return (
            <Link to={`/product/${i._id}`} key={i._id}>
              <div className={s.product}>
                <img
                  src={`http://localhost:4000/${i.image}`}
                  alt="products"
                  className={s.pic}
                />
                <div className={s.info}>
                  <div className={s.price}>
                    {i.price - i.discount} ₽{" "}
                    <span className={s.discount}>{i.price} ₽</span>
                  </div>
                  <div className={s.name}>{i.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersProducts;
