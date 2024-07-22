import Africa from "../regions/africa/Africa";
import Asia from "../regions/asia/Asia";
import CenterAmerica from "../regions/centerAmerica/CenterAmerica";
import Europe from "../regions/europe/Europe";
import NorthAmerica from "../regions/northAmerica/NorthAmerica";
import Oceania from "../regions/oceania/Oceania";
import SouthAmerica from "../regions/southAmerica/SouthAmerica";

export const regionRoutes = [
  {
    id: "africa",
    path: "/PlaceToVisit/africa",
    label: "AFRICA",
    Element: Africa,
  },
  { id: "asia", path: "/PlaceToVisit/asia", label: "ASIA", Element: Asia },
  {
    id: "centerAmerica",
    path: "/PlaceToVisit/centerAmerica",
    label: "AMERICA CENTRAL",
    Element: CenterAmerica,
  },
  {
    id: "europe",
    path: "/PlaceToVisit/europe",
    label: "EUROPA",
    Element: Europe,
  },
  {
    id: "northAmerica",
    path: "/PlaceToVisit/northAmerica",
    label: "NORTE AMERICA",
    Element: NorthAmerica,
  },
  {
    id: "oceania",
    path: "/PlaceToVisit/oceania",
    label: "OCEANIA",
    Element: Oceania,
  },
  {
    id: "southAmerica",
    path: "/PlaceToVisit/southAmerica",
    label: "AMERICA DEL SUR",
    Element: SouthAmerica,
  },
];
