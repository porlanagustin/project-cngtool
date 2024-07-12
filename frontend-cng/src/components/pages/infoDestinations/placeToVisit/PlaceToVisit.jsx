import React from "react";
import "./PlaceToVisit.css";
import Card from "../../../common/card/Card";
import AddRestaurant from "../../../common/AddRestaurant/AddRestaurant";

const data = [
  {
    name: "Noma",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "Refshalevej 96, 1432 København K, Dinamarca",
    web: "https://www.noma.dk/",
    description:
      "Noma es uno de los restaurantes más renombrados del mundo, dirigido por el chef René Redzepi. Este restaurante se especializa en la cocina nórdica de vanguardia, explorando las estaciones del año a través de un menú que cambia según los ingredientes locales y de temporada. Redzepi es conocido por sus técnicas innovadoras y su enfoque en ingredientes raros y forrajeros, ofreciendo a los comensales una experiencia culinaria única que desafía las convenciones tradicionales de la gastronomía escandinava.",
  },

  {
    name: "Le Bernardin",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "155 W 51st St, New York, NY 10019, EE.UU.",
    web: "https://www.le-bernardin.com/",
    description:
      "Le Bernardin, bajo la dirección del chef Éric Ripert, es un restaurante de alta gama en Nueva York conocido por su enfoque en la cocina francesa refinada con un énfasis especial en los mariscos frescos. El restaurante ha ganado reconocimiento internacional por su calidad culinaria y su servicio excepcional, ofreciendo un menú que combina técnicas clásicas con un enfoque moderno para presentar platos de mariscos de manera exquisita y elegante. Le Bernardin es una experiencia gastronómica de lujo que celebra lo mejor de la cocina francesa.",
  },
];

const PlaceToVisit = () => {
  return (
    <div>
      <div className="contenedorCarta">
        <Card data={data} />
      </div>
      <AddRestaurant> </AddRestaurant>
    </div>
  );
};

export default PlaceToVisit;
