import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      navbar: {
        destinations: "DESTINOS",
        testimonials: "TESTIMONIOS",
        about: "CONÓCENOS",
        plan: "EMPIEZA A PLANEAR",
        team: "Nuestro Equipo",
        why: "¿Por qué Macanudo Travel?",
        contact: "Contáctanos",
      },

      home: {
        headline: "Viajes auténticos inspirados en ti, guiados por quienes conocen el destino",
        searchbar: "¿Qué te gustaría descubrir en tu próximo viaje?",
      },

      beliefStatement: {
        description: "Creemos que los viajes más memorables no se definen por la cantidad de lugares que visitas, sino por las experiencias, las personas y los momentos que te llevas contigo. Por eso nos enfocamos en viajes auténticos, planificación personalizada y experiencias en grupos pequeños diseñadas alrededor de lo que realmente importa para ti.",
      },

      blocks : {
        1:{
          title: "Más Allá de lo Conocido",
          description: "Viaja más allá de las rutas turísticas y descubre lugares, tradiciones y comunidades que muchos visitantes nunca llegan a conocer."
        },
        2:{
          title: "Diseñado para Ti",
          description: "Cada viajero es diferente. Adaptamos cada viaje a tus intereses, ritmo y forma de viajar."
        },
        3:{
          title: "Viaja a un Ritmo Más Humano",
          description: "Los grupos pequeños permiten mayor flexibilidad, atención personalizada y experiencias más significativas durante el viaje."
        }
      },

      footer: {
        copyright: "© MACANUDOTRAVEL",
      },

      destinations: {
        title: "Explora Nuestros Destinos",
        subtitle: "Desliza para descubrir los destinos que conocemos mejor.",
      }
    },
  },

  en: {
    translation: {
      navbar: {
        destinations: "DESTINATIONS",
        testimonials: "TESTIMONIALS",
        about: "ABOUT US",
        plan: "START PLANNING",
        team: "Our Team",
        why: "Why Macanudo Travel?",
        contact: "Contact Us",
      },

      home: {
        headline: "Authentic journeys inspired by you, shaped by local expertise",
        searchbar: "Where would you like to explore next?",
      },

      beliefStatement: {
        description: "We believe the most memorable journeys are not defined by how many places you visit, but by experiences, people, and moments you take home with you. That’s why we focus on authentic travel, personalized planning, and small-group experiences designed around what matters most to you.",
      },

      blocks : {
        1:{
          title: "Explore Beyond the Familiar",
          description: "Travel beyond tourist routes and discover places, traditions, and communities that many visitors never see."
        },
        2:{
          title: "Designed Around You",
          description: "Every traveler is different. We adapt each journey to your interests, pace, and travel style."
        },
        3:{
          title: "Travel at a More Human Pace",
          description: "Smaller groups allow for greater flexibility, personal attention, and meaningful experiences along the way."
        }
      },

      footer: {
        copyright: "© MACANUDOTRAVEL",
      },

      destinations: {
        title: "Explore Our Destinations",
        subtitle: "Swipe through the destinations we know best."
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;