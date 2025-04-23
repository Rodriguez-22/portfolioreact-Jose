import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white mt-auto">
      <div className="max-w-6xl mx-auto py-6 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Columna izquierda: Info */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-lg font-semibold mb-2">
              Portfolio de José Rodríguez Rodríguez
            </h5>
            <p className="text-sm">
              Hola, me llamo Jose Rodríguez Rodríguez, tengo 18 años y vivo en Antas.
              Esto es un portfolio personal, presentando mi currículum a empresas. Algunos de mis hobbies son: Disfrutar con
              Amigos, la Familia, el Fútbol y la Informática. Soy una persona totalmente cualificada, con mis estudios y varios idiomas (como
              inglés, francés...)
            </p>
          </div>

          {/* Columna derecha: Redes */}
          <div className="text-center md:text-right">
            <h5 className="uppercase text-lg font-semibold mb-3">Redes Sociales</h5>
            <div className="flex flex-col md:items-end items-center space-y-2">
              <a href="https://x.com/JosRodrgue77180" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
              <a href="https://www.facebook.com/share/1BwAUbfEJ8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
              <a href="https://www.instagram.com/josee__rodriiguez/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
