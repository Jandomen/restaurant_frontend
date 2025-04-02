import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav 
      className={`sticky top-0 left-0 right-0 p-4 text-white shadow-lg ${darkMode ? "bg-gray-900" : "bg-[#6f4f1e]"} z-50 mb-24`}
    >
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-3xl font-extrabold text-center text-custom-font">🍽 Restaurante el malecon</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/menu" className="hover:underline">Menú</Link>
          <Link to="/reservas" className="hover:underline">Reservas</Link>


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
