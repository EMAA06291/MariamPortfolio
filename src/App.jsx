import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <AboutMe />
      <Education/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;
