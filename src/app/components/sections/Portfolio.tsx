import Image from "next/image"

const portfolio = [
  {
    title: "Bordado Industrial",
    image: "/portfolio/bordado2.jpg",
  },
  {
    title: "Sublimación Textil",
    image: "/portfolio/sublimacion.jpg",
  },
  {
    title: "Grabado Láser",
    image: "/portfolio/laser.jpg",
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]" id="portafolio">

      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Nuestro Trabajo
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mx-auto mt-4"></div>

          <p className="font-poppins text-gray-600 mt-6 max-w-xl mx-auto text-sm">
            Algunos de los proyectos que hemos realizado para empresas,
            marcas y emprendedores.
          </p>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item, index) => (

            <div
              key={index}
              className="relative group overflow-hidden rounded-md"
            >

              <div className="relative h-[260px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <h3 className="text-white font-playfair text-lg tracking-wide">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}