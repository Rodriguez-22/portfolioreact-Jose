import React from "react";
import CarruselTecnologias from "./Carrusel";

const ResumenContenido = () => {
  return (
    <section className="col-span-1 md:col-span-3">
      <div className="bg-white p-6 rounded-lg shadow">

        <article className="mt-4">
          <h3 className="text-md font-semibold">🎓 Formación Académica</h3>
          <p className="text-sm mt-1">
            Educación Secundaria Obligatoria (ESO)
            Instituto IES AZAHAR ANTAS (Finalizado en 2019) <br />
            Técnico en Sistemas Microinformáticos y Redes (Grado Medio) Centro IES CURA VALERA (Finalizado en 2023)<br />
            Actualmente cursando Desarrollador de Aplicaciones Web (Grado Superior) Centro IES Cura Valera.
          </p>
        </article>

        <article className="mt-4">
          <h3 className="text-md font-semibold">💼 Experiencia Laboral</h3>
          <p className="text-sm mt-1">
            Prácticas en el Ayuntamiento de Antas (Soporte técnico y mantenimiento de sistemas informáticos.)<br />
            Trabajo de verano como camarero (Atención al cliente y gestión de pedidos en hostelería.)
          </p>
        </article>

        <article className="mt-4">
          <h3 className="text-md font-semibold">🛠️ Habilidades</h3>
          <p className="text-sm mt-1">
            Programación:  JavaScript, Java.<br />
            Desarrollo Web: HTML, CSS, React<br />
            Bases de Datos: MySQL,<br />
            Idiomas: Español (Nativo), Inglés (Nivel Medio), Francés (nivel básico).
          </p>
        </article>
        <CarruselTecnologias />
      </div>
    </section>
  );
};

export default ResumenContenido;
