import { useState } from "react";
import { registerUser } from "../api";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    setMensaje(res.message || "Usuario registrado con éxito. Inicia sesión.");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      {mensaje && <p className="text-green-600">{mensaje}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nombre" placeholder="Nombre" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" className="w-full p-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Registrarse</button>
      </form>
    </div>
  );
}
