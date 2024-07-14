// SuggestionCard.jsx
import React from "react";
import "./SuggestionCard.css";

const SuggestionCard = ({ title, description, link }) => {
  return (
    <div className="suggestion-card animate">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="suggestion-link">
        Más información
      </a>
    </div>
  );
};

export default SuggestionCard;
