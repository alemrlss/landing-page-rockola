import FeaturesClients from "../Features/FeaturesClients";

function Clients() {
  return (
    <div
      className="flex justify-center items-center flex-col pt-28"
      id="clients"
    >
      <h2 className="text-white text-4xl my-5">Clientes</h2>
      <FeaturesClients />
    </div>
  );
}

export default Clients;
