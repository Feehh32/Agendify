import SectionTitle from "../ui/SectionTitle";
import Calendar from "../../assets/icons/calendar_call_to_action.svg?react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const LastCallToAction = () => {
  return (
    <Container>
      <section
        className="shadow-base mt-16 md:mt-32 rounded-2xl p-5 md:p-16 grid justify-center"
        aria-labelledby="last-call-to-action-title"
      >
        <div className=" flex flex-wrap md:items-center gap-5 md:gap-10">
          <Calendar className="md:size-28 size-14 " aria-hidden="true" />
          <SectionTitle id="last-call-to-action-title" className="max-w-3xl">
            Organize sua rotina profissional com mais praticidade.
          </SectionTitle>
        </div>
        <div className="md:pt-10 pt-5 grid text-text gap-5 text-lg md:text-2xl justify-center max-w-4xl">
          <p>
            Agendar nunca foi tão fácil. Com o Agendify, você tem o controle
            total da sua rotina profissional, em um sistema simples, moderno e
            direto ao ponto. Chega de anotações soltas ou horários esquecidos —
            aqui, cada compromisso fica exatamente onde deveria: na sua agenda.
          </p>
          <p>
            Comece agora mesmo a transformar sua forma de organizar
            atendimentos. É gratuito, rápido de configurar e feito especialmente
            para quem vive da sua própria agenda.
          </p>
          <Button
            as="child"
            size="responsive"
            className="justify-self-center md:justify-self-start "
          >
            <Link to="/register">Criar minha conta gratuita</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default LastCallToAction;
