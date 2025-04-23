// formulario.tsx
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes agregar lógica para enviar al backend si quieres
  };

  return (
    <div className="bg-white p-6 rounded shadow h-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre Empresa:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
          <input
            type="email"
            name="correo"
            placeholder="Tu correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Asunto:</label>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto del mensaje"
            value={formData.asunto}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje:</label>
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
