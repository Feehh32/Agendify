import AgendifyChoice from "../components/Home/agendifyChoice/AgendifyChoice";
import EasyScheduling from "../components/Home/easyScheduling/EasyScheduling";
import Hero from "../components/Home/Hero";
import LastCallToAction from "../components/Home/LastCallToAction";
import ProfessionalArea from "../components/Home/professional_area/ProfessionalArea";

const Home = () => {
  return (
    <>
      <Hero />
      <EasyScheduling />
      <AgendifyChoice />
      <ProfessionalArea />
      <LastCallToAction />
    </>
  );
};

export default Home;
