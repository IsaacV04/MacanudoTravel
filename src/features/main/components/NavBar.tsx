import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState, type RefObject } from "react";

import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { destinations } from "../../../shared/Constants/Destinations";

type Props = {
  scrollRef: RefObject<HTMLElement | null>;
};

export const NavBar = ({ scrollRef }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const aboutItems = [t("navbar.team"), t("navbar.why"), t("navbar.contact")];

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    let lastY = 0;

    const handleScroll = () => {
      const currentY = el.scrollTop;

      const goingDown = currentY > lastY;

      if (goingDown && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    const goingDown = latest > previous;
    const isPastThreshold = latest > 80;

    if (goingDown && isPastThreshold) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const goToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const section = scrollRef.current?.querySelector(`#${sectionId}`);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/");

    setTimeout(() => {
      const section = scrollRef.current?.querySelector(`#${sectionId}`);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white">
      {/* HEADER SUPERIOR */}
      <header className="relative z-20 h-12 bg-slate-700">
        <div className="mx-auto flex h-full max-w-400 items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            onClick={() => {
              const newLang = i18n.language === "es" ? "en" : "es";

              i18n.changeLanguage(newLang);

              localStorage.setItem("lang", newLang);
            }}
            className="text-lg font-medium hover:text-gray-300 transition"
          >
            {i18n.language.toUpperCase()} ▼
          </button>

          <div className="flex items-center gap-2 font-inter text-xl">
            <FaWhatsapp className="text-2xl" />
            <span>+504 9285-7023</span>
          </div>
        </div>
      </header>

      {/* NAVBAR SECUNDARIO */}
      <motion.nav
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-12
        left-0
        z-10
        w-full
        bg-slate-700/60
        md:bg-transparent
        md:hover:bg-slate-700/60
        "
      >
        <div className="mx-auto flex h-14 max-w-400 items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* LOGO */}
          <button
            onClick={() => goToSection("home")}
            className="cursor-pointer"
          >
            <img
              src="/MacanudoTravelTittle.png"
              className="w-40 sm:w-52 md:w-60 lg:w-65 object-cover transition-all duration-300 hover:brightness-50"
            />
          </button>

          {/* MENU */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-12 text-sm lg:text-lg">
            {/* DESTINOS */}
            <li className="relative group">
              <button
                onClick={() => goToSection("destinations")}
                className="cursor-pointer font-garamond transition hover:text-gray-800"
              >
                {t("navbar.destinations")}
              </button>

              <div
                className="
                absolute left-1/2 top-full mt-4 w-52 -translate-x-1/2
                rounded-xl bg-slate-700/95 backdrop-blur-md py-3
                opacity-0 invisible transition-all duration-300
                group-hover:opacity-100 group-hover:visible"
              >
                {destinations.map((country) => (
                  <button
                    key={country.title}
                    onClick={() =>
                      navigate(country.path)
                    }
                    className="
                      block w-full px-5 py-2 text-left
                      font-garamond hover:bg-white/10"
                  >
                    {country.title}
                  </button>
                ))}
              </div>
            </li>

            {/* TESTIMONIOS */}
            <li>
              <button className="cursor-pointer font-garamond transition hover:text-gray-800">
                {t("navbar.testimonials")}
              </button>
            </li>

            {/* CONÓCENOS */}
            <li className="relative group">
              <Link
                to="/whoweare"
                className="cursor-pointer font-garamond transition hover:text-gray-800"
              >
                {t("navbar.about")}
              </Link>

              <div
                className="
                absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2
                rounded-xl bg-slate-700/95 backdrop-blur-md py-3
                opacity-0 invisible transition-all duration-300
                group-hover:opacity-100 group-hover:visible"
              >
                {aboutItems.map((option) => (
                  <button
                    key={option}
                    className="
                    block w-full px-5 py-2 text-left
                    font-garamond hover:bg-white/10"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-3xl"
          >
            <IoMenu />
          </button>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className=" absolute top-14 left-0 w-full md:hidden bg-slate-700/60 px-6 py-4 space-y-4 shadow-lg">
              <button
                onClick={() => {
                  goToSection("destinations");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-garamond"
              >
                {t("navbar.destinations")}
              </button>

              <button
                className="block w-full text-left font-garamond"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("navbar.testimonials")}
              </button>

              <Link
                to="/whoweare"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-garamond"
              >
                {t("navbar.about")}
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left font-garamond"
              >
                {t("navbar.plan")}
              </button>
            </div>
          )}

          {/* CTA */}
          <button 
            className="hidden md:block cursor-pointer text-sm lg:text-lg font-garamond hover:text-gray-800 transition"
            onClick={() => navigate("/startplanning")}
          >
            {t("navbar.plan")}
          </button>
        </div>
      </motion.nav>
    </div>
  );
};
