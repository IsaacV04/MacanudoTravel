import { Route, Routes } from "react-router-dom";
import { LandingRouter } from "../features/main/routes/LandingRouter";
import { NavBar } from "../features/main/components";
import { useRef } from "react";
import { WhoWeArePage } from "../features/main/pages";
import { DestinationsRouter } from "../features/main/routes/DestinationsRouter";
import { StartPlanningPage } from "../features/main/pages/StartPlanningPage";

export const AppRouter = () => {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <div className="relative min-h-screen text-white">

      {/* fondo */}
      <div className="fixed inset-0 -z-10">
        <img src="/fondo.jpg" className="h-full w-full object-cover" />
      </div>

      <NavBar scrollRef={scrollRef} />

      <main
        ref={scrollRef}
        className="h-dvh overflow-y-auto scroll-smooth snap-y snap-proximity"
      >

        <Routes>
          <Route path="*" element={<LandingRouter />} />
          <Route path="/whoweare" element={<WhoWeArePage />} />
          <Route path="/destinations/*" element={<DestinationsRouter />} />
          <Route path="/startplanning" element={<StartPlanningPage />} />
        </Routes>

      </main>
    </div>
  );
};