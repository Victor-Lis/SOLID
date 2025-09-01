import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SpecialOfferSection from "@/modules/special-offer";
import SuggestionsSection from "@/modules/suggestions";
import TestimonialsSection from "@/modules/testimonials";
import { useGetAllCoffees } from "@/hooks/coffe/use-get-all";
import { useGetSpecialCoffee } from "@/hooks/coffe/use-get-special";
import { useGetAllTestimonies } from "@/hooks/testimony/use-get-all";

export default async function HomePage() {
  const { specialCoffee } = await useGetSpecialCoffee();
  const { coffees } = await useGetAllCoffees();
  const { testimonies } = await useGetAllTestimonies();

  console.log("[Server] Pre-fetching all data");

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-12">
        <SpecialOfferSection specialCoffee={specialCoffee} />
        <SuggestionsSection suggestions={coffees} />
        <TestimonialsSection testimonies={testimonies} />
      </main>

      <Footer />
    </div>
  );
}
