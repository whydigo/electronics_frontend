import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmartWatch } from "../../features/SmartWatchSlice";
import { fetchCamera } from "../../features/CameraSlice";
import cls from "./AllProducts.module.css";

const AllProducts = ({ text }) => {
  console.log(text, "all products");
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
    return i.name?.toLowerCase().includes(text?.toLowerCase().toString());
  });
  // console.log(filteredProducts, 'filtered products');


  useEffect(() => {
    dispatch(fetchCamera());
    dispatch(fetchSmartWatch());
  }, [dispatch]);

  return (
    <>
      <div id="allproducts" className={cls.allProductsTitle}>
        {filteredProducts.length > 0
          ? "Возможно, вам понравится"
          : "Товаров не найдено"}
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
                    <div className={cls.priceManipulation}>
                      <div className={cls.cardPrice}>
                        {i.discount ? i.price - i.discount + " ₽" : ""}
                      </div>
                      <div
                        className={
                          i.discount ? cls.cardDiscount : cls.cardPrice
                        }
                      >
                        {i.price} ₽
                      </div>
                    </div>
                    <div className={cls.cardName}>{i.name}</div>
                  </div>
                );
              })}
      </div>
      <div className={cls.comment}>
        <span className={cls.commentTitle}>Широкий ассортимент и высокое качество</span>
        <br />
        Интернет-магазин Wildberries –
        это доступные цены, широкий, регулярно обновляемый ассортимент. В
        онлайн-каталоге Wildberries представлено около 300 000 ведущих брендов
        одежды, электроники, мебели и других товаров для всех сфер жизни.
        Покупателям предлагается электроника, книжная продукция, детские товары.
        В интернет-магазине можно приобрести продукцию для дома, продукты
        питания, товары для красоты, ювелирные изделия, игрушки. Для удобства
        пользования онлайн-каталог поделен на разделы, все товары можно
        сортировать по ряду критериев: цена, материал изготовления, сезонность,
        бренд.
      </div>
    </>
  );
};

export default AllProducts;
