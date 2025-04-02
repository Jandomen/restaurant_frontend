export default function MenuCard({ item }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold">{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p className="font-bold text-green-600">${item.precio}</p>
      </div>
    );
  }
  