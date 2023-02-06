import React from "react";

const MainFooter = () => {
  return (
    <footer
      className="bg-inherit border-t-2 border-primary flex flex-col items-center gap-6 md:flex-row justify-between text-white p-16"
      id="main-footer"
    >
      <strong className="text-xl md:text-2xl lg:text-3xl">
        All Rights Reserved &#174;
      </strong>
      <strong className="text-xl md:text-2xl lg:text-3xl">
        Made With &#x2764; By
        <a
          href="//github.com/heyitsuzair"
          className="text-primary metal"
          target="_blank"
          rel="noreferrer"
        >
          {""} UZAIR
        </a>
      </strong>
    </footer>
  );
};

export default MainFooter;
