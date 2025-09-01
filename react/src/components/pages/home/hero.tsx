import { Button } from "../../ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
        Construa o Futuro com React
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
        Uma landing page simples, moderna e performática criada com React e
        Tailwind CSS, seguindo as melhores práticas de desenvolvimento.
      </p>
      <Button onClick={() => alert("Botão clicado!")}>Saiba Mais</Button>
    </section>
  );
}
