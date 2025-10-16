import React, { useState, useCallback, useEffect } from "react";
import DarkMoodButton from "./DarkMoodButton.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";
import mariamLogo from "../assets/logo.png";
import mariamPhoto from "../assets/mariam.png";
import "./Header.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import htmlicon from "../assets/htmlIcon.png";
import cssicon from "../assets/cssIcon.png";
import editoricon from "../assets/idetorIcon.png";
import jsicon from "../assets/jsIcon.png";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [activeLink, setActiveLink] = useState("#");

  const links = [
    { name: "Home", href: "#" },
    { name: "About me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact me", href: "#contactme" },
  ];

  const codeString = `
  <body>  
  <p>
Front-End Developer 
I design and build modern,
responsive, and user-centered
web interfaces that bring ideas to life
  </p>
  </body>`;

  return (
    <>
       <Navbar className="bg-[#fcd5ce65] shadow-rose-100 shadow-lg sticky top-0 z-50 dark:bg-[#121212] dark:shadow-gray-950">
        <NavbarBrand>
          <img src={mariamLogo} className="h-15 rounded-full" alt="Logo" />
        </NavbarBrand>
        <NavbarToggle className="block lg:hidden" />

        <NavbarCollapse>
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-lg font-poppins font-bold rounded transition-colors duration-300 my-1 md:my-0 md:py-0 ${
                activeLink === link.href ? "bg-[#f2afb1]" : "bg-transparent"
              } text-[#c01d4e] dark:text-white dark:hover:text-[#f2afb1]`}
              style={{
                padding: "2px 6px",
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link.href)
                  e.target.style.backgroundColor = "#f2afb1";
              }}
              onMouseLeave={(e) => {
                if (activeLink !== link.href)
                  e.target.style.backgroundColor = "transparent";
              }}
            >
              {link.name}
            </NavbarLink>
          ))}
          <DarkMoodButton />
        </NavbarCollapse>
      </Navbar>

      <header className="bg-[#fcd5ce4d] dark:bg-[#0a0a0a] relative h-screen   md:pt-[5px] lg:pt-[5px]  z-10 px-4 lg:px-0">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-center md:justify-around items-center">
    <Particles
  key={theme} 
  id="tsparticles"
  init={particlesInit}
  className="absolute top-0 left-0 w-full h-full -z-10"
  options={{
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 40 },
      color:
        theme === "dark"
          ? { value: ["#000000", "#333333", "#555555"] }
          : { value: ["#ffb6c1", "#fda085", "#9796f0"] },
      opacity: { value: 0.3, random: true },
      size: { value: 25, random: true },
      shape: { type: "circle" },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "out",
      },
      links: { enable: false },
    },
    detectRetina: true,
  }}
/>


          <img
            src={mariamPhoto}
            alt="my photo"
            className="w-[70%] md:w-[50%] sm:w-[75%] xl:w-[35%] xl:-top-[12%] lg:mx-0 order-1 lg:order-2 md:order-2 relative"
          />

            <div className="headerDescription w-100 z-10 text-center lg:mb-0 order-2 md:order-1">
            <p className="text-[50px] xl:font-extrabold xl:text-6xl lg:text-3xl mb-4 myname mt-5 font-extrabold text-[#c01d4e] dark:text-[#f2afb1]">
              My name is Mariam Mohamed
            </p>
            <SyntaxHighlighter
              language="html"
              style={oneDark}
              className="font-extrabold"
              customStyle={{
                margin: 0,
                fontSize: "18px",
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
              }}
            >
              {codeString}
            </SyntaxHighlighter>

            <div className="buttons grid grid-cols-1 mt-8 md:grid-cols-2 w-full justify-items-center">
              <button className="py-2 px-6 w-full md:w-auto rounded-2xl m-3 font-bold text-white bg-rose-900 hover:bg-white hover:text-rose-900 hover:border-2 dark:bg-[#f2afb1] dark:text-[#121212] dark:hover:bg-white transition-all duration-300 shadow-2xl shadow-rose-300 dark:shadow-amber-50 hover:scale-105">
                Get in touch
              </button>
              <button className="py-2 px-6 w-full md:w-auto rounded-2xl m-3 font-bold text-rose-900 border-2 border-rose-900 hover:bg-rose-900 hover:text-white dark:text-white dark:border-[#f2afb1] dark:hover:bg-[#f2afb1] dark:hover:text-[#121212] transition-all duration-300 shadow-2xl shadow-rose-200 dark:shadow-amber-50 hover:scale-105">
                See my work
              </button>
            </div>
          </div>

          <img
            src={htmlicon}
            className="icon w-[60px] absolute top-[14%] right-[5%] md:top-[10%] md:right-[5%] lg:top-[10%] lg:right-[37%] h-15 p-2 rounded-full border-b-rose-300 border-4 "
            alt=""
          />
          <img
            src={jsicon}
            className="icon w-[60px] absolute top-[40%] mb-40 left-[5%] md:top-[10%] md:left-[50%] lg:right-[10%] lg:top-[70%] h-15 p-2 rounded-full border-b-rose-300 border-4 "
            alt=""
          />
          <img
            src={cssicon}
            className="icon w-[60px] absolute bottom-[45%] right-[5%] md:bottom-[30%] md:right-[5%] h-15 p-2 lg:right-[10%] lg:top-40 rounded-full border-b-rose-300 border-4 "
            alt=""
          />
          <img
            src={editoricon}
            className="icon w-[60px] left-[5%] bottom-[75%] md:left-[50%] absolute lg:right-30 md:right-[35%] md:top-[65%] h-15 p-2 lg:top-[30%] rounded-full border-b-rose-300 border-4 "
            alt=""
          />
        </div>
      </header>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dark:hidden ">
        <path
          className="fill-[#fcd5ce65] dark:fill-[#0a0a0a] dark:hidden "
          fillOpacity="1"
          d="M0,128L26.7,149.3C53.3,171,107,213,160,234.7C213.3,256,267,256,320,245.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,149.3C693.3,171,747,245,800,277.3C853.3,309,907,299,960,256C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,160C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
