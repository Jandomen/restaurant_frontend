import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({ darkMode, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 p-4 text-white shadow-lg ${darkMode ? "bg-gray-900" : "bg-[#6f4f1e]"} z-50 mb-24`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-center text-custom-font">🍽 Restaurante el Malecon</Link>
        
        {/* Botón de menú para móviles */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-white p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menú de navegación */}
        <div className={`flex items-center space-x-4 ${isMobileMenuOpen ? "flex-col lg:flex-row" : "lg:flex-row hidden lg:flex"}`}>
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/menu" className="hover:underline">Menú</Link>
          <Link to="/reservas" className="hover:underline">Reservas</Link>

          {/* Botón para cambiar el tema */}
          <button 
            onClick={toggleTheme} 
            className="flex items-center bg-transparent border border-white text-white px-3 py-2 rounded hover:bg-white hover:text-black transition-all duration-300">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
