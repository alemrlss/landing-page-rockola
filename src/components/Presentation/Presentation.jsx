import PresentationImage from "./PresentationImage";
import PresentationText from "./PresentationText";

function Presentation() {
  return (
    <div className="flex flex-col items-center pt-20 sm:flex-row mx-4 sm:mx-20 w-full">
      <PresentationText />
      <PresentationImage />
    </div>
  );
}

export default Presentation;
