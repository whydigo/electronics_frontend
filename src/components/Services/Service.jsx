import React from "react";
import ServiceLocation from "./ServicesItems/ServiceLocation";
import ServiceOrder from "./ServicesItems/ServiceOrder";
import Requisites from "./ServicesItems/Requisites";

const Service = () => {
  return (
    <div>
      <ServiceOrder />
      <ServiceLocation />
      <Requisites />
    </div>
  );
};

export default Service;
