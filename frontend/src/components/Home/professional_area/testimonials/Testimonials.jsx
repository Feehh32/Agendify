import SectionTitle from "../../../ui/SectionTitle";
import TestimonialsItem from "./TestimonialsItem";
import barber from "../../../../assets/img/barber_testimonial.jpg";
import doctor from "../../../../assets/img/doctor_testimonial.jpg";
import tutor from "../../../../assets/img/tutor_testimonial.jpg";
import QuoteDecorator from "../../../../assets/icons/quote_decorator.svg?react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. Fernanda Almeida",
      profession: "Dermatologista",
      location: "São Paulo, SP",
      text: `"O Agendify otimizou completamente minha rotina de atendimentos. Meus pacientes conseguem marcar consultas com facilidade, e eu tenho controle total da minha agenda. Simples e eficiente!"`,
      img: doctor,
      isFirst: true,
    },
    {
      name: "Marcos Ribeiro",
      profession: "Barbeiro",
      location: "Belo Horizonte, MG",
      text: `"Antes, eu perdia horários e esquecia agendamentos. Agora tudo está centralizado. Os lembretes automáticos me ajudam a manter a pontualidade, e meus clientes adoram a praticidade!"`,
      img: barber,
    },
    {
      name: "Carla Menezes",
      profession: "Professora particular",
      location: "Curitiba, PR",
      text: `"Uso o Agendify para agendar aulas com meus alunos. É intuitivo, bonito e profissional. Recomendo a todos que querem algo simples mas completo para gerenciar seu tempo."`,
      img: tutor,
    },
  ];
  return (
    <section
      className="md:mt-32 mt-16 mx-auto"
      aria-labelledby="testimonials-heading"
    >
      <SectionTitle className="text-center" id="testimonials-heading">
        Depoimentos
      </SectionTitle>
      <p className="md:pt-5 pt-2.5 text-text lg:text-2xl md:text-lg text-base max-w-3xl text-center mx-auto">
        Veja o que os profissionais estão dizendo após utilizar o Agendify.
      </p>
      <div className=" grid grid-cols-2 gap-12 mt-10">
        {testimonials.map((item, index) => (
          <TestimonialsItem
            key={item.name}
            {...item}
            QuoteIcon={QuoteDecorator}
            reverse={index % 2 !== 0}
            showOpeningQuote={index === 0}
            showClosingQuote={index === testimonials.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
