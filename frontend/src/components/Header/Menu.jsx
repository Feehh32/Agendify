import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-10 justify-center align-middle text-primary font-display font-semibold">
          <li className="transition-colors duration-300 hover:text-secondary">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-colors duration-300 hover:text-secondary">
            <Link to="/about">Sobre</Link>
          </li>
          <li className="transition-colors duration-300 hover:text-secondary">
            <Link to="/schedule">Agendar</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-5 items-center">
        <Link
          to="/login"
          className="relative font-display text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
        >
          Login
        </Link>
        <Button as="child" size="sm">
          <Link to="/register">Começar</Link>
        </Button>
      </div>
    </>
  );
};

export default Menu;
