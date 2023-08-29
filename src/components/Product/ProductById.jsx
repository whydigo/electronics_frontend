import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/ProductSlice";
import "../../styles/cartProductById.css";
import Review from "./Review";
import { addToCart } from "../../features/applicationSlice";
import preloader from "../../assets/loading.gif";

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

  const filteredProductById = product.filter((item) => {
    if (!id);
    return item._id === id;
  });
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
        {filteredProductById.map((item) => {
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
                      {item.info_0 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_0?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_0?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_1 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_1?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_1?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_2 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_2?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_2?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_3 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_3?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_3?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_4 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_4?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_4?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_5 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_5?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_5?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_6 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_6?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_6?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_7 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_7?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_7?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_8 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_8?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_8?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.info_9 ? (
                        <div className="productById_description_individually">
                          <div className="productById_description_individually_item">
                            {item.info_9?.split("-")[0]}
                          </div>
                          <div className="productById_emptiness"></div>
                          <div className="productById_description_individually_item_name">
                            {item.info_9?.split("-")[1]}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="prdct-l">
                    <div className="productById_buy ">
                      {!item.discount ? (
                        <div className="productById_price_product">
                          {item.price} ₽
                        </div>
                      ) : (
                        <div className="productById_price">
                          <div className="productById_discount">
                            <strike>{item.price} ₽</strike>
                          </div>
                          <div className="productById_price_product">
                            {Math.round(item.price - item.discount)} ₽
                          </div>
                        </div>
                      )}
                      <div
                        className={
                          buy
                            ? "productById_basket active"
                            : "productById_basket"
                        }
                        onClick={handleAdd}
                      >
                        {buy ? "В корзине" : "В корзину"}
                      </div>
                    </div>
                    <details className="productById_description_individually_desc">
                      <summary className="productById_description_individually_description">
                        описание
                      </summary>
                      {item.description ? (
                        <p className="productById_description_individually_sum">
                          {item.description}
                        </p>
                      ) : (
                        <p className="productById_description_individually_sum">
                          Тут ничего нет
                        </p>
                      )}
                    </details>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {filteredProductById.map((i) => {
        return <Review key={i._id} id={i._id} />;
      })}
    </div>
  );
};

export default ProductById;
