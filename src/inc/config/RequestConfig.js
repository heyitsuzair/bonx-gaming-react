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
};
