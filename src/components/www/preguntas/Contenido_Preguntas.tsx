import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const preguntasRespuestas = [
  {
    pregunta: "¿Quién eres y cuál es tu experiencia profesional?",
    respuesta: "Soy un desarrollador con 5 años de experiencia en la creación de aplicaciones web."
  },
  {
    pregunta: "¿Qué habilidades técnicas posees?",
    respuesta: "Tengo habilidades en HTML, CSS, JavaScript, React, Node.js y bases de datos."
  },
  {
    pregunta: "¿Cuál es tu formación académica?",
    respuesta: "Tengo una licenciatura en Ingeniería de Software por la Universidad XYZ."
  },
  {
    pregunta: "¿Qué proyectos has realizado hasta ahora?",
    respuesta: "He trabajado en aplicaciones web como un sistema de gestión de tareas y una plataforma de comercio electrónico."
  },
  {
    pregunta: "¿Qué idiomas hablas y en qué nivel?",
    respuesta: "Hablo Español e Inglés a nivel avanzado."
  },
  {
    pregunta: "¿Qué te motiva a trabajar en este campo?",
    respuesta: "Me motiva crear soluciones tecnológicas que resuelvan problemas reales y ayuden a las personas."
  },
  {
    pregunta: "¿Cuál es tu objetivo profesional a largo plazo?",
    respuesta: "Mi objetivo es convertirme en arquitecto de software y liderar equipos de desarrollo."
  },
  {
    pregunta: "¿Estás abierto/a a trabajos remotos o presenciales?",
    respuesta: "Estoy abierto tanto a trabajos remotos como presenciales, dependiendo de la oportunidad."
  },
  {
    pregunta: "¿Cómo gestionas el trabajo en equipo?",
    respuesta: "Creo en la colaboración activa, el respeto mutuo y la comunicación constante dentro de un equipo."
  },
  {
    pregunta: "¿Dónde se pueden encontrar más detalles sobre tu experiencia?",
    respuesta: "Puedes consultar mi perfil de LinkedIn y GitHub para más detalles sobre mis proyectos y logros."
  }
];

const Contenido_Preguntas = () => {
  const [activa, setActiva] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiva(prev => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-300">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        {preguntasRespuestas.map((item, index) => {
          const abierta = activa === index;
          return (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-left text-blue-700 dark:text-blue-300 font-medium">
                  {item.pregunta}
                </span>
                {abierta ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <div
                className={`px-5 pb-4 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                  abierta ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                {item.respuesta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contenido_Preguntas;
