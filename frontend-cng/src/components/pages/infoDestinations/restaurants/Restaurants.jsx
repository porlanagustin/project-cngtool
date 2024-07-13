import React, { useEffect, useState } from "react";
import Card from "../../../common/card/Card";
import AddRestaurant from "../../../common/AddRestaurant/AddRestaurant.jsx";
import "./Restaurants.css";
import dataRestaurant from "./dataRestaurant.json";
// import { getRestaurants } from "../../../../services/restaurantService.js";

const Restaurants = () => {
  const data = dataRestaurant;

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     try {
  //       const restaurants = await getRestaurants();
  //       setData(restaurants);
  //     } catch (error) {
  //       console.error("Error al obtener los restaurantes:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRestaurants();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>; 
  // }

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
