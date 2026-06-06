import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

export const StartPlanningPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center text-center pt-30 gap-20 px-6 md:px-16">
      <h1 className="text-4xl md:text-6xl font-garamond font-bold text-black">
        Empieza a Planear
      </h1>

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-6 shadow-2xl">
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setStep(1)}
            className={`relative rounded-xl py-3 font-semibold transition ${
              step === 1
                ? "bg-white text-slate-900"
                : "bg-white/10 text-white"
            }`}
          >
            STEP 1

            {step === 1 && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
            )}
          </button>

          <button
            onClick={() => setStep(2)}
            className={`relative rounded-xl py-3 font-semibold transition ${
              step === 2
                ? "bg-white text-slate-900"
                : "bg-white/10 text-white"
            }`}
          >
            STEP 2

            {step === 2 && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
            )}
          </button>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <Select placeholder="¿A dónde quieres viajar?" />

            <Select placeholder="Tus intereses" />

            <div className="grid md:grid-cols-2 gap-4">
              <Select placeholder="¿Cuántos días?" />
              <Select placeholder="¿Cuándo?" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Select placeholder="Personas" />
              <Select placeholder="Presupuesto por persona" />
            </div>

            <Select placeholder="¿En qué etapa de planificación estás?" />

            <Select placeholder="¿Cómo nos conociste?" />

            <button
              onClick={() => setStep(2)}
              className="w-full rounded-xl bg-amber-500 hover:bg-amber-400 transition py-4 font-bold text-slate-900 tracking-wider"
            >
              SIGUIENTE PASO
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <Input placeholder="Nombre*" />

            <Input placeholder="Apellido*" />

            <Input
              placeholder="Correo electrónico*"
              type="email"
            />

            <Input
              placeholder="Teléfono*"
              type="tel"
            />

            <textarea
              placeholder="¿Alguna nota o solicitud especial?"
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
            />

            <button className="w-full rounded-xl bg-amber-500 hover:bg-amber-400 transition py-4 font-bold text-slate-900 tracking-wider">
              SOLICITAR COTIZACIÓN
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-300 pt-2">
              <ShieldCheck size={18} />
              <span>
                Tu información es segura y nunca será compartida.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Select = ({ placeholder }: { placeholder: string }) => {
  return (
    <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-left text-white hover:bg-slate-700 transition">
      <span>{placeholder}</span>
      <ChevronDown size={18} />
    </button>
  );
};

const Input = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
    />
  );
};