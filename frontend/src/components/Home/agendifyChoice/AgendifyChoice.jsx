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
      text: "Seus dados são protegidos com criptografia de ponta a ponta.",
    },
    {
      icon: Clock,
      title: "Agendamentos rápidos e intuitivos",
      text: "Em poucos cliques você escolhe o melhor horário com um profissional.",
    },
    {
      icon: Smartphone,
      title: "Acesse de qualquer lugar",
      text: "Totalemente responsivo e otimizado para dispositivos móveis.",
    },
    {
      icon: Notifications,
      title: "Notificações inteligentes",
      text: "Recebas lembretes e atualizações diretamente no seu celular.",
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
          Descubra como facilitamos sua rotina e proporcionamos uma experiência
          sem complicações
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
