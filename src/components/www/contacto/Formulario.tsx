import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_661xpdi",
        "template_eeiyed9",
        form.current,
        "t9vTtJjBUaSFDHD-i"
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado con éxito");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Contáctame 📬
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Nombre Empresa:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
            Asunto:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Asunto del mensaje"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí"
            required
            rows={5}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Enviar mensaje
        </button>

        {/* Estado del mensaje */}
        {status && (
          <p className={`mt-4 text-center text-sm ${status.includes("éxito") ? "text-green-600" : "text-red-500"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
