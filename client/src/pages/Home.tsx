import Hero from "../components/Hero";
import Selector from "../components/Selector";
import ValueProposition from "../components/ValueProposition";
import About from "../components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <section className="relative py-20 px-4">
        {/* Background Glow for Glassmorphism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/30 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto">
          <Selector />
        </div>
      </section>
      <ValueProposition />
      <About />
    </main>
  );
}
 