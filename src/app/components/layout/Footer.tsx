import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0B1F2A] text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* MARCA */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Image
              src="/logoSinFondoClaro.png"
              alt="Apliquelandia"
              width={40}
              height={40}
              className="object-contain"
            />

            <h3 className="font-playfair text-2xl">
              Apliquelandia
            </h3>

          </div>

          <p className="font-poppins text-sm text-gray-400 leading-relaxed mb-6">
            Producción de apliques textiles, profesionales y  especializados en bordado,
            impresión DTF, sublimación y corte láser para empresas
            y emprendedores.
          </p>

          {/* REDES */}

          <div className="flex gap-4">

            <a
              href="https://www.instagram.com/apliquelandia/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              IG
            </a>

            <a
              href="https://www.facebook.com/people/Apliqueland%C3%ADa/100081973608859/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              FB
            </a>

            <a
              href="https://www.tiktok.com/@apliquelandia"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              TT
            </a>

          </div>

        </div>

        {/* MENU */}

        <div>

          <h4 className="font-playfair text-lg mb-4">
            Navegación
          </h4>

          <ul className="space-y-2 font-poppins text-sm text-gray-400">

            <li>
              <Link href="#home" className="hover:text-white transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link href="#servicios" className="hover:text-white transition">
                Servicios
              </Link>
            </li>

            <li>
              <Link href="#portafolio" className="hover:text-white transition">
                Portafolio
              </Link>
            </li>

            <li>
              <Link href="#contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>

            <li>
              <Link href="/categoria" className="hover:text-white transition">
                Catálogo
              </Link>
            </li>

          </ul>

        </div>

        {/* SERVICIOS */}

        <div>

          <h4 className="font-playfair text-lg mb-4">
            Servicios
          </h4>

          <ul className="space-y-2 font-poppins text-sm text-gray-400">

            <li>Bordado Industrial</li>
            <li>Impresión DTF</li>
            <li>Sublimación</li>
            <li>Corte Láser</li>

          </ul>

        </div>

        {/* CONTACTO */}

        <div>

          <h4 className="font-playfair text-lg mb-4">
            Contacto
          </h4>

          <ul className="space-y-2 font-poppins text-sm text-gray-400">

            <li>+57 320 990 8045</li>
            <li>apliquelandia@gmail.com</li>
            <li>Bogotá - Colombia</li>

          </ul>

        </div>

      </div>

      {/* LINEA */}

      <div className="border-t border-white/10 mt-12 pt-6 text-center">

        <p className="font-poppins text-xs text-gray-500">
          © {new Date().getFullYear()} Apliquelandia. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  )
}