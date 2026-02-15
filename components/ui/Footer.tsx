import React from "react";
import LinkSection from "../Home/LinkSection";

const Footer = () => {
  return (
    <>
      <div className="divider mt-64"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pb-8">
        <span className="text-center font-semibold">Hossein Maleki</span>
        <LinkSection className="mt-4 md:mt-0 justify-center md:justify-start" />
      </div>
    </>
  );
};

export default Footer;
