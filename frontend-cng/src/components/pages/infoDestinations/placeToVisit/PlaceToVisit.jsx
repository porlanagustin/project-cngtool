import React from "react";
import Card from "../../../common/card/Card";
import AddSupplier from "../../../common/addSupplier/AddSupplier";
const data = [
  {
    name: "Torre Eiffel",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Francia",
    web: "https://www.toureiffel.paris/",
    description:
      "La Torre Eiffel es una torre de hierro forjado situada en el Champ de Mars en París, Francia. Es uno de los monumentos más reconocidos en el mundo y un símbolo icónico de Francia. Construida por Gustave Eiffel para la Exposición Universal de 1889 en París, la torre ofrece impresionantes vistas panorámicas de la ciudad desde sus tres niveles accesibles al público.",
  },
  {
    name: "Coliseo",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italia",
    web: "https://www.coopculture.it/en/colosseo-e-shop.cfm",
    description:
      "El Coliseo es un antiguo anfiteatro romano ubicado en el centro de Roma, Italia. Conocido originalmente como el Anfiteatro Flavio, es uno de los mayores ejemplos de la ingeniería y arquitectura romanas. El Coliseo fue utilizado para espectáculos públicos, incluyendo gladiadores y eventos teatrales, y sigue siendo una de las atracciones turísticas más populares del mundo.",
  },
  {
    name: "Sagrada Familia",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Carrer de Mallorca, 401, 08013 Barcelona, España",
    web: "https://sagradafamilia.org/",
    description:
      "La Sagrada Familia es una gran basílica católica en Barcelona, España, diseñada por el arquitecto Antoni Gaudí. Aunque todavía está en construcción desde 1882, la Sagrada Familia es famosa por su impresionante arquitectura y sus detallados diseños que combinan el estilo gótico tardío con el modernismo catalán. Es uno de los monumentos más visitados de España.",
  },
  {
    name: "Big Ben",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Westminster, Londres SW1A 0AA, Reino Unido",
    web: "https://www.parliament.uk/bigben",
    description:
      "Big Ben es el apodo de la Gran Campana del reloj en el extremo norte del Palacio de Westminster en Londres, y a menudo se extiende para referirse tanto al reloj como a la torre del reloj. Este icónico monumento es una de las atracciones turísticas más emblemáticas de Londres y ofrece una visión histórica del Parlamento británico.",
  },
  {
    name: "Museo del Louvre",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Rue de Rivoli, 75001 Paris, Francia",
    web: "https://www.louvre.fr/",
    description:
      "El Museo del Louvre es el museo de arte más grande del mundo y un monumento histórico en París, Francia. Ubicado en el Palacio del Louvre, es el hogar de algunas de las obras de arte más famosas, incluyendo la Mona Lisa de Leonardo da Vinci y la Venus de Milo. El Louvre es una visita obligada para los amantes del arte y la historia.",
  },
  {
    name: "Palacio de Versalles",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Place d'Armes, 78000 Versailles, Francia",
    web: "https://en.chateauversailles.fr/",
    description:
      "El Palacio de Versalles es un opulento castillo real en Versalles, cerca de París, Francia. Originalmente un pabellón de caza, fue ampliado por Luis XIV en el siglo XVII y se convirtió en el símbolo del poder absoluto de la monarquía francesa. Los visitantes pueden explorar sus suntuosos salones, jardines, y la famosa Sala de los Espejos.",
  },
];

const PlaceToVisit = () => {
  return (
    <div>
      <div className="contenedorCarta">
        <Card data={data} />
      </div>
      <AddSupplier> </AddSupplier>
    </div>
  );
};

export default PlaceToVisit;
