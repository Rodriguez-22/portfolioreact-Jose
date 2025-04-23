

const Contenido_Experencia = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-300 mb-6">
        Experiencia en el sector profesional de la informática
      </h2>

      <div className="mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          He trabajado durante varios años en proyectos de desarrollo de software, gestión de sistemas y diseño de soluciones tecnológicas.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-center text-blue-500 dark:text-blue-200 mb-4">
          Proyectos realizados
        </h3>
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700">
          <li className="p-4">
            <strong>Sistema de Gestión de Inventarios:</strong> Aplicación con Python y Django.
          </li>
          <li className="p-4">
            <strong>Plataforma de E-learning:</strong> React y Node.js.
          </li>
          <li className="p-4">
            <strong>Automatización de Procesos Empresariales:</strong> Scripts para optimización.
          </li>
          <li className="p-4">
            <strong>Aplicación Móvil para Gestión Personal:</strong> Desarrollo en Flutter y Firebase.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contenido_Experencia;
