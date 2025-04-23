

const MapaUbicacion = () => {
  return (
    <div className="bg-white p-6 rounded shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203265.30209134918!2d-2.259458310051265!3d37.24722476020597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad2f2238a6257%3A0x403d278a575deb0!2zQW50YXMsIEFsbWVyw61h!5e0!3m2!1ses!2ses!4v1706532546785!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaUbicacion;
