import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const HomePage = () => {

  const { t } = useTranslation();
  const [destination, setDestination] = useState("");

  const API_URL = "https://script.google.com/macros/s/AKfycbx4l-HCgKqZ0P66lC8z9md5VqVWhfzkpekRc4-Pnyr8gyMl_WTn2lZhX42wGz2xzj3P/exec";

//   async function getUsuarios() {
//   const response = await fetch(API_URL);
//   const result = await response.json();
//   console.log(result.data); // Aquí están tus filas de la hoja de cálculo
// }

const getData = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
};

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="min-h-screen pt-24 flex items-center justify-center px-4">

      <div className="flex flex-col items-center text-center">

        <img
          src="/MacanudosTravelLogo.png"
          alt="Logo"
          className="w-64 sm:w-80 md:w-96 lg:w-130 object-contain"
        />

        <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-garamond text-center">
          {t("home.headline")}
        </h1>

        <div className="mt-8 sm:mt-10 relative w-full max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t("home.searchbar")}
            className="w-full rounded-2xl bg-white/90 pl-12 pr-4 py-3 text-slate-800 shadow-lg outline-none border border-slate-200 focus:border-[#34455E] focus:ring-2 focus:ring-[#34455E]/30"
          />
        </div>

      </div>

    </main>
  );
};