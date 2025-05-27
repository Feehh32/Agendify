import Button from "../ui/Button";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import mainHeroImage from "../../assets/img/main_hero_img.png";
import SectionTitle from "../ui/SectionTitle";

const Hero = () => {
  return (
    <section
      className="bg-light-blue md:pt-32 pt-16 lg:inset-shadow-[0_-200px_rgba(255,255,255,1)] "
      aria-labelledby="hero-title"
    >
      <Container className="md:grid md:grid-cols-2 md:gap-x-40 text-center md:text-left">
        <div className="md:pt-20">
          <SectionTitle as="h1" id="hero-title">
            Agendamentos mais fáceis para o seu dia a dia
          </SectionTitle>
          <p className="pt-5 text-text lg:text-2xl md:text-lg text-base">
            Encontre profissionais e agende serviços, burocracias ou
            complicações, feito no seu tempo e em poucos cliques.
          </p>
          <div className="flex gap-10 pt-5 justify-center pb-10 md:justify-start">
            <Button as="child" size="responsive">
              <Link to="/login">Agendar agora</Link>
            </Button>
            <Button as="child" size="responsive" gradient={false}>
              <Link to="/login">Ver profissionais</Link>
            </Button>
          </div>
        </div>
        <div className="max-w-2xl hidden md:block">
          <img
            src={mainHeroImage}
            alt="Mobile agendify version image"
            className="w-11/12 block object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
