import { Switch, Route } from "wouter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Footer from "./components/Footer";
import About from "./components/About";
import Legal from "./pages/Legal";

function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <About />
    </>
  );
}

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
