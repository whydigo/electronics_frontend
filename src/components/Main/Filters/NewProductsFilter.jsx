import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "../../../styles/FiltersProducts.module.css";
import preloader from "../../../assets/loading.gif";

const NewProductsFilter = () => {
  const loading = useSelector((state) => state.productReducer.loading);
  const products = useSelector((state) => state.productReducer.product);

  // const filtered = products.filter((i) => {
  //   return i.price - i.discount < 40000 || i.price < 40000;
  // });

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.title}>Новинки</div>
      {loading ? (
        <div className="preloader">
          <img className="preloader_item" src={preloader} alt="preloader" />
        </div>
      ) : null}
      <div className={s.products}>
        {products.slice(0, 7).map((i) => {
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

export default NewProductsFilter;
