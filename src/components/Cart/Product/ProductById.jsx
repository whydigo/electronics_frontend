import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../features/ProductSlice";
import "../../../styles/cartProductById.css";
import Review from "./Review";

const ProductById = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer.product);
  const category = useSelector((state) => state.categoryReducer.categories);
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
                      <div className="productById_basket">В корзину</div>
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
              </div>
            </div>
          );
        })}
      </div>
      {filteredProductById.map((i) => {
        return <Review key={i._id} name={i.name} image={i.image} id={i._id} />;
      })}
    </div>
  );
};

export default ProductById;
