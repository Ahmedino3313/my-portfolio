import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "journey", "services", "testimonials", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If at the top no active link
      if (scrollY < 100) {
        setActive("");
        return;
      }

      // Find which section is currently in view
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop - 100;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  
  return (
    <div style={{ minHeight: "100vh", background: "#080812"}}>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;