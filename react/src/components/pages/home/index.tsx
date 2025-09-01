import Footer from "../../layout/footer";
import { Header } from "../../layout/header";
import { Hero } from "./hero";
import { FeaturesSection } from "./features/features-section";
import { useGetFeatures } from "../../../hooks/features/use-get-all";

export default function Home() {
  const { features } = useGetFeatures();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturesSection features={features} />
      </main>
      <Footer />
    </div>
  );
}
