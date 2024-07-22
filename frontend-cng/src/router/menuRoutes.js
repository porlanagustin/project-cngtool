import Homepage from "../components/pages/homePage/Homepage";
import Transfers from "../components/pages/suppliers/gifts/Gifts";
import Gifts from "../components/pages/suppliers/gifts/Gifts";
import Restaurants from "../components/pages/infoDestinations/restaurants/Restaurants";
import CalendarEvents from "../components/pages/calendarEvents/CalendarEvents";
import PlaceToVisit from "../components/pages/infoDestinations/placeToVisit/PlaceToVisit";
import Theater from "../components/pages/infoDestinations/theater/Theater";
import ProfilePage from "../components/pages/profile/profile"; // Asegúrate de que la ruta es correcta

export const routes = [
  {
    id: "home",
    path: "/home",
    Element: Homepage,
  },
  {
    id: "transfers",
    path: "/transfers",
    Element: Transfers,
  },
  {
    id: "gifts",
    path: "/gifts",
    Element: Gifts,
  },
  {
    id: "restaurants",
    path: "/restaurants",
    Element: Restaurants,
  },
  {
    id: "calendarEvents",
    path: "/CalendarEvents",
    Element: CalendarEvents,
  },
  {
    id: "PlaceToVisit",
    path: "/PlaceToVisit",
    Element: PlaceToVisit,
  },
  {
    id: "theater",
    path: "/theater",
    Element: Theater,
  },
  {
    id: "profile",
    path: "/profile",
    Element: ProfilePage, // Usa el componente ProfilePage
  },
];
