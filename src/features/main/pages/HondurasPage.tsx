import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { hondurasPlaces } from "../../../shared/Constants/Countries/honduras";



export const HondurasPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
});

  useEffect(() => {
  if (!emblaApi) return;

  const handleSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  handleSelect();

  emblaApi.on("select", handleSelect);

  return () => {
    emblaApi.off("select", handleSelect);
  };
}, [emblaApi]);

  const activePlace = hondurasPlaces[selectedIndex];

  return (
  <section className="relative h-screen overflow-hidden">

    {/* BACKGROUND */}
    <div className="absolute inset-0">
      <img
        src={activePlace.image}
        alt={activePlace.title}
        className="h-full w-full object-cover transition-all duration-700 scale-105"
      />

      {/* overlay más suave */}
      <div className="absolute inset-0 bg-black/40" />

      {/* gradiente correcto */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
    </div>

    {/* CONTENT 2 COLUMNAS */}
    <div className="relative z-10 h-full flex items-center px-6 md:px-16 py-12 lg:py-0">

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 lg:items-center items-center ">

        {/* LEFT INFO */}
        <div className="max-w-xl">

          <p className="text-gray-300 tracking-[0.3em] uppercase text-sm mb-4">
            Honduras
          </p>

          <h1 className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6">
            {activePlace.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-300 mb-6">
            <MapPin size={18} />
            <span>{activePlace.location}</span>
          </div>

          <p className="text-gray-200 text-lg leading-relaxed max-w-md">
            {activePlace.description}
          </p>

          {/* <button className="mt-8 px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-500">
            Explorar destino
          </button> */}
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative h-[45vh] lg:h-[60vh] flex items-center">

          {/* arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-30 text-white"
          >
            <ChevronLeft size={42} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-30 text-white"
          >
            <ChevronRight size={42} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {hondurasPlaces.map((place, index) => {
                const isActive = index === selectedIndex;

                return (
                  <div
                    key={place.title}
                    className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_20%]"
                  >
                    <div
                      className={`
                        relative 
                        h-56 sm:h-64 md:h-72 lg:h-80
                        rounded-3xl overflow-hidden
                        transition-all duration-700 cursor-pointer
                        border border-white/10

                        ${isActive
                            ? "scale-100 opacity-100"
                            : "scale-95 sm:scale-90 opacity-50"
                        }
                      `}
                    >
                      <img
                        src={place.image}
                        alt={place.title}
                        className="h-full w-full object-cover"
                      />

                      {/* overlay suave */}
                      <div className="absolute inset-0 bg-black/20" />

                      {/* texto */}
                      <div className="absolute bottom-0 p-6">
                        <h2 className="text-2xl font-semibold text-white">
                          {place.title}
                        </h2>

                        <p className="text-sm text-gray-300 mt-2">
                          {place.location}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
);
};