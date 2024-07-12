import Homepage from "../components/pages/homePage/Homepage";
import Transfers from "../components/pages/suppliers/gifts/Gifts";
import Gifts from "../components/pages/suppliers/gifts/Gifts";
import Restaurants from "../components/pages/infoDestinations/restaurants/Restaurants";
import CalendarEvents from "../components/pages/calendarEvents/CalendarEvents";
import Login from "../components/pages/login/Login";
import PlaceToVisit from "../components/pages/infoDestinations/placeToVisit/PlaceToVisit";
import Theater from "../components/pages/infoDestinations/theater/Theater";

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
    id: "login",
    path: "/login",
    Element: Login,
  },
];
