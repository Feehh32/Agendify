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
            Pronto para agendar o futuro do seu negócio?
          </SectionTitle>
        </div>
        <div className="md:pt-10 pt-5 grid text-text gap-5 text-lg md:text-2xl justify-center max-w-4xl">
          <p>
            Agendify conecta você aos seus clientes de forma simples,
            profissional e eficiente. Comece agora e veja a diferença.
          </p>
          <p>
            Cadastre-se gratuitamente e seja um dos primeiros a experimentar a
            nova geração de agendamentos online.
          </p>
          <Button
            as="child"
            size="responsive"
            className="justify-self-center md:justify-self-start "
          >
            <Link to="/login">Agendar agora</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default LastCallToAction;
