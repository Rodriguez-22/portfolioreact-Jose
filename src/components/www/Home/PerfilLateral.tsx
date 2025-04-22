import React from "react";

const PerfilLateral = () => {
  return (
    <aside className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 mx-auto">
      {/* Imagen de perfil */}
      <div className="flex justify-center mb-6">
        <img
          src="/img/jose.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-blue-100"
        />
      </div>

      {/* Información Personal */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-2">📌 Información Personal</h2>
        <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li><strong>Teléfono:</strong> 606 340 486</li>
          <li><strong>Email:</strong> joseantas2006crack@gmail.com</li>
          <li><strong>Dirección:</strong> C/ Rosalía de Castro, Nº17</li>
          <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Básico-Medio), Francés (Básico)</li>
          <li><strong><a href="/public/Curriculum-Jose.pdf" className="btn waves-effect waves-light custom-margin">Descargar CV (PDF)</a></strong></li>
        </ul>
      </section>

      {/* Datos de Interés */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-2">📝 Datos de Interés</h2>
        <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li>Disponibilidad horaria</li>
          <li>Flexibilidad</li>
          <li>Trabajo en equipo</li>
          <li>Resolución de problemas</li>
          <li>Incorporación inmediata</li>
        </ul>
      </section>

      {/* Habilidades */}
      <section>
        <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-2">💡 Habilidades Técnicas</h2>
        <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Bases de datos: MySQL, MongoDB</li>
        </ul>
      </section>
    </aside>
  );
};

export default PerfilLateral;
