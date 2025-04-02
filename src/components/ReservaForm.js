import { useState } from "react";
import { createReserva } from "../api";
import { useNavigate } from "react-router-dom";

export default function ReservaForm({ darkMode }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createReserva({ nombre, email, fecha, hora, personas });

    if (response.error) {
      setMensaje("❌ Error al reservar. Inténtalo de nuevo.");
    } else {
      setMensaje("✅ Reserva creada con éxito!");
      setNombre("");
      setEmail("");
      setFecha("");
      setHora("");
      setPersonas(1);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className={`max-w-md mx-auto p-5 rounded-lg shadow-lg transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Hacer una Reserva</h2>
      {mensaje && <p className="text-center text-green-400">{mensaje}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 rounded bg-transparent"
          required
        />
        <input
          type="email"
          placeholder="Tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded bg-transparent"
          required
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full border p-2 rounded bg-transparent"
          required
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="w-full border p-2 rounded bg-transparent"
          required
        />
        <input
          type="number"
          placeholder="Número de Personas"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          className="w-full border p-2 rounded bg-transparent"
          min="1"
          required
        />
        <button 
          type="submit" 
          className={`w-full p-2 rounded font-semibold transition-all duration-300 
            ${darkMode ? "bg-blue-500 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-700"}`}>
          Reservar Ahora
        </button>
      </form>
    </div>
  );
}
