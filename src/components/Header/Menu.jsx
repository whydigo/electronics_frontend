import React from "react";
import '../../styles/menu.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/CategoriesSlice";
import { Link } from "react-router-dom";


function Menu({ setOpenModal, openModal = [] }) {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  const handleW = (e) => {
    setOpenModal(false)
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {openModal && (
        <div className="m-overlay">
          <div className="m-drawer">
            <div className='m-btn-close'>
              <button className="m-removeBtn" onClick={() => handleW()}>&times;</button>
            </div>
            <div className="m-items">
              {categories.map((category) => {
                return (
                  <div className="m-categoty" key={category._id}><Link onClick={() => setOpenModal(false)} to={`/category/${category._id}`} key={category._id}>{category.name}</Link></div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;