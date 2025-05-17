import logo from "../assets/logo.png";
import Container from "./Container";
import Github from "../assets/icons/github.svg?react";
import Mail from "../assets/icons/mail.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";

const Footer = () => {
  return (
    <footer className="text-primary mt-32 pt-5 bg-blue-50">
      <Container className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <img src={logo} alt="Agendify logo" className="md:h-6 h-5" />
          <p className="md:text-sm text-xs w-40 mt-2.5">
            Agendamentos simples para o seu dia a dia
          </p>
        </div>
        <div>
          <span className="font-display uppercase font-semibold text-sm md:text-base">
            Contato
          </span>
          <ul className="mt-4 grid gap-2 text-xs md:text-base">
            <li>
              <a href="tel:+5511999999999">+55 11 9999-9999</a>
            </li>
            <li>
              <a href="mailto:agendify.schedules@gmail.com">
                agendify.schedules@gmail.com
              </a>
            </li>
            <li>São Paulo, SP</li>
          </ul>
        </div>
        <div>
          <span className="font-display uppercase font-semibold text-sm md:text-base">
            Informações
          </span>
          <ul className="mt-4 grid gap-2 text-xs md:text-base">
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Agendamento</a>
            </li>
            <li>
              <a href="#">Termos e condições</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-3 col-span-1 flex gap-2.5 md:gap-5 justify-center m-5">
          <a
            href="https://github.com/Feehh32"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5"
          >
            <Github className="md:size-8 size-6" />
          </a>
          <a
            href="mailto:agendify.schedules@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5"
          >
            <Mail className="md:size-8 size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-pereira-710448247/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5"
          >
            <Linkedin className="md:size-8 size-6" />
          </a>
        </div>
      </Container>
      <div className="border-t border-blue-950/20 pt-5 pb-5 text-center text-xs md:text-base">
        <p className="text-xs md:text-sm">
          © 2025 Agendify. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
