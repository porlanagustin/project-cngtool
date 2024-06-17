import Homepage from "../components/pages/homePage/Homepage";
import Transfers from "../components/pages/suppliers/gifts/Gifts";
import Gifts from "../components/pages/suppliers/gifts/Gifts";
import Restaurants from "../components/pages/infoDestinations/restaurants/Restaurants";
import CalendarEvents from "../components/pages/calendarEvents/CalendarEvents";

export const routes = [
  {
    id: "home",
    path: "/",
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
    path:"/CalendarEvents",
    Element: CalendarEvents,
  },
];
