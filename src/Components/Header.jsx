import React, { useState, useEffect } from "react";
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

  const [activeLink, setActiveLink] = useState("#");

  const links = [
    { name: "Home", href: "#" },
    { name: "About me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact me", href: "#contact" },
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

  useEffect(() => {
    const container = document.querySelector(".bubbles-background");

    const createBubble = () => {
      const bubble = document.createElement("span");
      bubble.classList.add("bubble");
      const size = 10 + Math.random() * 40;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.background = `radial-gradient(circle, #f2afb1, #c01d4e)`;
      bubble.style.animationDuration = `${6 + Math.random() * 10}s`;
      bubble.style.opacity = 0.3;
      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), 16000);
    };

    const interval = setInterval(createBubble, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar
        className="!sticky !top-0 !z-[9999] !bg-[#fcd5ce65] shadow-rose-100 shadow-lg dark:!bg-[#121212] dark:shadow-gray-950"
        style={{ position: "sticky", top: 0, zIndex: 9999 }}
      >
        <NavbarBrand>
          <img src={mariamLogo} className="h-15 rounded-full" alt="Logo" />
        </NavbarBrand>
        <NavbarToggle className="block lg:hidden" />
        <NavbarCollapse>
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.href);
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-lg font-poppins font-bold rounded transition-all duration-300 my-1 md:my-0 md:py-0 px-2 no-underline
      ${
        activeLink === link.href
          ? "bg-[#f2afb1] text-[#c01d4e] dark:bg-[#f2afb1] dark:text-[#c01d4e]"
          : "text-[#c01d4e] hover:!bg-[#f2afb1] hover:!text-[#c01d4e] dark:!text-white dark:hover:!bg-[#2b2b2b] dark:hover:!text-[#f2afb1]"
      }`}
              style={{
                textDecoration: "none",
                outline: "none",
                transition: "all 0.3s ease",
                padding: "2px 4px",
              }}
              onFocus={(e) => e.target.blur()}
            >
              {link.name}
            </NavbarLink>
          ))}
          <DarkMoodButton />
        </NavbarCollapse>
      </Navbar>

      <header className="relative bg-[#fcd5ce4d] dark:bg-[#0a0a0a] h-screen md:pt-[5px] lg:pt-[5px] z-10 px-4 md:px-0 ">
        <div className="bubbles-background absolute inset-0 -z-10"></div>

        <div className="container px-8 mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center">
          <img
            src={mariamPhoto}
            alt="my photo"
            className="w-[70%] md:w-[50%] sm:w-[75%] xl:w-[35%] xl:-top-[12%] lg:mx-0 order-1 lg:order-2 md:order-2 relative"
          />
          <div className="headerDescription w-[100%] lg:w-[40%]  text-center lg:mb-0 order-2 md:order-1 overflow-hidden">
            <p className="text-[25px] xl:font-extrabold xl:text-6xl lg:text-3xl mb-4 myname mt-5 font-extrabold text-[#c01d4e] dark:text-[#f2afb1]">
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
  <a
    href="#contact"
    className="py-2 px-6 w-full md:w-auto rounded-2xl m-3 font-bold text-white bg-rose-900 
               hover:bg-white hover:text-rose-900 border-2 border-transparent 
               dark:bg-[#f2afb1] dark:text-[#121212] dark:hover:bg-white 
               transition-all duration-300 
               shadow-2xl shadow-rose-300 dark:shadow-[0_0_15px_0px_rgba(242,171,170,0.15)]  
               hover:scale-105 flex items-center justify-center gap-2 group"
  >
    <lord-icon
      src="https://cdn.lordicon.com/hpivxauj.json"
      trigger="hover"
      colors="primary:#ffffff,secondary:#f2afb1"
      style={{
        width: "28px",
        height: "28px",
        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))",
        transition: "all 0.3s ease",
      }}
      class="group-hover:brightness-110 group-hover:scale-110"
    ></lord-icon>
    Get in touch
  </a>

  <a
    href="#projects"
    className="py-2 px-6 w-full md:w-auto rounded-2xl m-3 font-bold text-rose-900 border-2 border-rose-900 
               hover:bg-rose-900 hover:text-white 
               dark:text-white dark:border-[#f2afb1] dark:hover:bg-[#f2afb1] dark:hover:text-[#121212] 
               transition-all duration-300 
               shadow-2xl shadow-rose-200 dark:shadow-[0_0_15px_0px_rgba(242,171,170,0.15)] 
               hover:scale-105 flex items-center justify-center gap-2 group"
  >
    <lord-icon
      src="https://cdn.lordicon.com/zpxybbhl.json"
      trigger="hover"
      colors="primary:#c01d4e,secondary:#f2afb1"
      style={{
        width: "28px",
        height: "28px",
        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))",
        transition: "all 0.3s ease",
      }}
      class="group-hover:brightness-110 group-hover:scale-110"
    ></lord-icon>
    See my work
  </a>
</div>

          </div>
          <img
            src={htmlicon}
            className="icon w-[40px] md:w-[60px] absolute top-[5%] right-[5%] md:top-[10%] md:right-[5%] lg:top-[10%] lg:right-[37%] h-10 md:h-15 p-1 rounded-full border-b-rose-300 border-4"
            alt=""
          />
          <img
            src={jsicon}
            className="icon w-[40px] md:w-[60px]  absolute top-[30%] mb-40 left-[5%] md:top-[10%] md:left-[50%] lg:right-[10%] lg:top-[70%] h-10 md:h-15 p-1 rounded-full border-b-rose-300 border-4"
            alt=""
          />
          <img
            src={cssicon}
            className="icon w-[40px] md:w-[60px]  absolute bottom-[65%] right-[5%] md:bottom-[60%] md:right-[5%] h-10 md:h-15 p-1 lg:right-[10%] lg:top-40 rounded-full border-b-rose-300 border-4"
            alt=""
          />
          <img
            src={editoricon}
            className="icon w-[40px] md:w-[60px]  left-[5%] bottom-[85%] md:left-[50%] absolute lg:right-30 md:right-[35%] md:top-[35%] h-10 md:h-15 p-1 lg:top-[30%] rounded-full border-b-rose-300 border-4"
            alt=""
          />
        </div>
      </header>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="dark:hidden"
      >
        <path
          className="fill-[#fcd5ce65] dark:fill-[#0a0a0a] dark:hidden"
          fillOpacity="1"
          d="M0,128L26.7,149.3C53.3,171,107,213,160,234.7C213.3,256,267,256,320,245.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,149.3C693.3,171,747,245,800,277.3C853.3,309,907,299,960,256C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,160C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L0,0Z"
        />
      </svg>
    </>
  );
};

export default Header;
