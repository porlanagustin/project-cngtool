import React from "react";
import Card from "../../../common/card/Card";
import AddSupplier from "../../../common/addSupplier/AddSupplier";
import "./Restaurants.css";

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
    name: "El Celler de Can Roca",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "Carrer de Can Sunyer, 48, 17007 Girona, España",
    web: "https://www.cellercanroca.com/",
    description:
      "El Celler de Can Roca, dirigido por los hermanos Roca, es un restaurante que combina la tradición catalana con técnicas modernas y creativas. La filosofía del restaurante es ofrecer una experiencia gastronómica memorable a través de una cocina que respeta las raíces de la cultura catalana, al mismo tiempo que explora nuevas técnicas culinarias. Su menú degustación ofrece una variedad de platos innovadores que destacan por su presentación artística y el uso de ingredientes de alta calidad.",
  },
  {
    name: "Osteria Francescana",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "Via Stella, 22, 41121 Modena MO, Italia",
    web: "https://www.osteriafrancescana.it/",
    description:
      "Osteria Francescana, dirigido por el chef Massimo Bottura, es un restaurante que redefine la cocina italiana clásica con un enfoque innovador y contemporáneo. Bottura es conocido por su capacidad para combinar la tradición italiana con técnicas modernas y un sentido del humor único. El menú de Osteria Francescana ofrece una experiencia culinaria que desafía las expectativas, utilizando ingredientes locales y técnicas avanzadas para crear platos que son tanto visualmente impresionantes como deliciosos.",
  },
  {
    name: "Eleven Madison Park",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "11 Madison Ave, New York, NY 10010, EE.UU.",
    web: "https://www.elevenmadisonpark.com/",
    description:
      "Eleven Madison Park, dirigido por Daniel Humm, ofrece una experiencia gastronómica de alta gama en el corazón de Nueva York. Este restaurante es conocido por su cocina americana moderna que combina ingredientes locales con técnicas culinarias innovadoras. La experiencia en Eleven Madison Park es una celebración de la comida como una forma de arte, con un menú degustación que cambia estacionalmente para reflejar lo mejor de la temporada y proporcionar a los comensales una experiencia memorable en un entorno elegante y sofisticado.",
  },
  {
    name: "Mirazur",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "30 Av. Aristide Briand, 06500 Menton, Francia",
    web: "https://www.mirazur.fr/",
    description:
      "Mirazur, bajo la dirección de Mauro Colagreco, es un restaurante en la Costa Azul francesa que se destaca por su enfoque en la cocina francesa contemporánea. Colagreco se enfoca en utilizar ingredientes frescos y locales, muchos de los cuales provienen de su propio jardín. El menú refleja las estaciones del año y ofrece una mezcla de sabores y técnicas que celebran la riqueza del entorno mediterráneo. Mirazur ofrece una experiencia culinaria que combina creatividad con un profundo respeto por la tradición gastronómica francesa.",
  },
  {
    name: "Gaggan",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address:
      "68/1 Soi Lang Suan, Lumpini, Pathum Wan, Bangkok 10330, Tailandia",
    web: "https://www.gaggan.anand.com/",
    description:
      "Gaggan Anand es un restaurante en Bangkok que ofrece una experiencia culinaria única con su enfoque en la cocina india moderna. Gaggan Anand es conocido por su creatividad en la creación de platos que reinventan los clásicos de la cocina india, utilizando técnicas contemporáneas y presentaciones innovadoras. El restaurante ofrece un menú degustación que combina sabores intensos con una experiencia gastronómica inmersiva y lúdica, destacándose por su originalidad y calidad en un entorno exclusivo.",
  },
  {
    name: "Masa",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "10 Columbus Cir, New York, NY 10019, EE.UU.",
    web: "https://www.masanyc.com/",
    description:
      "Masa, dirigido por el chef Masa Takayama, es un restaurante de sushi de lujo en Nueva York que se especializa en ofrecer una experiencia de sushi auténtica y de alta calidad. Masa es conocido por su meticulosa atención al detalle en la preparación de sushi, utilizando los mejores ingredientes frescos y técnicas tradicionales japonesas. La experiencia en Masa es una inmersión en la cultura culinaria japonesa, con un enfoque en la calidad de los ingredientes y la habilidad en la preparación, proporcionando a los comensales una experiencia gastronómica de primer nivel.",
  },
  {
    name: "Le Bernardin",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address: "155 W 51st St, New York, NY 10019, EE.UU.",
    web: "https://www.le-bernardin.com/",
    description:
      "Le Bernardin, bajo la dirección del chef Éric Ripert, es un restaurante de alta gama en Nueva York conocido por su enfoque en la cocina francesa refinada con un énfasis especial en los mariscos frescos. El restaurante ha ganado reconocimiento internacional por su calidad culinaria y su servicio excepcional, ofreciendo un menú que combina técnicas clásicas con un enfoque moderno para presentar platos de mariscos de manera exquisita y elegante. Le Bernardin es una experiencia gastronómica de lujo que celebra lo mejor de la cocina francesa.",
  },
  {
    name: "D.O.M.",
    img: "https://i0.wp.com/noma.dk/wp-content/uploads/2023/04/DSC_4038_aRGB_High-large-JPG.jpg?ssl=1",
    address:
      "Rua Barão de Capanema, 549 - Jardim Paulista, São Paulo - SP, 01411-001, Brasil",
    web: "https://www.domrestaurante.com.br/",
    description:
      "D.O.M., dirigido por Alex Atala, es un restaurante en São Paulo que ofrece una cocina brasileña contemporánea que resalta la riqueza y diversidad de los ingredientes autóctonos de Brasil. Atala es conocido por su enfoque innovador en la cocina brasileña, utilizando ingredientes nativos y técnicas modernas para crear platos que reflejan la biodiversidad del país. El restaurante ofrece un menú degustación que explora sabores locales y técnicas culinarias avanzadas, proporcionando a los comensales una experiencia gastronómica única en el corazón de São Paulo.",
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
