"use client"

import Image from "next/image"
import { sendWhatsApp } from "@/lib/whatsapp"

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]" id="nosotros">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGEN */}

        <div className="relative h-[420px] rounded-md overflow-hidden">

          <Image
            src="/about-textil.jpg"
            alt="Producción textil"
            fill
            className="object-cover"
          />

        </div>

        {/* CONTENIDO */}

        <div>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Sobre Nosotros
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mt-4"></div>

          <p className="font-poppins text-gray-600 mt-6 text-sm leading-relaxed">
            Somos una empresa especializada en producción textil y
            personalización de prendas para empresas, marcas y
            emprendedores. Trabajamos con tecnología profesional para
            ofrecer bordados, impresión DTF, sublimación y corte láser
            con acabados de alta calidad.
          </p>

          <p className="font-poppins text-gray-600 mt-4 text-sm leading-relaxed">
            Nuestro objetivo es transformar ideas en productos textiles
            que representen la identidad de cada cliente.
          </p>

          <button
            className="mt-8 bg-[#AD8330] text-white px-7 py-3 text-sm tracking-wide hover:bg-[#9b7429] transition"
            onClick={() =>
              sendWhatsApp("573209908045", "Hola, me gustaría saber más acerca de su empresa.")
            }
          >
            Conocer más
          </button>

        </div>

      </div>

    </section>
  )
}