import React from "react";

const Characteristics = ({ label, value }) => {
  if (!value) {
    return null;
  }
  return (
    <div>
      <div className="productById_description_individually">
        <div className="productById_description_individually_item">{label}</div>
        <div className="productById_emptiness"></div>
        <div className="productById_description_individually_item_name">
          {value.split("-")[1]}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
