import TestimonialsCard from "./components/testimonials-card";
import { TestimonyType } from "@/_types/testimony/Testimony";

type TestimonialsSectionProps = {
  testimonies: TestimonyType[];
};

export default function TestimonialsSection({ testimonies }: TestimonialsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">
        O Que Dizem Nossos Clientes
      </h2>
      <div className="space-y-8">
        {testimonies.map((t) => (
          <TestimonialsCard key={t.id} {...t} />
        ))}
      </div>
    </section>
  );
}
