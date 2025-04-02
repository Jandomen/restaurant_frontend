import { useEffect, useState } from "react";
import { fetchReservas } from "../api";
import ReservaForm from "../components/ReservaForm";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const reservasPorPagina = 5;

  useEffect(() => {
    fetchReservas().then((data) => setReservas(data.reverse())); // Muestra las más recientes primero
  }, []);

  // Paginación
  const indiceInicio = (pagina - 1) * reservasPorPagina;
  const indiceFin = indiceInicio + reservasPorPagina;
  const reservasActuales = reservas.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(reservas.length / reservasPorPagina);

  // Función para formatear la fecha y la hora
  const formatearFechaHora = (fechaISO) => {
    const fechaObj = new Date(fechaISO);
    return `${fechaObj.toLocaleDateString()} - ${fechaObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Reservas</h1>

      {/* Formulario de reserva */}
      <ReservaForm />

      {/* Lista de reservas */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold text-center mb-3">Reservas recientes</h2>
        {reservas.length === 0 ? (
          <p className="text-center">No hay reservas aún.</p>
        ) : (
          <>
            <ul className="max-w-md mx-auto bg-red p-5 rounded-lg shadow-md">
              {reservasActuales.map((reserva) => (
                <li key={reserva._id} className="border-b p-2">
                  <span className="font-bold">{reserva.nombre}</span> - {formatearFechaHora(reserva.fecha)} ({reserva.personas} personas)
                </li>
              ))}
            </ul>

            {/* Controles de paginación */}
            {totalPaginas > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  onClick={() => setPagina(pagina - 1)}
                  disabled={pagina === 1}
                  className={`px-3 py-1 rounded ${pagina === 1 ? "bg-red-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
                >
                  ◀ Anterior
                </button>
                <span className="px-3 py-1 bg-red-200 rounded">Página {pagina} de {totalPaginas}</span>
                <button 
                  onClick={() => setPagina(pagina + 1)}
                  disabled={pagina === totalPaginas}
                  className={`px-3 py-1 rounded ${pagina === totalPaginas ? "bg-red-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
                >
                  Siguiente ▶
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
