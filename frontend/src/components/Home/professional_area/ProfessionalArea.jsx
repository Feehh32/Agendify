import ProfessionalBg from "../../layouts/ProfessionalBg";
import Testimonials from "./testimonials/Testimonials";
import ProfessionalCallToAction from "./ProfessionalCallToAction";
import ForAllProfessionals from "./for_all_professionals/ForAllProfessionals";

const ProfessionalArea = () => {
  return (
    <>
      <ProfessionalBg>
        <ProfessionalCallToAction />
        <ForAllProfessionals />
        <Testimonials />
      </ProfessionalBg>
    </>
  );
};

export default ProfessionalArea;
