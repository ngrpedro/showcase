import { List } from "phosphor-react";
import React from "react";
import Logo from "../../assets/organizze/logo";
import Button from "../../components/Button";
import Text from "../../components/Text";

const menu = ["Home", "Sobre nós", "Clientes", "Contato"];

const Navbar = () => {
  return (
    <div
      className="py-4 flex items-center justify-between px-6
    bg-gradient-to-t from-[#EDEDED] to-[#AABEF2]"
    >
      <div className="md:hidden">
        <List size={28} />
      </div>

      <Logo width={120} />

      <div></div>
      <div className=" hidden md:flex items-center justify-center gap-12">
        <ul className="flex items-center justify-between gap-6">
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
      <div>
        <Button type={"button-type-primary"}>Começar</Button>
      </div>
    </div>
  );
};

export default Navbar;
