import { useEffect, useState } from "react";
import { fetchMenu, createPlatillo, updatePlatillo, deletePlatillo, fetchPerfil } from "../api";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", descripcion: "", imagen: "" });
  const [editId, setEditId] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [esAdmin, setEsAdmin] = useState(false);

  useEffect(() => {
    cargarMenu();
    verificarAdmin();
  }, []);

  const cargarMenu = async () => {
    const data = await fetchMenu();
    setMenu(data);
  };

  const verificarAdmin = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const perfil = await fetchPerfil(token);
      setEsAdmin(perfil.esAdmin);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updatePlatillo(editId, form);
      setMensaje("✅ Platillo actualizado");
    } else {
      await createPlatillo(form);
      setMensaje("✅ Platillo agregado");
    }
    setForm({ nombre: "", precio: "", descripcion: "", imagen: "" });
    setEditId(null);
    cargarMenu();
  };

  const handleEdit = (platillo) => {
    setForm({ 
      nombre: platillo.nombre, 
      precio: platillo.precio, 
      descripcion: platillo.descripcion, 
      imagen: platillo.imagen 
    });
    setEditId(platillo._id);
  };

  const handleDelete = async (id) => {
    await deletePlatillo(id);
    setMensaje("🗑️ Platillo eliminado");
    cargarMenu();
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Menú del Restaurante</h1>

      {/* Formulario para agregar o editar platillos (Solo Administradores) */}
      {esAdmin && (
        <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-lg mb-5">
          <h2 className="text-xl font-semibold mb-4">{editId ? "Editar Platillo" : "Agregar Platillo"}</h2>
          {mensaje && <p className="text-green-600">{mensaje}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} className="w-full border p-2 rounded" required />
            <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input name="imagen" placeholder="URL de la Imagen" value={form.imagen} onChange={handleChange} className="w-full border p-2 rounded" required />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">{editId ? "Actualizar" : "Agregar"}</button>
          </form>
        </div>
      )}

      {/* Lista de platillos con imágenes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {menu.map((platillo) => (
          <div key={platillo._id} className="bg-red p-4 rounded-lg shadow-md">
            <img src={platillo.imagen} alt={platillo.nombre} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-bold mt-2">{platillo.nombre}</h3>
            <p className="text-gray-700">{platillo.descripcion}</p>
            <p className="text-lg font-semibold text-blue-500">${platillo.precio}</p>

            {/* Solo los administradores pueden editar o eliminar */}
            {esAdmin && (
              <div className="flex justify-between mt-3">
                <button onClick={() => handleEdit(platillo)} className="bg-yellow-500 text-white px-3 py-1 rounded">✏️ Editar</button>
                <button onClick={() => handleDelete(platillo._id)} className="bg-red-500 text-white px-3 py-1 rounded">🗑️ Eliminar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

