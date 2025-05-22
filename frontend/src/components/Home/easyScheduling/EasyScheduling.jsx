import Container from "../../ui/Container";
import Calendar from "../../../assets/icons/calendar_icon.svg?react";
import Reminder from "../../../assets/icons/reminder_icon.svg?react";
import Search from "../../../assets/icons/search_icon.svg?react";
import Tool from "../../../assets/icons/tool_icon.svg?react";
import SectionTitle from "../../ui/SectionTitle";
import InfoItems from "./InfoItems";

const EasyScheduling = () => {
  return (
    <Container>
      <section className="mt-20">
        <SectionTitle className="text-center">
          Agendando com Facilidade
        </SectionTitle>
        <p className="pt-5 text-text lg:text-2xl md:text-lg text-base max-w-2xl text-center mx-auto">
          Em poucos passos, você marca seu horário com rapidez e segurança
        </p>
        <div className="shadow-base rounded-2xl flex mt-10 p-10 justify-center md:justify-between flex-wrap">
          <InfoItems
            icon={Search}
            title="Encontre o profissional ideal"
            text="Cadastre-se gratuitamente e personalize sua página."
          />
          <InfoItems
            icon={Tool}
            title="Escolha um serviço"
            text="Veja os detalhes, preços e duração de cada serviço oferecido."
          />
          <InfoItems
            icon={Calendar}
            title="Selecione a data e horário"
            text="Escolha um horário disponível e confirme seu agendamento com apenas um clique."
          />
          <InfoItems
            icon={Reminder}
            title="Receba lembretes automáticos"
            text="Seja notificado a cada novo agendamentos. Simpes assim!"
          />
        </div>
      </section>
    </Container>
  );
};

export default EasyScheduling;
