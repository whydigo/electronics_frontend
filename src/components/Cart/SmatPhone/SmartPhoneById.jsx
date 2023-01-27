import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSmartPhone } from "../../../features/SmartPhoneSlice";
import "../../../styles/cartProductById.css";

const SmartPhoneById = () => {
  const { id } = useParams();
  const smartPhone = useSelector((state) => state.smartPhoneReducer.smartPhone);
  const filteredSmartPhoneById = smartPhone.filter((item) => {
    if (!id);
    return item._id === id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmartPhone());
  }, [dispatch]);
  return (
    <div>
      <div>
        {filteredSmartPhoneById.map((item) => {
          return (
            <div className="productById">
              <div className="container_productById">
                <div className="productById_name">
                  <span>{item.name}</span> / Телефоны{" "}
                  <span>{item.model}</span>
                </div>
                <div className="productById_characteristics">
                  <div className="productById_image"><img className="cart_productById_image" src={`http://localhost:4000/${item.image}`} alt="" /></div>
                  <div className="productById_description">
                    <div className="productById_name">О товаре</div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">модель</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.model}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">беспроводные интерфейсы</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.wirelessInterfaces}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">количество SIM карт</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.numberOfSimCards}</div></div>
                    <div className="productById_description_individually"><div className="productById_description_individually_item">версия О/С</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.operatingSystemVersion}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">диагональ экрана</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.screenDiagonal}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">разрешение экрана</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.screenResolution}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">количество ядер</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.numberProcessorCores}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">процессор</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.cpu}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">встроенная память</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.builtInMemory}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">оперативная память</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.ram}</div></div>
						  <div className="productById_description_individually"><div className="productById_description_individually_item">карты памяти</div><div className="productById_emptiness"></div><div className="productById_description_individually_item_name">{item.memoryCardType}</div></div>
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

export default SmartPhoneById;