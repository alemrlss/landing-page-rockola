import { useState, useEffect } from "react";
import { AiFillAlert } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

import { motion } from "framer-motion";
import "./Navbar.css";
import MenuMobile from "./MenuMobile";
import MenuOverlay from "./MenuOverlay";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      title: "Sobre Nosotros",
      path: "#about",
    },
    {
      title: "Clientes",
      path: "#clients",
    },
    {
      title: "Empresas",
      path: "#companies",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-30 ${
        navbarScrolled ? "navbar-scrolled" : "navbar-no-scrolled"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <motion.div>
            <img
              src="/public/logo.png"
              alt="logo image"
              width={60}
              height={60}
              draggable={false}
            />
          </motion.div>
        </a>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="block text-sm md:text-base lg:text-lg xl:text-xl text-white font-semibold hover:text-orange-400 transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <a href="#register">
            <motion.button className="text-white bg-transparent border-4 hover:underline border-orange-700 rounded-full py-3 px-6 text-sm font-bold tracking-widest">
              REGISTRARME
            </motion.button>
          </a>
        </div>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <TiThMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <TiThMenu className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          onClose={() => {
            setNavbarOpen(!navbarOpen);
          }}
        />
      ) : null}{" "}
    </motion.nav>
  );
}

export default Navbar;
