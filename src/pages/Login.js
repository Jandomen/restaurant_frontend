import { useState } from "react";
import { loginUser } from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);

    if (res.token) {
      localStorage.setItem("token", res.token);
      setMensaje("✅ Inicio de sesión exitoso.");
    } else {
      setMensaje("⚠️ Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {mensaje && <p className="text-red-600">{mensaje}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" className="w-full p-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Ingresar</button>
      </form>
    </div>
  );
}
