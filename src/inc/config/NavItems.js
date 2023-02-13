import { RoutesPath } from "./Routes";

export const NavItems = {
  // App
  App: [
    {
      text: "HOME",
      path: RoutesPath.home,
    },
    {
      text: "GAMES",
      path: RoutesPath.games,
    },
    {
      text: "CONTACT",
      path: RoutesPath.contact,
    },
  ],
  Dashboard: [
    {
      text: "MY GAMES",
      path: RoutesPath.dashboard.myGames,
    },
    {
      text: "SETTINGS",
      path: RoutesPath.dashboard.settings,
    },
    {
      text: "BACK TO SITE",
      path: RoutesPath.home,
    },
  ],
};
