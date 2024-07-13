import React, { useEffect, useState } from "react";
import Card from "../../../common/card/Card";
import AddRestaurant from "../../../common/AddRestaurant/AddRestaurant.jsx";
import "./Restaurants.css";
import dataRestaurant from "./dataRestaurant.json";

const Restaurants = () => {
  const data = dataRestaurant;

  return (
    <div>
      <div className="contenedorCarta">
        <Card data={data} />
      </div>
      <AddRestaurant />
    </div>
  );
};

export default Restaurants;
