import React from 'react';
import Contenido_Preguntas from '@/components/www/preguntas/Contenido_Preguntas'; // Ajusta la ruta según tu estructura

const Pregunta = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4">
      <div className="container mx-auto">
        <Contenido_Preguntas />
      </div>
    </main>
  );
};

export default Pregunta;
