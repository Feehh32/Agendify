import Button from "../../ui/Button";
import calendar_img from "../../../assets/img/calendar_img.png";
import Check from "../../../assets/icons/check_icon.svg?react";
import { Link } from "react-router-dom";

const ProfessionalCallToAction = () => {
  return (
    <section
      className="flex gap-x-20 items-center "
      aria-labelledby="professional-cta-title"
    >
      <div className="lg:max-w-lg">
        <h2
          className="font-semibold text-primary font-display md:text-4xl text-2xl"
          id="professional-cta-title"
        >
          Profissional autônomo? foque no que importa, a Agendify cuida do
          resto.
        </h2>
        <p className="text-text md:text-2xl text-lg mt-2.5">
          Gestão de atendimentos, clientes e serviços na palma da sua mão. Sem
          complicação, sem papelada.
        </p>
        <ul className="grid gap-y-2.5 mt-5">
          <li className="flex items-center gap-2.5">
            <Check aria-hidden="true" focusable="false" />
            <p className="text-text font-semibold">
              Agenda sincronizada com seus horários
            </p>
          </li>
          <li className="flex items-center gap-2.5">
            <Check aria-hidden="true" focusable="false" />
            <p className="text-text font-semibold ">
              Perfil profissional personalizado
            </p>
          </li>
          <li className="flex items-center gap-2.5">
            <Check aria-hidden="true" focusable="false" />
            <p className="text-text font-semibold ">
              Suporte direto e atualizações constantes
            </p>
          </li>
        </ul>
        <Button as="child" fullWidth={true} className="mt-5" size="responsive">
          <Link to="/register">Começar agora como profissional</Link>
        </Button>
      </div>
      <div className="lg:block hidden">
        <img
          src={calendar_img}
          alt="Interface do calendário da Agendify exibindo horários disponíveis"
        />
      </div>
    </section>
  );
};

export default ProfessionalCallToAction;
