import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/ProductSlice";
import "../../styles/cartProductById.css";
import Review from "./Review";
import { addToCart } from "../../features/applicationSlice";
import preloader from "../../assets/loading.gif";
import Characteristics from "./Characteristics";
import ProductCartSide from "./ProductCartSide";

const ProductById = () => {
  const { id } = useParams();
  const [buy, setBuy] = useState(false);
  const product = useSelector((state) => state.productReducer.product);
  const category = useSelector((state) => state.categoryReducer.categories);
  const ide = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const filt = users.filter((i) => i._id === ide);
  const cartItems = filt.map((i) => {
    return i.cart;
  });
  const loading = useSelector((state) => state.productReducer.loading);

  const filteredProductById = useMemo(() => {
    return product.filter((item) => item._id === id);
  }, [product, id]);

  const filteredCatById = category.filter(
    (i) =>
      i._id ===
      filteredProductById
        .map((i) => {
          return i.category;
        })
        .toString()
  );

  const handleAdd = () => {
    setBuy(!buy);
    dispatch(
      addToCart({
        userId: localStorage.getItem("id"),
        cartById: id,
      })
    );
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (cartItems[0]) {
      cartItems[0].map((i) => {
        if (i._id === id) {
          return setBuy(true);
        }
        return null;
      });
    }
    window.scrollTo(0, 0);
  }, [cartItems, id]);

  if (loading) {
    return (
      <div className="preloader">
        <img className="preloader_item" src={preloader} alt="preloader" />
      </div>
    );
  }

  return (
    <div>
      <div>
        {filteredProductById.length > 0 &&
          filteredProductById.map((item) => {
            return (
              <div className="productById" key={item._id}>
                <div className="container_productById">
                  <div className="productById_name">
                    <span>{item.name}</span> /{" "}
                    {filteredCatById.map((i) => {
                      return i.name;
                    })}
                    <span>{item.model}</span>
                  </div>
                  <div className="productById_characteristics">
                    <div className="prdct-r">
                      <div className="productById_image">
                        <img
                          className="cart_productById_image"
                          src={`http://localhost:4000/${item.image}`}
                          alt="what"
                        />
                      </div>
                      <div className="productById_description">
                        <div className="productById_title">О товаре</div>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                          (index) =>
                            item[`info_${index}`] && (
                              <Characteristics
                                key={index}
                                label={item[`info_${index}`]?.split("-")[0]}
                                value={item[`info_${index}`]}
                              />
                            )
                        )}
                      </div>
                    </div>
                    <div className="prdct-l">
                      <ProductCartSide
                        item={item}
                        buy={buy}
                        handleAdd={handleAdd}
                      />
                    </div>
                  </div>
                </div>
                {item._id ? <Review key={item._id} id={item._id} /> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductById;
