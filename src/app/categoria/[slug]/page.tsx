import { productos } from "@/src/app/data/productos"
import { SUBCATEGORIAS } from "@/src/app/data/categorias"
import Link from "next/link"
import BackButton from "@/src/app/components/ui/BackButton"

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const subcategorias = SUBCATEGORIAS[slug]

  const productosFiltrados = subcategorias
    ? productos.filter((p) =>
        subcategorias.some((sub) => sub.slug === p.categoria)
      )
    : productos.filter((p) => p.categoria === slug)

  return (
    <section className="py-20 px-6 bg-[#F8F8F8]">

      <div className="max-w-7xl mx-auto">

        {/* volver */}
        <div className="mb-10">
          <BackButton />
        </div>

        {/* titulo */}
        <div className="text-center mb-12">

          <h1 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Categoría
          </h1>

          <div className="w-16 h-[2px] bg-[#AD8330] mx-auto mt-4"></div>

        </div>

        {/* SUBCATEGORIAS */}
        {subcategorias && (
          <div className="flex flex-wrap justify-center gap-4 mb-14">

            {subcategorias.map((sub) => (

              <Link key={sub.slug} href={`/categoria/${sub.slug}`}>

                <button className="border border-gray-200 bg-white px-6 py-2 text-sm font-poppins tracking-wide text-[#0B1F2A] hover:border-[#AD8330] hover:text-[#AD8330] transition">
                  {sub.label}
                </button>

              </Link>

            ))}

          </div>
        )}

        {/* PRODUCTOS */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {productosFiltrados.map((producto) => (

            <div
              key={producto.id}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition"
            >

              {/* imagen */}

              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* contenido */}

              <div className="p-6 text-center">

                <p className="font-poppins text-sm text-[#0B1F2A] mb-2">
                  {producto.nombre}
                </p>

                <span className="block font-poppins text-[#AD8330] text-sm mb-4">
                  ${producto.precio}
                </span>

                <Link href={`/producto/${producto.slug}`}>

                  <button className="bg-[#AD8330] text-white px-5 py-2 text-xs tracking-wide hover:bg-[#9b7429] transition">
                    Ver producto
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}