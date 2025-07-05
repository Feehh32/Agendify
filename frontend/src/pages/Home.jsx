import AgendifyChoice from "../components/Home/agendifyChoice/AgendifyChoice";
import Hero from "../components/Home/Hero";
import LastCallToAction from "../components/Home/LastCallToAction";
import ProfessionalArea from "../components/Home/professional_area/ProfessionalArea";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Agendamentos mais fáceis para o seu dia a dia");
  return (
    <>
      <Hero />
      <AgendifyChoice />
      <ProfessionalArea />
      <LastCallToAction />
    </>
  );
};

export default Home;
