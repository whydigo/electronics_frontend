import React from "react";

const CartFooter = ({ buy, isAdmin, handleAdd, handleDeleteProduct }) => {
  return (
    <div className="cart__footer_container">
      <button
        disabled={buy}
        className={`basket ${buy ? "active" : ""}`}
        onClick={handleAdd}
      >
        {buy ? "В корзине" : "Купить"}
      </button>
      {isAdmin && (
        <div
          disabled={buy}
          onClick={handleDeleteProduct}
          className="dlt_product"
        >
          Удалить
        </div>
      )}
    </div>
  );
};

export default CartFooter;
