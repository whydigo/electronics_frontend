import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSmartWatch } from "../../../features/SmartWatchSlice";
import "../../../styles/cartProductById.css";

const SmartWatchById = () => {
  const { id } = useParams();
  const smartWatchById = useSelector((state) => state.smartWatchReducer.smartWatch);
  const filteredSmartWatchById = smartWatchById.filter((item) => {
    if (!id);
    return item._id === id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmartWatch());
  }, [dispatch]);
  return (
    <div>
      <div>
        {filteredSmartWatchById.map((item) => {
          return (
            <div className="productById">
              <div className="container_productById">
                <div className="productById_name">
                  <span>{item.name}</span> / Смарт часы{" "}
                  <span>{item.model}</span>
                </div>
                <div className="productById_characteristics">
                  <div className="productById_image"><img className="cart_productById_image" src={`http://localhost:4000/${item.image}`} alt="" /></div>
                  <div className="productById_description">
                    <div className="productById_name">О товаре</div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">питание</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.nutrition}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">емкоть аккумулятора</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.batteryCapacity}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">диагональ экрана</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.screenDiagonal}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">разрешение экрана</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.screenResolution}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">тип экрана</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.typeOfScreen}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">модель</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.model}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">время зарядки батареии</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.theBatteryChargingTime}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">Доп. опции смарт-часов</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.additionalOptionsForSmartHours}</div></div>
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

export default SmartWatchById;
