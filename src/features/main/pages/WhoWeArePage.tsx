export const WhoWeArePage = () => {
  return (
    <div className="pt-30 flex flex-col gap-20 px-6 md:px-16">

      {/* overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      <div className="relative">

      {/* Hero / Título principal */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-garamond font-bold text-black">
          Quiénes Somos
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Conoce la historia, el equipo y la motivación detrás de Macanudo Travel.
        </p>
      </section>

      {/* Historia */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-inter font-semibold mb-4 text-black">Historia</h2>
        <p className="text-gray-300 leading-relaxed">
          Aquí va la historia de la empresa...
        </p>
      </section>

      {/* Motivación */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-inter font-semibold mb-4 text-black">Motivación</h2>
        <p className="text-gray-300 leading-relaxed">
          Qué nos impulsa a seguir...
        </p>
      </section>

      {/* Equipo */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-inter font-semibold mb-8 text-center text-black">Equipo</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="h-24 w-24 mx-auto bg-slate-600 rounded-full mb-4" />
            <h3 className="font-semibold">Nombre</h3>
            <p className="text-sm text-gray-400">Rol</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="h-24 w-24 mx-auto bg-slate-600 rounded-full mb-4" />
            <h3 className="font-semibold">Nombre</h3>
            <p className="text-sm text-gray-400">Rol</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="h-24 w-24 mx-auto bg-slate-600 rounded-full mb-4" />
            <h3 className="font-semibold">Nombre</h3>
            <p className="text-sm text-gray-400">Rol</p>
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-inter font-semibold mb-4 text-black">
          ¿Por qué Macanudo Travel?
        </h2>
        <p className="text-gray-300">
          Diferenciador principal, valor agregado, experiencia, etc.
        </p>
      </section>

      {/* Contacto */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-inter font-semibold mb-6 text-black">Contáctanos</h2>
        <button className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition">
          Escribir ahora
          {/* Email y whatsapp */}
        </button>
      </section>

      </div>
    </div>
  );
};