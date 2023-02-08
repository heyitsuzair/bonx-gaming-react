export const RoutesPath = {
  // App
  home: "/",
  games: "/games",
  contact: "/contact",

  // Auth
  signup: "/signup",
  login: "/login",
  logout: "/logout",

  // Dashboard
  dashboard: {
    index: "/dashboard/:route",
    myGames: "/dashboard/my-games",
    addGame: "/dashboard/add-game",
    game: "/dashboard/my-games/:id",
  },
};
