import { useEffect, useState } from "react";
import { fetchPerfil } from "../api";

export default function Perfil() {
  const [perfil, setPerfil] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchPerfil(token).then(setPerfil);
    }
  }, [token]);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold">Perfil del Usuario</h2>
      {perfil ? (
        <div className="bg-gray-100 p-5 rounded shadow-md">
          <p><strong>Nombre:</strong> {perfil.nombre}</p>
          <p><strong>Email:</strong> {perfil.email}</p>
        </div>
      ) : (
        <p>Debes iniciar sesión para ver tu perfil.</p>
      )}
    </div>
  );
}

