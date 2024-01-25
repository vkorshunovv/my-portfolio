import "./App.css";
import PageLayout from "./components/PageLayout";
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-slate-300">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
