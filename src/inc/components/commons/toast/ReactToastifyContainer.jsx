import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const ReactToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-center"
      pauseOnHover={true}
      draggable={true}
      theme="light"
      toastClassName="exo-i !font-medium bg-secondary-90 !text-white text-md"
    />
  );
};

export default ReactToastifyContainer;
