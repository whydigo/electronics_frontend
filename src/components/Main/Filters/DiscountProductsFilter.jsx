import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../features/ProductSlice";
import s from "../../../styles/FiltersProducts.module.css";

const FiltersProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.product);
  const filter = products.filter((i) => {
    return i;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.title}>Выгодные предложения</div>
      <div className={s.products}>
        {filter.map((i) => {
          return (
            <Link to={`/product/${i._id}`}>
              <div className={s.product}>
                <img
                  src={`http://localhost:4000/${i.image}`}
                  alt="products"
                  className={s.pic}
                />
                <div className={s.info}>
                  <div className={s.name}>{i.name}</div>
                  <div className={s.price}>
                    {i.price - i.discount} ₽{" "}
                    <span className={s.discount}>{i.price} ₽</span>
                  </div>
                  <button className={s.buy}>Добавить в корзину</button>
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
