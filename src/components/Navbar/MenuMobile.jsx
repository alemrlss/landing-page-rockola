const MenuMobile = ({ links, onClose }) => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 bottom-0 z-40">
      <ul className="flex flex-col items-center justify-center h-full">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <a
              href={link.path}
              className="text-lg text-gray-800 font-semibold hover:text-orange-400 transition duration-300"
              onClick={() => onClose()} // Cerrar el menú al hacer clic en un enlace
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
