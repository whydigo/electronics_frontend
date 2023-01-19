import React from "react";
import ServiceLocation from "./ServicesItems/ServiceLocation";
import ServiceOrder from "./ServicesItems/ServiceOrder";

const Service = () => {
  return (
    <div>
      <ServiceOrder />
      <ServiceLocation />
    </div>
  );
};

export default Service;
