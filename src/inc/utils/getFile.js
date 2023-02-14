export const getFile = (name) => {
  const HOST =
    import.meta.env.VITE_UPLOADS_URL || "http://localhost:5000/uploads/";
  return HOST + name;
};
