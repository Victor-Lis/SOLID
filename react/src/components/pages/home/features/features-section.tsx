
import type { Feature } from "../../../../_types/features/Feature";
import { FeatureCard } from "./feature-card";

type FeaturesSectionProps = {
  features: Pick<Feature, "icon" | "title" | "description">[];
};

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section id="features" className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Por que nos escolher?
          </h2>
          <p className="text-slate-400 mt-2">
            Aqui estão alguns motivos pelos quais a nossa solução se destaca.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
