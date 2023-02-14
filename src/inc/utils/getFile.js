export const getFile = (name) => {
  const HOST = import.meta.env.UPLOADS_URL || "http://localhost:5000/uploads/";
  return HOST + name;
};
