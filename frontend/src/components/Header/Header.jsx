import Container from "../Container";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="py-4 shadow">
      <Container className="flex justify-between items-center">
        <Link to="/" aria-label="Página Inicial">
          <img src={logo} alt="logo Agendify" className="md:h-8 h-6" />
        </Link>
        <Menu />

        <MobileMenu
          mobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setIsMobileMenuOpen}
        />
      </Container>
    </header>
  );
};

export default Header;
