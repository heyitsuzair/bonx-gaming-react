import React, { useEffect } from "react";

const DisableClick = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      import.meta.env.VITE_IN_PRODUCTION && e.preventDefault();
      import.meta.env.VITE_IN_PRODUCTION &&
        console.log(
          "%cSo Finally You Reached To Console :) Glad To See You Here. This App Is MNRN Stack (Mongo,Nest,React,Node) Along With React Query",
          "background: blue; color: white; font-size: large"
        );
      console.log(
        "%cMade With Heart By UZAIR. Follow On Github: heyitsuzair",
        "background: blue; color: white; font-size: large"
      );
    });
  }, []);
};

export default DisableClick;
