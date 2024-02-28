import FeaturesCompany from "../Features/FeaturesCompany";
import Plans from "./Plans/Plans";

function Companies() {
  return (
    <div
      className="flex justify-center items-center flex-col pt-28"
      id="companies"
    >
      <h2 className="text-white text-4xl my-5">Establecimientos</h2>
      <FeaturesCompany />
      <Plans />
    </div>
  );
}

export default Companies;
