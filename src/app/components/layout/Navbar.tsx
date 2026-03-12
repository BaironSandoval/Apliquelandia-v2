"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sendWhatsApp } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* fondo glass */}
      <div className="backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[70px]">
            {/* LOGO */}

            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/logoSinFondo.png"
                alt="Apliquelandia logo"
                width={50}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            {/* MENU DESKTOP */}

            <nav className="hidden md:flex items-center gap-8 font-poppins text-[14px] tracking-wide">
              <Link
                href="#nosotros"
                className="text-[#0B1F2A] hover:text-[#AD8330] transition"
              >
                Nosotros
              </Link>

              <Link
                href="#servicios"
                className="text-[#0B1F2A] hover:text-[#AD8330] transition"
              >
                Servicios
              </Link>

              <Link
                href="#portafolio"
                className="text-[#0B1F2A] hover:text-[#AD8330] transition"
              >
                Portafolio
              </Link>

              <Link
                href="#contacto"
                className="text-[#0B1F2A] hover:text-[#AD8330] transition"
              >
                Contacto
              </Link>

              <Link
                href="/categoria"
                className="text-[#0B1F2A] hover:text-[#AD8330] transition"
              >
                Catálogo
              </Link>
            </nav>

            {/* BOTON DESKTOP */}

            <div className="hidden md:block">
              <button
                className="bg-[#AD8330] text-white px-5 py-2 text-[13px] tracking-wide hover:bg-[#9b7429] transition"
                onClick={() =>
                  sendWhatsApp(
                    "573001234567",
                    "¡Hola! Estoy interesado en sus servicios de producción textil. ¿Podrían brindarme más información?",
                  )
                }
              >
                Cotizar
              </button>
            </div>

            {/* BOTON MOBILE */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              {open ? (
                /* ICONO X */

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#0B1F2A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              ) : (
                /* ICONO HAMBURGUESA */

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#0B1F2A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}

      {open && (
        <div className="md:hidden backdrop-blur-md bg-white/95 border-b border-gray-200">
          <nav className="flex flex-col items-center gap-6 py-8 font-poppins text-[#0B1F2A] text-[15px]">
            <Link href="#nosotros" onClick={closeMenu}>
              Nosotros
            </Link>

            <Link href="#servicios" onClick={closeMenu}>
              Servicios
            </Link>

            <Link href="#portafolio" onClick={closeMenu}>
              Portafolio
            </Link>

            <Link href="#contacto" onClick={closeMenu}>
              Contacto
            </Link>

            <Link href="/categoria" onClick={closeMenu}>
              Catálogo
            </Link>

            <button
              onClick={() =>
                sendWhatsApp("573209908045", "Hola, quiero cotizar un servicio")
              }
              className="bg-[#AD8330] text-white px-6 py-3 mt-4"
            >
              Cotizar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
