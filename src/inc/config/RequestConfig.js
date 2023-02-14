export const RequestConfig = {
  // Auth
  auth: {
    signup: {
      url: "auth/signup",
      method: "POST",
    },
    login: {
      url: "auth/login",
      method: "POST",
    },
    update: {
      url: "auth/update",
      method: "PUT",
      isAuthenticated: true,
    },
  },
  // Game
  game: {
    create: {
      url: "games",
      method: "POST",
      isAuthenticated: true,
    },
    delete: {
      url: "games/",
      method: "DELETE",
      isAuthenticated: true,
      id: "",
    },
  },

  // Games
  games: {
    readOwnerGame: {
      url: "games/owner",
      method: "GET",
      isAuthenticated: true,
    },
  },
};
