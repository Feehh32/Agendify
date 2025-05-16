import Container from "../Container";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="py-4 shadow">
      <Container className="flex justify-between items-center">
        <a href="/" aria-label="Página Inicial">
          <img src={logo} alt="logo Agendify" className="md:h-10 h-7" />
        </a>
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
