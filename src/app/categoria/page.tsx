"use client"

import HomeButton from "@/src/app/components/ui/HomeButton"
import Link from "next/link"

export default function CategoriesSection() {
  return (
    <section className="py-20 px-6 bg-[#F8F8F8]">

      <div className="max-w-7xl mx-auto">

        {/* botón volver */}
        <div className="mb-10">
          <HomeButton label="← Ir a Inicio" />
        </div>

        {/* titulo */}
        <div className="text-center mb-14">

          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Categorías
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mx-auto mt-4"></div>

        </div>

        {/* grid categorias */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            href="/categoria/hombres"
            className="border border-gray-200 bg-white py-6 text-center font-poppins text-sm tracking-wide text-[#0B1F2A] hover:border-[#AD8330] hover:text-[#AD8330] hover:shadow-md transition"
          >
            Hombres
          </Link>

          <Link
            href="/categoria/mujeres"
            className="border border-gray-200 bg-white py-6 text-center font-poppins text-sm tracking-wide text-[#0B1F2A] hover:border-[#AD8330] hover:text-[#AD8330] hover:shadow-md transition"
          >
            Mujeres
          </Link>

          <Link
            href="/categoria/infantil"
            className="border border-gray-200 bg-white py-6 text-center font-poppins text-sm tracking-wide text-[#0B1F2A] hover:border-[#AD8330] hover:text-[#AD8330] hover:shadow-md transition"
          >
            Infantil
          </Link>

          <Link
            href="/categoria/temporadas"
            className="border border-gray-200 bg-white py-6 text-center font-poppins text-sm tracking-wide text-[#0B1F2A] hover:border-[#AD8330] hover:text-[#AD8330] hover:shadow-md transition"
          >
            Temporadas
          </Link>

        </div>

      </div>

    </section>
  )
}