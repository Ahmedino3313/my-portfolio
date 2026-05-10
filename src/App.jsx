import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [active, setActive] = useState("");
  
  return (
    <div style={{ minHeight: "100vh", background: "#080812"}}>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;