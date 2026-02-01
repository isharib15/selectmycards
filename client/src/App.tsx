import { Switch, Route } from "wouter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Footer from "./components/Footer";
import About from "./components/About";
import Legal from "./pages/Legal";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

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
          <Route path="/blog" component={BlogList} />
          <Route path="/blog/:id" component={BlogPost} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
