import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skill";
import Footer from "./component/Footer";
import Projects from "./component/Projects";


function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />

      {activePage === "home" && <Hero />}
      {/* {activePage === "about" && <About />} */}
      {activePage === "skills" && <Skills />}
      {activePage === "projects" && <Projects />}
      {/* {activePage === "contact" && <Contact />} */}
      <Footer />
    </>
  );
}

export default App;