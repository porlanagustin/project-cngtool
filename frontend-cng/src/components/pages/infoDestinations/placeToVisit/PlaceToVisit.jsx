import React from "react";
import "./PlaceToVisit.css";

const regions = [
  { name: "América del Norte", class: "part1" },
  { name: "América Central", class: "part2" },
  { name: "América del Sur", class: "part3" },
  { name: "Europa", class: "part4" },
  { name: "Asia", class: "part5" },
  { name: "Oceanía", class: "part6" },
  { name: "África", class: "part7" },
];

const PlaceToVisit = () => {
  return (
    <div className="container">
      {regions.map((region, index) => (
        <div key={index} className={`part ${region.class}`}>
          {region.name}
        </div>
      ))}
    </div>
  );
};

export default PlaceToVisit;
