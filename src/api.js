const API_URL = process.env.REACT_APP_API_URL;


// 🚀 Obtener todo el menú
export const fetchMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);
  return res.json();
};

// 🚀 Agregar un platillo al menú
export const createPlatillo = async (platillo) => {
  const res = await fetch(`${API_URL}/menu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(platillo),
  });
  return res.json();
};

// 🚀 Editar un platillo
export const updatePlatillo = async (id, platillo) => {
  const res = await fetch(`${API_URL}/menu/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(platillo),
  });
  return res.json();
};

// 🚀 Eliminar un platillo
export const deletePlatillo = async (id) => {
  const res = await fetch(`${API_URL}/menu/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// 🚀 Obtener reservas
export const fetchReservas = async () => {
  const res = await fetch(`${API_URL}/reservas`);
  return res.json();
};

// 🚀 Crear una reserva
export const createReserva = async (reserva) => {
  const res = await fetch(`${API_URL}/reservas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  return res.json();
};

// 🚀 Registrar usuario
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/users/registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// 🚀 Iniciar sesión
export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

// 🚀 Obtener perfil del usuario autenticado
export const fetchPerfil = async (token) => {
    try {
      const res = await fetch(`${API_URL}/users/perfil`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!res.ok) {
        throw new Error("No se pudo obtener el perfil");
      }
  
      return await res.json();
    } catch (error) {
      console.error("❌ Error al obtener perfil:", error);
      return null;
    }
  };
