import Card from "../../../common/card/Card";

const data = [
    {
      nombre: 'Piedra Pasillo Al Fondo',
      img: 'https://resizer.glanacion.com/resizer/v2/en-el-restaurant-piedra-pasillo-desde-un-hueco-en-VV2XXKR54NESHJKR7F3SQPFEHY.JPG?auth=39550e3b600a4fa6726d5ff61163409c48915ca27913c2c4d9a946995dfbaf24&width=420&height=280&quality=70&smart=true',
      direccion: 'Campos Salles 2145, Buenos Aires, C1429CFC, Argentina',
      web: '-',
      descripcion: 'Se encuentra en una casona recuperada de Núñez que atesora muchísimo encanto y es uno de esos sitios que te sorprende por su marcado carácter, con un equipo de sala realmente encantador y las paredes como "rotas" (la cocina queda a la vista por un gran hueco de ladrillo). Está llevado por dos jóvenes socios (Lucas Canga y Tomás Couriel) que apuestan por una cocina moderna, creativa y compleja, siempre en base a unos platos vistosos que intentan ensalzar el producto de temporada y unos maridajes muy logrados. ¿Una elaboración que nos ha encantado? Su Tartare de ciervo, galletas marinadas y vitello tonnato, pues está lleno de contrastes jugando con la cremosa salsa del vitello y un falso bollo hecho con galletas, simulando pan, que hay que romper para acceder al suave tartare de ciervo oculto en su interior. ¡Dispone de un amplio patio-terraza y un bar, llamado Al Fondo, donde se puede tomar un café o un cocktail!'
    },
    {
        nombre: "Trescha",
        img: "data:image/jpeg;base64,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",
        direccion: "Murillo 725, Buenos Aires, C1414AFE, Argentina",
        web: "https://trescharestaurant.com/",
        descripcion: "El joven chef Tomás Treschanski, tras un amplio periplo internacional que lo llevó a formarse en Le Cordon Bleu de Londres y luego, entre otros, en grandes templos culinarios como Azurmendi (España), Frantzén (Suecia) o el ya desaparecido 108 (Dinamarca), ha regresado a su tierra con una apuesta contemporánea y sin límites construida desde la diversidad. Ubicado en una casa remodelada del barrio de Villa Crespo, este exclusivo restaurante se presenta con una zona de bar que llama la atención por su colección de whiskeys, una coqueta terraza acristalada y a continuación la sala, de línea actual, donde solo hay una elegante barra de cedro para 10 comensales que pueden interactuar con los cocineros. ¿La propuesta? Un único menú degustación de pequeños bocados (15 pasos, cambian cada tres meses), con muchos productos premium de temporada y distintas técnicas (emulsiones, espumas, gelificados, braseados...) en el mismo plato. ¡En la 1ª planta tienen la Test Kitchen, su área de I+D!"
    },
    {
        nombre: "Basa",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/10/b0/81/a3/resto-basa-en-retiro.jpg",
        direccion: "Basavilbaso 1328, Buenos Aires, C1006AAD, Argentina",
        web: "https://basabar.com.ar/",
        descripcion: "Aunque siempre hay un buen número de comensales de empresa a la hora de comer, el ambiente y el estilo de este restaurante, situado en un sótano, le dan un toque claramente nocturno. Cuenta con una gran barra que se extiende a lo ancho de la sala y presenta un aspecto contemporáneo, dominado por la presencia de hormigón y metal. Hay muchas mesas y taburetes de bar, pero si quieres una experiencia más relajada, pide uno de los sofás de cuero con sus mesas de comedor bajas. El menú ofrece posibilidades para todos los gustos, ya que es una mezcla de platos locales bien conocidos y otros cuya inspiración procede del Mediterráneo. El equipo de cocina se maneja bien, lo que significa que puedes empezar con unas deliciosas Empanadas de cordero estofado y pasar a unos Culurgiones rellenos de salmón o algo de la plancha, como una Brocheta de langostinos o una Milanesa de lomo de ternera." 
    }
    
  ];

const Restaurants = () => {
    return (
        <Card data={data}></Card>
    )
}

export default Restaurants;