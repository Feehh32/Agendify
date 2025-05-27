import SectionTitle from "../../../ui/SectionTitle";
import doctor from "../../../../assets/img/doctor.jpg";
import hairdresser from "../../../../assets/img/hairdresser.jpg";
import tatooMaker from "../../../../assets/img/tatoo_maker.jpg";
import personalTrainer from "../../../../assets/img/personal_trainer.jpg";
import ProfessionalsItems from "./ProfessionalsItems";

const ForAllProfessionals = () => {
  const professionalsContent = [
    {
      img: doctor,
      alt: "Imagem representando um doutor",
      title: "Psicólogos(as) e Terapeutas",
      text: "Agendamentos seguros, lembretes automáticos e controle total de horários.",
    },
    {
      img: hairdresser,
      alt: "Imagem representando uma cabelereira",
      title: "Cabeleireiros(as) e Barbearias",
      text: "Gerencie seus horários, evite conflitos e ofereça agendamentos online com facilidade.",
    },
    {
      img: personalTrainer,
      alt: "Imagem representando um personal trainer",
      title: "Personal Trainers",
      text: "Organize sessões, receba feedbacks e mantenha o controle dos atendimentos.",
    },
    {
      img: tatooMaker,
      alt: "Imagem representando tatuadores",
      title: "Estúdios de Tatuagem",
      text: "Permita que seus clientes escolham horários e recebam lembretes personalizados.",
    },
  ];

  const sectionTitleId = "for-all-professionals-title";

  return (
    <section className="md:mt-32 mt-16 " aria-labelledby={sectionTitleId}>
      <SectionTitle id={sectionTitleId} className="text-center">
        Flexível e prático
      </SectionTitle>
      <p className="pt-5 text-text lg:text-2xl md:text-lg text-base max-w-3xl text-center mx-auto">
        Descubra como diferentes profissionais usam nossa plataforma para
        otimizar suas rotinas e se conectar com seus clientes.
      </p>
      <div className="flex mt-10 justify-center gap-5 flex-wrap">
        {professionalsContent &&
          professionalsContent.map((item) => (
            <ProfessionalsItems
              key={item.title}
              img={item.img}
              alt={item.alt}
              title={item.title}
              text={item.text}
            />
          ))}
      </div>
    </section>
  );
};

export default ForAllProfessionals;
