import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmartWatch } from "../../features/SmartWatchSlice";
import { fetchCamera } from "../../features/CameraSlice";
import cls from "./AllProducts.module.css";

const AllProducts = ({ text}) => {
  console.log(text, 'all products');
  const dispatch = useDispatch();
  const camera = useSelector((state) => state.cameraReducer.camera);
  const smartWatchs = useSelector(
    (state) => state.smartWatchReducer.smartWatch
  );

  // !! ВСЕ ПРОДУКТЫ
  const allProducts = [];
  allProducts.push(...camera, ...smartWatchs);
// console.log(camera, smartWatchs, "cam");
// console.log(allProducts, "all");
  const filteredProducts = allProducts.filter((i) => {
    return i.name.toLowerCase().includes(text?.toLowerCase().toString());
  });
  // console.log(filteredProducts, 'filtered products');

  useEffect(() => {
    dispatch(fetchCamera());
    dispatch(fetchSmartWatch());
  }, [dispatch]);

  return (
    <>
    <div className={cls.allProductsTitle}>
    Возможно, вам понравится
    </div>
    <div className={cls.mainWrapper}>
      {allProducts.length <= camera.length
        ? null
        : filteredProducts
            .sort(() => Math.round(Math.random() * 100) - 50)
            .map((i) => {
              return (
                <div key={i._id} className={cls.cardWrapper}>
                  <div className={cls.imageWrapper}>
                    <img
                      src={`http://localhost:4000/${i.image}`}
                      alt={i.name}
                    />
                  </div>
                  <div>{i.name}</div>
                  <div>{i.price}</div>
                </div>
              );
            })}
    </div>
    </>
  );
};

export default AllProducts;
