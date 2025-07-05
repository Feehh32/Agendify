import React, { useRef } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../ui/Button";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import UserAvatarImg from "./UserAvatarImg";
import Logout from "../../../assets/icons/logout_icon.svg?react";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
                  <Link
                    to="/"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className=" py-4 border-b border-b-blue-950/20">
                  <Link
                    to="/about"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-4 flex justify-center w-full flex-col gap-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2">
                    {user.avatar_url ? (
                      <img
                        src={user?.avatar_url}
                        alt="Imagem do usuário"
                        className="rounded-full w-6 h-6"
                      />
                    ) : (
                      <UserAvatarImg user={user} />
                    )}
                    <p className="text-primary">{user?.name}</p>
                  </div>
                  <button
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary font-display text-light-blue cursor-pointer hover:bg-primary/80 hover:transition-colors duration-300"
                    onClick={handleLogout}
                  >
                    Logout
                    <Logout className="fill-light-blue" />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="font-display text-primary font-semibold block text-center"
                  >
                    Fazer Login
                  </Link>
                  <Button as="child" size="sm" fullWidth>
                    <Link to="/register">Cadastro</Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
