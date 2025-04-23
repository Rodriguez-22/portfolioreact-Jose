import React from 'react';

type CartaProps = {
  titulo: string;
  imagen: string;
};

const Carta: React.FC<CartaProps> = ({ titulo, imagen }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden m-4 transform hover:scale-105 transition duration-200">
      <img src={imagen} alt={titulo} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{titulo}</h2>
      </div>
    </div>
  );
};

export default Carta;
