import SectionTitle from "../../ui/SectionTitle";
import usingAgendify from "../../../assets/img/usando_agendify.jpg";
import Container from "../../ui/Container";
import ChoiceItems from "./ChoiceItems";
import Clock from "../../../assets/icons/clock_icon.svg?react";
import Lock from "../../../assets/icons/lock_icon.svg?react";
import Notifications from "../../../assets/icons/notifications_icon.svg?react";
import Smartphone from "../../../assets/icons/smartphone_icon.svg?react";

const AgendifyChoice = () => {
  const choiceItemsContent = [
    {
      icon: Lock,
      title: "Segurança em primeiro lugar",
      text: "Seus dados e agendamentos são armazenados com segurança e privacidade.",
    },
    {
      icon: Clock,
      title: "Agendamentos rápidos e fáceis",
      text: "Em poucos cliques, você cria, edita e visualiza todos os seus compromissos.",
    },
    {
      icon: Smartphone,
      title: "Acesse de onde estiver",
      text: "Use o Agendify no computador, tablet ou celular, sem instalar nada.",
    },
    {
      icon: Notifications,
      title: "Alertas e organização",
      text: "Com lembretes e visual claro da agenda, você nunca mais perde um horário.",
    },
  ];

  return (
    <Container>
      <section
        className="md:mt-32 mt-16"
        aria-labelledby="agendify-choice-title"
      >
        <SectionTitle className="text-center" id="agendify-choice-title">
          Por que escolher o Agendify?
        </SectionTitle>
        <p className="pt-5 text-text lg:text-2xl md:text-lg text-base max-w-3xl text-center mx-auto">
          Descubra como o Agendify pode transformar sua rotina profissional com
          mais controle, agilidade e tranquilidade.
        </p>
        <div className="mt-10 flex justify-center flex-wrap items-center gap-10">
          <div className="max-w-md">
            <img
              src={usingAgendify}
              alt="Professional using agendify"
              className="w-11/12 block object-cover"
            />
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:h-fit">
            {choiceItemsContent &&
              choiceItemsContent.map((item) => (
                <ChoiceItems
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AgendifyChoice;
