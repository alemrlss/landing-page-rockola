import PresentationImage from "./PresentationImage";
import PresentationText from "./PresentationText";

function Presentation() {
  return (
    <div className="flex flex-col items-center mt-20 sm:mt-10 sm:flex-row mx-0 sm:mx-20 w-full z-10 ">
      <PresentationText />
      <PresentationImage />
    </div>
  );
}

export default Presentation;
