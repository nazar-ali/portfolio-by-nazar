import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skill";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Resume from "./component/Resume";
import Contact from "./component/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />

      {activePage === "home" && <Hero />}
      {/* {activePage === "about" && <About />} */}
      {activePage === "skills" && <Skills />}
      {activePage === "projects" && <Projects />}
      {activePage === "resume" && <Resume />}
      {activePage === "contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;