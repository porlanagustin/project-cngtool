import React from "react";
import "./PlaceToVisit.css";
import Card from "../../../common/card/Card";
import AddRestaurant from "../../../common/AddRestaurant/AddRestaurant";

const PlaceToVisit = () => {
  return (
    <div>
      <div className="contenedorCarta"></div>
      <div className="contenedorAñadir">
        {" "}
        <AddRestaurant> </AddRestaurant>
      </div>{" "}
    </div>
  );
};

export default PlaceToVisit;
