import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <About />
      <Footer />
    </div>
  );
}

export default App;
