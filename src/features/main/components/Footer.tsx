import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      {/* FOOTER */}
        <footer className="bg-slate-700">
          <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-0 h-auto md:h-20 max-w-400 items-center justify-between px-4 sm:px-6 lg:px-10 py-6 md:py-0">

            {/* REDES */}
            <div className="flex gap-4 md:gap-5 text-2xl md:text-3xl">
              <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
              <FaFacebook className="cursor-pointer hover:text-gray-300 transition" />
              <FaWhatsapp className="cursor-pointer hover:text-gray-300 transition" />
            </div>

            {/* COPYRIGHT */}
            <p className="text-xl font-bold">
              © MACANUDOTRAVEL
            </p>

            {/* EMAIL */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                <p className="text-lg font-medium items-center flex">
                macanudotravel@gmail.com
                </p>
                <img
                src="/MacanudoTravelBlancoIcono.svg"
                alt=""
                className="w-10"
                />
            </div>

          </div>
        </footer>
    </>
  )
}

