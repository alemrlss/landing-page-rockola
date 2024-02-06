import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer border-t border-gray-800 text-white">
      <div className="container p-8 flex flex-col lg:flex-row justify-between items-start">
        {/* Sección de Redes Sociales */}
        <div className="flex flex-col lg:flex-col lg:items-start mb-4 lg:mb-0">
          <p className="text-lg font-bold text-white mb-2 lg:mb-4">
            Síguenos en:
          </p>

          {/* Íconos de Redes Sociales */}
          <div className="flex flex-wrap space-y-2 lg:space-x-4 lg:space-y-0">
            <a
              href="https://www.facebook.com/tu_pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 w-1/2 lg:w-auto"
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
              className="flex items-center space-x-2 w-1/2 lg:w-auto"
            >
              <FaXTwitter size={20} className="text-gray-100" />
              <p className="text-xs lg:text-sm font-semibold tracking-widest">
                X(Antes Twitter)
              </p>
            </a>

            <a
              href="https://www.instagram.com/tu_cuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 w-1/2 lg:w-auto"
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
              className="flex items-center space-x-2 w-1/2 lg:w-auto"
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
