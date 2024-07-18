import React from "react";
import "./RegionCard.css";

const RegionCard = ({ region, color }) => {
  return (
    <div className="region-card" style={{ backgroundColor: color }}>
      <h2>{region}</h2>
    </div>
  );
};

export default RegionCard;
