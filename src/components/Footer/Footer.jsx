import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer border-t border-gray-800 text-white">
      <div className="container p-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Sección de Redes Sociales */}
        <div className="flex flex-col lg:space-y-4 mb-4 lg:mb-0">
          <p className="text-lg font-bold text-white mb-2 lg:mb-4">
            Síguenos en:
          </p>

          {/* Íconos de Redes Sociales */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/tu_pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaFacebook size={24} className="text-blue-800" />
              <p className="text-xs lg:text-sm font-semibold tracking-widest">
                Facebook
              </p>
            </a>

            <a
              href="https://twitter.com/tu_cuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaXTwitter size={24} className="text-gray-100" />
              <p className="text-xs lg:text-sm font-semibold tracking-widest">
                Twitter
              </p>
            </a>
            <a
              href="https://www.instagram.com/tu_cuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaInstagram size={24} className="text-pink-500" />
              <p className="text-xs lg:text-sm font-semibold tracking-widest">
                Instagram
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/tu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaLinkedin size={24} className="text-blue-700" />
              <p className="text-xs lg:text-sm font-semibold tracking-widest">
                LinkedIn
              </p>
            </a>
          </div>
        </div>

        {/* Información de Derechos de Autor */}
        <div className="text-center lg:text-right">
          <p className="text-xs lg:text-sm text-gray-400">
            © 2024 PsRockola - Todos los Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
