import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCamera } from "../../../features/CameraSlice";
import Camera from "./Camera";
import "../../../styles/cart.css";
import Fade from 'react-reveal/Fade';



const Cameras = () => {
  const { id } = useParams();
  const camera = useSelector((state) => state.cameraReducer.camera);
  const filtered = camera.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamera());
  }, [dispatch]);
  return (
	<Fade right>
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <Camera
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
				  discount={item.discount}
				  model={item.model}
				  id={item._id}
            />
        );
		 
      })}
		
    </div>
	 </Fade>
	 
  );
};

export default Cameras;
