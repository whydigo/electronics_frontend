import React from "react";

const ProductCartSide = ({ item, buy, handleAdd }) => {
  return (
    <>
      <div className="productById_buy">
        {!item.discount ? (
          <div className="productById_price_product">{item.price} ₽</div>
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
          className={buy ? "productById_basket active" : "productById_basket"}
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
    </>
  );
};

export default ProductCartSide;
