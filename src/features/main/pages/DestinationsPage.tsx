import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { destinations } from "../../../shared/Constants/Destinations";


export const DestinationsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      <div className="relative z-10 flex h-full flex-col pt-28">
        {/* título */}
        <h1 className="mb-1 text-center text-4xl font-bold font-garamond text-black">
          {t("destinations.title")}
        </h1>
        <p className="mt-4 text-center text-xl font-inter text-gray-700 max-w-2xl mx-auto">
          {t("destinations.subtitle")}
        </p>

        {/* carousel */}
        <div className="relative flex-1 flex items-center">
          {/* Flecha izquierda */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 sm:left-4 md:left-6 z-20 text-black"
          >
            <ChevronLeft size={24} className="sm:w-10 md:w-12 lg:w-12" />
          </button>

          <div
            className="overflow-hidden w-full px-4 sm:px-10 md:px-20"
            ref={emblaRef}
          >
            <div className="flex">
              {destinations.map((item, index) => {
                const isActive = index === selectedIndex;

                return (
                  <div
                    key={item.title}
                    className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_28%] px-2 sm:px-4"
                  >
                    <div
                      onClick={() => isActive && navigate(item.path)}
                      className={`
                        relative h-64 sm:h-80 md:h-96 lg:h-120 rounded-3xl overflow-hidden
                        transition-all duration-500 cursor-pointer
                        hover:scale-[1.02]
                        ${isActive ? "cursor-pointer scale-100 opacity-100 shadow-2xl" : "cursor-default scale-90 opacity-50"}
                      `}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />

                      {/* título */}
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
                        <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-inter font-medium text-center">
                          {item.title.toUpperCase()}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-6 z-20 text-black"
          >
            <ChevronRight size={24} className="sm:w-10 md:w-12 lg:w-12" />
          </button>
        </div>
      </div>
    </section>
  );
};
