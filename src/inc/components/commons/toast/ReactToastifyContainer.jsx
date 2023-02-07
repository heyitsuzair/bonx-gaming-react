import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IconPlain } from "../index";
const ReactToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-center"
      pauseOnHover={true}
      draggable={true}
      theme="light"
      toastClassName="exo-i !font-medium bg-secondary-90 !text-white text-md"
      closeButton={<IconPlain classes="fa fa-close -mt-1 !text-lg" />}
    />
  );
};

export default ReactToastifyContainer;
