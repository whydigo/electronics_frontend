import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTelevision } from "../../../features/TelevisionSlice";
import "../../../styles/cartProductById.css";

const TelevisionById = () => {
  const { id } = useParams();
  const television = useSelector((state) => state.televisionReducer.television);
  const filteredTelevisionraById = television.filter((item) => {
    if (!id);
    return item._id === id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTelevision());
  }, [dispatch]);
  return (
    <div>
      <div>
        {filteredTelevisionraById.map((item) => {
          return (
            <div className="productById">
              <div className="container_productById">
                <div className="productById_name">
                  <span>{item.name}</span> / Телевизоры{" "}
                  <span>{item.model}</span>
                </div>
                <div className="productById_characteristics">
                  <div className="productById_image"><img className="cart_productById_image" src={`http://localhost:4000/${item.image}`} alt="" /></div>
                  <div className="productById_description">
                    <div className="productById_name">О товаре</div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">модель</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.model}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">характерестики</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.characteristics}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">экран</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.screen}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">интерфейс</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.interface}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">разьем</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.connector}</div></div>
						  <details className="productById_description_individually_desc"><summary className="productById_description_individually_description">описание</summary><p className="productById_description_individually_sum">{item.description}</p></details>
                  </div>
						<div className="productById_buy ">  
							{!item.discount ? <div className="productById_price_product">{item.price} ₽</div> :
		               <div className="productById_price">
		               <div className="productById_discount"><strike>{item.price} ₽</strike></div>
			            <div className="productById_price_product">{Math.round(item.price - (item.price/100 * item.discount))} ₽</div>
			            </div>}
							<div className="productById_basket">В корзину</div>
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

export default TelevisionById;
