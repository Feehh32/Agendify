import React from "react";
import Button from "../Button";

const Menu = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-10 justify-center align-middle text-primary font-display font-semibold">
          <li className="transition-colors duration-300 hover:text-secondary">
            <a href="#">Home</a>
          </li>
          <li className="transition-colors duration-300 hover:text-secondary">
            <a href="#">Sobre</a>
          </li>
          <li className="transition-colors duration-300 hover:text-secondary">
            <a href="#">Agendar</a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-5 items-center">
        <a
          href="#"
          className="relative font-display text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
        >
          Login
        </a>
        <Button as="a" size="sm">
          Começar
        </Button>
      </div>
    </>
  );
};

export default Menu;
