import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Selector from './components/Selector';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <Hero />
      <Selector />
      <ValueProposition />
      <Footer />
    </div>
  );
}

export default App;
