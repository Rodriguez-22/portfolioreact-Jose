// Contacto.tsx
import React from "react";
import Formulario from "./Formulario";
import MapaUbicacion from "./Mapa";

const Contacto = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Formulario arriba */}
      <Formulario />

      {/* Mapa debajo */}
      <MapaUbicacion />
    </div>
  );
};

export default Contacto;
