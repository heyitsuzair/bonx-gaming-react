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
    read: {
      url: "games/",
      method: "GET",
      id: "",
    },
    delete: {
      url: "games/",
      method: "DELETE",
      isAuthenticated: true,
      id: "",
    },
    update: {
      url: "games/",
      method: "PUT",
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
    read: {
      url: "games",
      method: "GET",
    },
    search: {
      url: "games/search",
      method: "GET",
      params: { query: "", category: "" },
    },
  },
};
