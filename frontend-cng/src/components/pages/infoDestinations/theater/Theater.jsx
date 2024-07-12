import React from "react";
import "./Theater.css";
import Card from "../../../common/card/Card";
import AddRestaurant from "../../../common/AddRestaurant/AddRestaurant";

const Theater = () => {
  return (
    <div>
      <div className="contenedorCarta"></div>
      <div className="contenedorAñadir">
        {" "}
        <AddRestaurant> </AddRestaurant>
      </div>
    </div>
  );
};

export default Theater;
