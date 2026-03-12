"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Nuevo mensaje desde la web Apliquelandia",
    );

    const body = encodeURIComponent(
      `Nombre: ${form.name}
       Email: ${form.email}
       Teléfono: ${form.phone}
       Mensaje: ${form.message}
      `,
    );

    window.location.href = `mailto:apliquelandia@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-24 px-6 bg-[#F8F9FA]" id="contacto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        {/* INFO */}

        <div>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Contáctanos
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mt-4"></div>

          <p className="font-poppins text-gray-600 mt-6 text-sm leading-relaxed max-w-md">
            Si deseas cotizar un proyecto de bordado, DTF, sublimación o corte
            láser, completa el formulario y nuestro equipo se pondrá en contacto
            contigo.
          </p>

          <div className="mt-10 space-y-4 font-poppins text-sm text-gray-700">
            <p>
              <strong>Teléfono:</strong> +57 320 990 8045
            </p>
            <p>
              <strong>Email:</strong> apliquelandia@gmail.com
            </p>
            <p>
              <strong>Ubicación:</strong> Bogotá - Colombia
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#AD8330]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#AD8330]"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#AD8330] mt-6 w-full"
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#AD8330] mt-6 w-full"
            required
          />

          <button
            type="submit"
            className="bg-[#AD8330] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#9b7429] transition mt-6"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
