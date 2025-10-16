import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Education from './Components/Education.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';
import Portfolio from './Components/Portfolio.jsx';
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
