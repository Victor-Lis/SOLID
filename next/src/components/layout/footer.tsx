export default function Footer() {
  return (
    <footer className="bg-zinc-950/50 mt-16 border-t border-zinc-800">
      <div className="container mx-auto px-6 py-8 text-center text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Cantinho do Café. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
