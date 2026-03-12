import Image from "next/image"

const services = [
  {
    title: "Bordado Industrial",
    image: "/services/bordado.jpg",
    description:
      "Bordado profesional para uniformes, gorras, chaquetas y prendas corporativas con acabados de alta precisión.",
  },
  {
    title: "Impresión DTF",
    image: "/services/dtf.jpg",
    description:
      "Impresión textil de alta calidad con colores vibrantes y gran durabilidad para cualquier tipo de prenda.",
  },
  {
    title: "Sublimación",
    image: "/services/sublimacion.jpg",
    description:
      "Personalización de textiles y productos promocionales mediante sublimación profesional.",
  },
]
export default function Services() {
  return (
    <section className="py-20 px-6 bg-white" id="servicios">

      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Nuestros Servicios
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mx-auto mt-4"></div>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition"
            >

              {/* imagen */}

              <div className="relative h-[220px] overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* contenido */}

              <div className="p-8">

                <h3 className="font-playfair text-xl text-[#0B1F2A] mb-3">
                  {service.title}
                </h3>

                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}