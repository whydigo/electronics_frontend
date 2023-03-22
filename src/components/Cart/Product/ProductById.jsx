import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../features/ProductSlice";
import "../../../styles/cartProductById.css";

const ProductById = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer.product);
  const filteredProductById = product.filter((item) => {
    if (!id);
    return item._id === id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <div>
        {filteredProductById.map((item) => {
          return (
            <div className="productById">
              <div className="container_productById">
                <div className="productById_name">
                  <span>{item.name}</span> / Фотоаппараты{" "}
                  <span>{item.model}</span>
                </div>
                <div className="productById_characteristics">
                  <div className="prdct-r">
                    <div className="productById_image">
                      <img
                        className="cart_productById_image"
                        src={`http://localhost:4000/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="productById_description">
                      <div className="productById_name">О товаре</div>
                      <div className="productById_description_individually">
                        <div className="productById_description_individually_item">
                          питание
                        </div>
                        <div className="productById_emptiness"></div>
                        <div className="productById_description_individually_item_name">
                          {item.nutrition}
                        </div>
                      </div>
                      <div className="productById_description_individually">
                        <div className="productById_description_individually_item">
                          емкоть аккумулятора
                        </div>
                        <div className="productById_emptiness"></div>
                        <div className="productById_description_individually_item_name">
                          {item.batteryCapacity}
                        </div>
                      </div>
                      <div className="productById_description_individually">
                        <div className="productById_description_individually_item">
                          тип матрицы
                        </div>
                        <div className="productById_emptiness"></div>
                        <div className="productById_description_individually_item_name">
                          {item.typeOfMatrix}
                        </div>
                      </div>
                      <div className="productById_description_individually">
                        <div className="productById_description_individually_item">
                          разрешение
                        </div>
                        <div className="productById_emptiness"></div>
                        <div className="productById_description_individually_item_name">
                          {item.permission}
                        </div>
                      </div>
                      <details className="productById_description_individually_desc">
                        <summary className="productById_description_individually_description">
                          описание
                        </summary>
                        <p className="productById_description_individually_sum">
                          {item.description}
                        </p>
                      </details>
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
                      <div className="productById_basket">В корзину</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductById;
