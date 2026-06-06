import { HomePage } from "../pages/HomePage";
import { BeliefStatementPage, DestinationsPage } from "../pages";
import { Footer } from "../components";


export const LandingRouter = () => {
  return (
    <>
      <section id="home" className="h-dvh snap-start">
        <HomePage />
      </section>

      <section id="how-we-travel" className="h-dvh snap-start">
        <BeliefStatementPage />
      </section>

      <section id="destinations" className="h-dvh snap-start">
        <DestinationsPage />
      </section>

      <section className="snap-start">
        <Footer />
      </section>
    </>
  );
};