import { useTranslation } from "react-i18next";

export const BeliefStatementPage = () => {

  const { t } = useTranslation();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      <div className="relative z-10 flex h-full flex-col pt-28">
        <h1 className="mb-1 text-center text-2xl max-w-6xl mx-auto font-bold font-garamond text-black">
          {t("beliefStatement.description")}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto text-center text-lg text-gray-700">
          <div>
            <h2 className="text-xl font-garamond font-semibold mb-2 text-black">
              {t("blocks.1.title")}
            </h2>
            <p>
              {t("blocks.1.description")}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-garamond font-semibold mb-2 text-black">
              {t("blocks.2.title")}
            </h2>
            <p>
              {t("blocks.2.description")}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-garamond font-semibold mb-2 text-black">
              {t("blocks.3.title")}
            </h2>
            <p>
              {t("blocks.3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 