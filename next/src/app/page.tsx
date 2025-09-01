"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SpecialOfferSection from "@/components/sections/special-offer/special-offer-section";
import SuggestionsSection from "@/components/sections/suggestions/suggestions-section";
import TestimonialsSection from "@/components/sections/testimonials/testimonials-section";
import { useGetAllCoffees } from "@/hooks/coffe/use-get-all";
import { useGetSpecialCoffee } from "@/hooks/coffe/use-get-special";
import { useGetAllTestimonies } from "@/hooks/testimony/use-get-all";

export default function HomePage() {
  const { specialCoffee } = useGetSpecialCoffee();
  const { coffees } = useGetAllCoffees();
  const { testimonies } = useGetAllTestimonies();

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
