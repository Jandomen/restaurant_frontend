import { useEffect, useState } from "react";
import { fetchMenu } from "../api";
import { Link } from "react-router-dom";
import fondo from "../assets/images/fondo.jpg";

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    cargarMenu();
  }, []);

  const cargarMenu = async () => {
    const data = await fetchMenu();
    setMenu(data.slice(0, 3));
  };

  return (
    <div>
        <div
      className="bg-cover bg-center h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondo})` 
      }}
    >
      <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
        ¡Bienvenido a Nuestro Restaurante! 🍽
      </h1>
    </div>

      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold text-center mb-5">Explora Nuestro Menú</h2>
        <p className="text-center text-gray-600 mb-5">Delicias que no te puedes perder.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menu.map((platillo) => (
            <div key={platillo._id} className="bg-red p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">{platillo.nombre}</h3>
              <p className="text-gray-700">{platillo.descripcion}</p>
              <p className="text-lg font-semibold text-blue-500">${platillo.precio}</p>
            </div>
          ))}
        </div>

      
        <div className="text-center mt-5">
          <Link to="/menu" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Ver todo el Menú →
          </Link>
        </div>
      </div>
    </div>
  );
}
