import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import About from "../components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <ValueProposition />
      <About />
    </main>
  );
}
