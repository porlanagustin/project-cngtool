import React, { useState } from "react";
import Card from "../../../../../common/card/Card";
import "./Africa.css";

const Africa = () => {
  const [selectedCountry, setSelectedCountry] = useState("Paises de Africa");

  const categories = [
    "Paises de Africa",
    "Marruecos",
    "Sudáfrica",
    "Túnez",
    "Zimbabue",
    "Mozambique",
  ];

  const countriesData = {
    Marruecos: [
      {
        name: "Marrakech",
        address: "Marrakech, Marruecos",
        description:
          "Explora los vibrantes mercados y la arquitectura histórica de Marrakech.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.visitmorocco.com",
      },
      {
        name: "Fez",
        address: "Fez, Marruecos",
        description:
          "Descubre la medina más grande del mundo en Fez, un sitio Patrimonio de la Humanidad.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.visitmorocco.com",
      },
      {
        name: "Desierto del Sahara",
        address: "Desierto del Sahara, Marruecos",
        description:
          "Aventúrate en el vasto y deslumbrante desierto del Sahara en Marruecos.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.visitmorocco.com",
      },
      {
        name: "Chefchaouen",
        address: "Chefchaouen, Marruecos",
        description:
          "Conocida por sus edificios azules y la impresionante montaña del Rif.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.visitmorocco.com",
      },
    ],
    Sudáfrica: [
      {
        name: "Ciudad del Cabo",
        address: "Ciudad del Cabo, Sudáfrica",
        description:
          "Famosa por su icónica Table Mountain y su vibrante vida urbana.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.southafrica.net",
      },
      {
        name: "Johannesburgo",
        address: "Johannesburgo, Sudáfrica",
        description:
          "El centro económico de Sudáfrica con una rica herencia cultural.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.southafrica.net",
      },
      {
        name: "Durban",
        address: "Durban, Sudáfrica",
        description: "Conocida por sus playas de arena dorada y clima cálido.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.southafrica.net",
      },
      {
        name: "Parque Nacional Kruger",
        address: "Parque Nacional Kruger, Sudáfrica",
        description: "Uno de los parques de safari más grandes de África.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.sanparks.org/parks/kruger/",
      },
    ],
    Túnez: [
      {
        name: "Cartago",
        address: "Cartago, Túnez",
        description:
          "Ruinas antiguas de la ciudad cartaginesa y patrimonio mundial de la UNESCO.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.tunisia-tourism.com",
      },
      {
        name: "Sidi Bou Said",
        address: "Sidi Bou Said, Túnez",
        description:
          "Un encantador pueblo costero con calles empedradas y casas blancas con detalles azules.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.tunisia-tourism.com",
      },
      {
        name: "Túnez",
        address: "Túnez, Túnez",
        description:
          "La capital del país, con una medina vibrante y una rica historia.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.tunisia-tourism.com",
      },
      {
        name: "Douz",
        address: "Douz, Túnez",
        description:
          "Conocida como la puerta del desierto, ideal para explorar el Sahara.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.tunisia-tourism.com",
      },
    ],
    Zimbabue: [
      {
        name: "Victoria Falls",
        address: "Victoria Falls, Zimbabue",
        description:
          "Una de las cascadas más grandes y espectaculares del mundo.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.zimbabwetourism.net",
      },
      {
        name: "Parque Nacional Hwange",
        address: "Parque Nacional Hwange, Zimbabue",
        description:
          "Un importante parque de conservación con una gran población de elefantes.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.zimbabwetourism.net",
      },
      {
        name: "La Laguna de Kariba",
        address: "Laguna de Kariba, Zimbabue",
        description: "Un gran embalse ideal para safaris en barco y pesca.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.zimbabwetourism.net",
      },
      {
        name: "Bulawayo",
        address: "Bulawayo, Zimbabue",
        description: "Una ciudad histórica con una rica herencia cultural.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.zimbabwetourism.net",
      },
    ],
    Mozambique: [
      {
        name: "Maputo",
        address: "Maputo, Mozambique",
        description:
          "La vibrante capital de Mozambique con una rica escena cultural.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.mozambique.gov.mz",
      },
      {
        name: "Bazaruto Archipelago",
        address: "Archipiélago de Bazaruto, Mozambique",
        description:
          "Un hermoso archipiélago conocido por sus playas y actividades acuáticas.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.mozambique.gov.mz",
      },
      {
        name: "Tofo",
        address: "Tofo, Mozambique",
        description:
          "Un destino popular para buceo y surf, con playas espectaculares.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.mozambique.gov.mz",
      },
      {
        name: "Vilanculos",
        address: "Vilanculos, Mozambique",
        description:
          "Conocido por sus playas de arena blanca y acceso a las islas del archipiélago de Bazaruto.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJkeZO-M-Y5GatZ3Ml6Z85G1t7Jbm7Rj3A&s",
        web: "https://www.mozambique.gov.mz",
      },
    ],
  };

  const data = countriesData[selectedCountry] || [];

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">{selectedCountry}</button>
        <div className="dropdown-content">
          {categories.map((category, index) => (
            <a
              key={index}
              onClick={() => setSelectedCountry(category)}
              href="#"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
      <Card data={data} />
    </div>
  );
};

export default Africa;
