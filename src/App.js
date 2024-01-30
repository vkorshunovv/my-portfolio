import "./App.css"
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-slate-300">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
