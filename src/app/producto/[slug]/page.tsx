"use client"

import { useParams } from "next/navigation"
import { productos } from "@/src/app/data/productos"
import { useState } from "react"
import BackButton from "@/src/app/components/ui/BackButton"

export default function ProductoPage() {

  const { slug } = useParams()
  const producto = productos.find((p) => p.slug === slug)

  const [cantidad, setCantidad] = useState<number | null>(null)

  if (!producto) return <p className="text-center py-20">Producto no encontrado</p>

  const telefono = "573209908045"

  const mensaje = cantidad
    ? `Hola, estoy interesad@ en ${cantidad} unidades del producto: ${producto.nombre}`
    : `Hola, estoy interesad@ en el producto: ${producto.nombre}`

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

  return (
    <section className="py-20 px-6 bg-[#F8F8F8]">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <BackButton />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* imagen */}

          <div className="bg-white border border-gray-200 p-6">

            <div className="overflow-hidden">

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </div>

          {/* info */}

          <div>

            <h1 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A] mb-6">
              {producto.nombre}
            </h1>

            {/* precio */}

            <div className="mb-8">

              <p className="font-poppins text-2xl text-[#AD8330]">
                ${producto.precio}
              </p>

              <span className="font-poppins text-xs text-gray-500">
                precio por unidad
              </span>

            </div>

            {/* seleccionar cantidad */}

            <p className="font-poppins text-sm text-[#0B1F2A] mb-4 tracking-wide">
              Selecciona una cantidad
            </p>

            <div className="flex gap-4 mb-10">

              {[50, 100, 500].map((q) => (

                <button
                  key={q}
                  onClick={() => setCantidad(q)}
                  className={`px-6 py-2 border text-sm font-poppins transition
                    ${
                      cantidad === q
                        ? "bg-[#0B1F2A] text-white border-[#0B1F2A]"
                        : "bg-white text-[#0B1F2A] border-gray-300 hover:border-[#AD8330]"
                    }
                  `}
                >
                  {q === 500 ? "+500" : q}
                </button>

              ))}

            </div>

            {/* boton whatsapp */}

            <a href={urlWhatsapp} target="_blank">

              <button className="bg-[#AD8330] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#9b7429] transition">
                {cantidad ? "Cotizar ahora" : "Comprar ahora"}
              </button>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}