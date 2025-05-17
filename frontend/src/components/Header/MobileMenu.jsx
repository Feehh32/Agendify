import React, { useRef } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import useOutsideClick from "../../hooks/useOutsideClick";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  });

  return (
    <div className="md:hidden">
      <button
        className="md:hidden text-primary"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Abrir/Fechar menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 py-4 absolute top-14 left-0 w-full bg-white z-50 shadow"
          >
            <nav>
              <ul className={` text-primary font-display font-semibold`}>
                <li className="py-4 border-b border-b-blue-950/20">
                  <a
                    href="#"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li className=" py-4 border-b border-b-blue-950/20">
                  <a
                    href="#"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
                  </a>
                </li>
                <li className=" py-4 border-b border-b-blue-950/20">
                  <a
                    href="#"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agendar
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-4 flex justify-center w-full flex-col gap-4">
              <a
                href="#"
                className="font-display text-primary font-semibold block text-center"
              >
                Fazer Login
              </a>
              <Button as="a" size="sm" className="w-full">
                Começar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
