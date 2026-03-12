import { CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Recepción del diseño",
    description:
      "Recibimos tu idea, logo o diseño para analizar el tipo de producción más adecuado.",
  },
  {
    title: "Preparación y pruebas",
    description:
      "Preparamos archivos, configuramos maquinaria y realizamos pruebas para garantizar calidad.",
  },
  {
    title: "Producción",
    description:
      "Fabricamos tu pedido con maquinaria profesional.",
  },
  {
    title: "Entrega final",
    description:
      "Realizamos control de calidad y entregamos el producto terminado listo para uso.",
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="font-playfair text-3xl md:text-4xl text-[#0B1F2A]">
            Nuestro Proceso
          </h2>

          <div className="w-16 h-[2px] bg-[#AD8330] mx-auto mt-4"></div>

          <p className="font-poppins text-gray-600 mt-6 max-w-xl mx-auto text-sm">
            Trabajamos con procesos claros y tecnología profesional
            para garantizar resultados de alta calidad.
          </p>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center group"
            >

              {/* ICONO */}

              <div className="flex justify-center mb-6">

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F5F5F5] group-hover:bg-[#AD8330] transition">

                  <CheckCircle
                    size={28}
                    className="text-[#0B1F2A] group-hover:text-white transition"
                  />

                </div>

              </div>

              {/* NUMERO */}

              <p className="text-xs tracking-[0.3em] text-gray-400 mb-2">
                PASO {index + 1}
              </p>

              {/* TITULO */}

              <h3 className="font-playfair text-lg text-[#0B1F2A] mb-3">
                {step.title}
              </h3>

              {/* TEXTO */}

              <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}