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
    {
      text: "DASHBOARD",
      path: RoutesPath.dashboard.main + RoutesPath.dashboard.myGames,
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
