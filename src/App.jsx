import AboutUs from "./components/AboutUs/AboutUs";
import Clients from "./components/Clients/Clients";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Register from "./components/Register/Register";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative overflow-hidden">
      <Navbar />
        <Presentation />
      <div className="container mt-8 sm:mt-24 mx-auto px-4 sm:px-12 relative z-10">
        <AboutUs />
        <Clients />
        <Companies />
        <Register />
      </div>
      <Footer />
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 z-0 to-transparent rounded-full h-80 w-80  blur-xl absolute top-1 left-0 transform translate-x-[-8rem] translate-y-[-6rem]"></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 z-0 to-transparent rounded-full h-96 w-96  blur-2xl absolute top-1 left-0 transform translate-x-[40rem] translate-y-[-18rem]"></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 z-0 to-transparent rounded-full h-56 w-56  blur-md absolute top-1/4 left-4 transform -translate-x-1/2  translate-y-[-18rem]"></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-2/4 -right-72 transform -translate-x-1/2 -translate-1/2"></div>
    </main>
  );
}

export default App;
