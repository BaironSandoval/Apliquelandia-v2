"use client"

import { sendWhatsApp } from "@/lib/whatsapp"

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0B1F2A] text-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="font-playfair text-3xl md:text-4xl leading-tight">
          ¿Listo para crear tu
          <br />
          próximo proyecto textil?
        </h2>

        <p className="font-poppins text-sm md:text-base text-gray-300 mt-6 max-w-2xl mx-auto">
          Contáctanos y recibe una cotización personalizada para bordado,
          impresión DTF, sublimación o corte láser. Nuestro equipo te
          ayudará a materializar tu idea con calidad profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <button
            className="bg-[#AD8330] px-8 py-3 text-sm tracking-wide hover:bg-[#9b7429] transition"
            onClick={() =>
              sendWhatsApp("573209908045", "Hola, quiero cotizar un servicio")
            }
          >
            Solicitar cotización
          </button>
          
          <a href="/categoria" className="border border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-[#0B1F2A] transition">
            <button>
              Ver portafolio
            </button>
          </a>

        </div>

      </div>

    </section>
  )
}