import React from "react";
import { Images, RoutesPath } from "../../../config";
import { TextLg, Text6Xl } from "../index";
import { Link } from "react-router-dom";

const BreadcrumbTopPage = ({ text }) => {
  return (
    <header
      className="breadcrumb flex flex-col gap-5 items-center justify-center h-[40vh] lg:h-[67vh] bg-center bg-cover"
      style={{ backgroundImage: `url(${Images.Breadcrumbs.bg})` }}
    >
      <Text6Xl text={text} classes="metal text-shadow mt-20" />
      <div className="flex items-center">
        <Link to={RoutesPath.home}>
          <TextLg
            text="HOME"
            classes="font-bold hover:text-primary transition-all"
          />
        </Link>
        <TextLg text="/" classes="font-medium mx-2" />
        <TextLg text={text} classes="font-bold !text-primary" />
      </div>
    </header>
  );
};

export default BreadcrumbTopPage;
