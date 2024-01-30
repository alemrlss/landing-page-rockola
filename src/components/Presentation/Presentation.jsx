import PresentationImage from "./PresentationImage";
import PresentationText from "./PresentationText";

function Presentation() {
  return (
    <div className="flex flex-col mt-20 items-center sm:flex-row">
      <PresentationText />
      <PresentationImage />
    </div>
  );
}

export default Presentation;
