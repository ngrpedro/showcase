import React from "react";
import Text from "../../../components/Text";

const menu = ["Termos", "Privacidade", "Status", "Segurança"];

const Footer = () => {
  return (
    <div className="py-8 px-6 h-36 w-full bg-gradient-to-b from-[#EDEDED] to-[#AABEF2]">
      <ul className="flex flex-wrap items-center justify-start ">
        {menu.map((item, index) => {
          return (
            <a href="#" key={index}>
              <li className="p-4">
                <Text type="text-type-sm">{item}</Text>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
