import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer className={`p-6 mt-[200px] transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-[#6f4f1e] text-white"}`}>

      <p className="text-lg font-semibold text-custom-font text-center">
        🍽 Restaurante el malecon - Todos los derechos reservados © {new Date().getFullYear()}
      </p>
      <p className="text-sm text-center mt-2">
        Jando Becker
      </p>
      <p className="text-sm text-center">Síguenos en redes sociales:</p>
      
      <div className="flex justify-center space-x-6 mt-2 text-2xl">
        <a 
          href="https://www.facebook.com/ElMaleconRestaurant" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors">
          <FaFacebookF />
        </a>
        <a 
          href="https://www.instagram.com/la_barra.el_cevichito/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-pink-500 transition-colors">
          <FaInstagram />
        </a>
        <a 
          href="https://x.com/MariscosPezCabo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
