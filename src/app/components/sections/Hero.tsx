"use client"

import Image from "next/image"
import { sendWhatsApp } from "@/lib/whatsapp"

export default function Hero() {
  return (
    <section className="relative bg-brand-light py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        

          {/* imagen */}
          <Image
            src="/hero/hero-textil-1.png"
            alt="Producción textil profesional"
            fill
            priority
            className="object-cover"
          />

          {/* degradado */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      {/* IMAGEN MOBILE */}
      <div className="absolute inset-0 md:hidden">
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto px-6 py-24" id="home">

        <div className="max-w-xl space-y-6">

              <h1 className="font-playfair text-[#0B1F2A] text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[0.03em]">
                Producción de Apliques Textiles
                <br />
                Profesionales
              </h1>

              <p className="font-poppins text-[#2C2F33] mt-5 text-sm md:text-base tracking-[0.25em]">
                BORDADO • DTF • SUBLIMACIÓN • CORTE LÁSER
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <a href="#servicios" className="bg-[#AD8330] text-white px-7 py-3 text-sm tracking-wide hover:bg-[#9b7429] transition text-center" >
                  Ver servicios
                </a>
                <button
                  className="border border-[#0B1F2A] text-[#0B1F2A] px-7 py-3 text-sm tracking-wide hover:bg-[#0B1F2A] hover:text-white transition text-center"
                  onClick={() =>
                    sendWhatsApp(
                      "573209908045",
                      "Hola, quiero cotizar un servicio"
                    )
                  }
                >
                  Solicitar cotización
                </button>

              </div>

            </div>

          </div>

        </div>

      

    </section>
  )
}