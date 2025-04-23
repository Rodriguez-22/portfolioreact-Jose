import { motion } from "framer-motion"; // Para animaciones suaves
import Carta from "./Card";

const ResumenContenido: React.FC = () => {
  return (
    <section className=" col-span-1 md:col-span-4 min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-xl shadow-xl p-10 transition-all duration-300">
        <div className="max-w-xl mx-auto px-4">
        {/* Sección Perfil */}
        <motion.div
          className="flex flex-col items-center text-center mb-10 mt-24" // Ajuste mt-24 para evitar que se solape con la barra
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/img/jose.jpg"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-200 dark:border-gray-700"
          />
          <h1 className="text-2xl font-bold text-blue-700 dark:text-white mt-4">José Rodriguez</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Desarrollador Web Junior</p>
        </motion.div>

        {/* Información Personal */}
        <section id="info" className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3">📌 Información Personal</h2>
          <ul className="space-y-1 text-sm">
            <li><strong>Teléfono:</strong> 606 340 486</li>
            <li><strong>Email:</strong> joseantas2006crack@gmail.com</li>
            <li><strong>Dirección:</strong> C/ Rosalía de Castro, Nº17</li>
            <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Básico-Medio), Francés (Básico)</li>
            <li>
              <a href="/public/Curriculum-Jose.pdf" className="text-blue-600 dark:text-blue-400 underline font-semibold">
                Descargar CV (PDF)
              </a>
            </li>
          </ul>
        </section>

        {/* Habilidades */}
        <section id="habilidades" className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3">💡 Habilidades Técnicas</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>HTML & CSS</li>
            <li>JavaScript, Java</li>
            <li>Bases de datos: MySQL, MongoDB</li>
            <li>React, Tailwind, SpringBoot</li>
          </ul>
        </section>

        {/* Experiencia Laboral */}
        <section id="experiencia" className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3">🎓 Formación & 💼 Experiencia</h2>
          <p className="text-sm mb-2">
            <strong>Formación:</strong><br />
            ESO - IES Azahar Antas (2019)<br />
            Técnico en Sistemas Microinformáticos - IES Cura Valera (2023)<br />
            Cursando DAW - IES Cura Valera
          </p>
          <p className="text-sm">
            <strong>Experiencia:</strong><br />
            Prácticas en el Ayuntamiento de Antas (soporte técnico)<br />
            Camarero (verano) - Atención al cliente
          </p>
        </section>
        </div>

        {/* Cartas de Tecnologías */}
        <section id="tecnologias" className="mt-10">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-6 text-center">🛠️ Tecnologías</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Carta titulo="HTML" imagen="/img/html.png" />
            <Carta titulo="SpringBoot" imagen="/img/SpringBoot.png" />
            <Carta titulo="JavaScript" imagen="/img/JavaScript.jpg" />
            <Carta titulo="React" imagen="/img/React.png" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResumenContenido;
