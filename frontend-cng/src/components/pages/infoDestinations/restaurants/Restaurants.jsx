import React from "react";
import Card from "../../../common/card/Card";
import AddSupplier from "../../../common/addSupplier/AddSupplier";
import "./Restaurants.css";

const data = [
  {
    name: "Piedra Pasillo Al Fondo",
    img: "https://www.rutiniwines.com/wp-content/uploads/2023/10/Fine-Dining-en-Trescha-Guest-Series-05-20-10.jpg",
    address: "Campos Salles 2145, Buenos Aires, C1429CFC, Argentina",
    web: "-",
    description:
      'Se encuentra en una casona recuperada de Núñez que atesora muchísimo encanto y es uno de esos sitios que te sorprende por su marcado carácter, con un equipo de sala realmente encantador y las paredes como "rotas" (la cocina queda a la vista por un gran hueco de ladrillo). Está llevado por dos jóvenes socios (Lucas Canga y Tomás Couriel) que apuestan por una cocina moderna, creativa y compleja, siempre en base a unos platos vistosos que intentan ensalzar el producto de temporada y unos maridajes muy logrados. ¿Una elaboración que nos ha encantado? Su Tartare de ciervo, galletas marinadas y vitello tonnato, pues está lleno de contrastes jugando con la cremosa salsa del vitello y un falso bollo hecho con galletas, simulando pan, que hay que romper para acceder al suave tartare de ciervo oculto en su interior. ¡Dispone de un amplio patio-terraza y un bar, llamado Al Fondo, donde se puede tomar un café o un cocktail!',
  },
  {
    name: "Trescha",
    img: "https://www.rutiniwines.com/wp-content/uploads/2023/10/Fine-Dining-en-Trescha-Guest-Series-05-20-10.jpg",
    address: "Murillo 725, Buenos Aires, C1414AFE, Argentina",
    web: "https://trescharestaurant.com/",
    description:
      "El joven chef Tomás Treschanski, tras un amplio periplo internacional que lo llevó a formarse en Le Cordon Bleu de Londres y luego, entre otros, en grandes templos culinarios como Azurmendi (España), Frantzén (Suecia) o el ya desaparecido 108 (Dinamarca), ha regresado a su tierra con una apuesta contemporánea y sin límites construida desde la diversidad. Ubicado en una casa remodelada del barrio de Villa Crespo, este exclusivo restaurante se presenta con una zona de bar que llama la atención por su colección de whiskeys, una coqueta terraza acristalada y a continuación la sala, de línea actual, donde solo hay una elegante barra de cedro para 10 comensales que pueden interactuar con los cocineros. ¿La propuesta? Un único menú degustación de pequeños bocados (15 pasos, cambian cada tres meses), con muchos productos premium de temporada y distintas técnicas (emulsiones, espumas, gelificados, braseados...) en el mismo plato. ¡En la 1ª planta tienen la Test Kitchen, su área de I+D!",
  },
  {
    name: "Basa",
    img: "https://www.rutiniwines.com/wp-content/uploads/2023/10/Fine-Dining-en-Trescha-Guest-Series-05-20-10.jpg",
    address: "Basavilbaso 1328, Buenos Aires, C1006AAD, Argentina",
    web: "https://basabar.com.ar/",
    description:
      "Aunque siempre hay un buen número de comensales de empresa a la hora de comer, el ambiente y el estilo de este restaurante, situado en un sótano, le dan un toque claramente nocturno. Cuenta con una gran barra que se extiende a lo ancho de la sala y presenta un aspecto contemporáneo, dominado por la presencia de hormigón y metal. Hay muchas mesas y taburetes de bar, pero si quieres una experiencia más relajada, pide uno de los sofás de cuero con sus mesas de comedor bajas. El menú ofrece posibilidades para todos los gustos, ya que es una mezcla de platos locales bien conocidos y otros cuya inspiración procede del Mediterráneo. El equipo de cocina se maneja bien, lo que significa que puedes empezar con unas deliciosas Empanadas de cordero estofado y pasar a unos Culurgiones rellenos de salmón o algo de la plancha, como una Brocheta de langostinos o una Milanesa de lomo de ternera.",
  },
  {
    name: "Basa",
    img: "https://www.rutiniwines.com/wp-content/uploads/2023/10/Fine-Dining-en-Trescha-Guest-Series-05-20-10.jpg",
    address: "Basavilbaso 1328, Buenos Aires, C1006AAD, Argentina",
    web: "https://basabar.com.ar/",
    description:
      "Aunque siempre hay un buen número de comensales de empresa a la hora de comer, el ambiente y el estilo de este restaurante, situado en un sótano, le dan un toque claramente nocturno. Cuenta con una gran barra que se extiende a lo ancho de la sala y presenta un aspecto contemporáneo, dominado por la presencia de hormigón y metal. Hay muchas mesas y taburetes de bar, pero si quieres una experiencia más relajada, pide uno de los sofás de cuero con sus mesas de comedor bajas. El menú ofrece posibilidades para todos los gustos, ya que es una mezcla de platos locales bien conocidos y otros cuya inspiración procede del Mediterráneo. El equipo de cocina se maneja bien, lo que significa que puedes empezar con unas deliciosas Empanadas de cordero estofado y pasar a unos Culurgiones rellenos de salmón o algo de la plancha, como una Brocheta de langostinos o una Milanesa de lomo de ternera.",
  },
  {
    name: "Basa",
    img: "https://www.rutiniwines.com/wp-content/uploads/2023/10/Fine-Dining-en-Trescha-Guest-Series-05-20-10.jpg",
    address: "Basavilbaso 1328, Buenos Aires, C1006AAD, Argentina",
    web: "https://basabar.com.ar/",
    description:
      "Aunque siempre hay un buen número de comensales de empresa a la hora de comer, el ambiente y el estilo de este restaurante, situado en un sótano, le dan un toque claramente nocturno. Cuenta con una gran barra que se extiende a lo ancho de la sala y presenta un aspecto contemporáneo, dominado por la presencia de hormigón y metal. Hay muchas mesas y taburetes de bar, pero si quieres una experiencia más relajada, pide uno de los sofás de cuero con sus mesas de comedor bajas. El menú ofrece posibilidades para todos los gustos, ya que es una mezcla de platos locales bien conocidos y otros cuya inspiración procede del Mediterráneo. El equipo de cocina se maneja bien, lo que significa que puedes empezar con unas deliciosas Empanadas de cordero estofado y pasar a unos Culurgiones rellenos de salmón o algo de la plancha, como una Brocheta de langostinos o una Milanesa de lomo de ternera.",
  },
];

const Restaurants = () => {
  return (
    <div>
      <div className="contenedorCarta">
        <Card data={data} />
      </div>
      <AddSupplier> </AddSupplier>
    </div>
  );
};

export default Restaurants;
