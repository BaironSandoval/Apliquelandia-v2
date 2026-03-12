import Link from "next/link";
import Image from "next/image";

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

            <h3 className="font-playfair text-2xl">Apliquelandia</h3>
          </div>

          <p className="font-poppins text-sm text-gray-400 leading-relaxed mb-6">
            Producción de apliques textiles, profesionales y especializados en
            bordado, impresión DTF, sublimación y corte láser para empresas y
            emprendedores.
          </p>

          {/* REDES */}

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/apliquelandia/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/people/Apliqueland%C3%ADa/100081973608859/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8.07V12h2.43V9.8c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.75-1.57 1.52V12h2.67l-.43 2.88h-2.24v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@apliquelandia"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#AD8330] hover:text-[#AD8330] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M21 8.02a7.3 7.3 0 0 1-4.2-1.34V15.5a5.5 5.5 0 1 1-4.77-5.45v2.6a2.9 2.9 0 1 0 2.17 2.85V2h2.6a4.7 4.7 0 0 0 4.2 4.2v1.82z" />
              </svg>
            </a>
          </div>
        </div>

        {/* MENU */}

        <div>
          <h4 className="font-playfair text-lg mb-4">Navegación</h4>

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
          <h4 className="font-playfair text-lg mb-4">Servicios</h4>

          <ul className="space-y-2 font-poppins text-sm text-gray-400">
            <li>Bordado Industrial</li>
            <li>Impresión DTF</li>
            <li>Sublimación</li>
            <li>Corte Láser</li>
          </ul>
        </div>

        {/* CONTACTO */}

        <div>
          <h4 className="font-playfair text-lg mb-4">Contacto</h4>

          <ul className="space-y-2 font-poppins text-sm text-gray-400">
            <li>+57 320 990 8045</li>
            <li>apliquelandia@gmail.com</li>
            <li>Bogotá - Colombia</li>
          </ul>
        </div>
      </div>

      {/*LINEA*/}

      <div className="border-t border-white/10 mt-12 pt-6 text-center">
        <p className="font-poppins text-xs text-gray-500">
          © {new Date().getFullYear()} Apliquelandia. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
