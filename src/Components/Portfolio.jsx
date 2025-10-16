import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import proj1 from "../assets/photo_2025-10-13_19-08-15.jpg";
import proj2 from "../assets/bootstrap.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce",
      tech: "HTML, CSS, JavaScript",
      image: proj1,
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Portfolio using Bootstrap",
      tech: "HTML, CSS, Bootstrap",
      image: proj2,
      github: "#",
      live: "#",
    },
  ];

  return (
    <>
      <section id="portfolio" className=" py-12 bg-[#fcd5ce65] dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Portfolio</h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto my-4"></div>
            <p className="text-gray-600 dark:text-white">Check out some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group dark:bg-black bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105"
                data-aos="fade-up"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 bg-[#fcd5cedc]  bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-6 text-white text-3xl">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-500 transition-transform transform hover:-translate-y-1"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-500 transition-transform transform hover:-translate-y-1"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h4 className="text-xl font-semibold text-rose-700">
                    {project.title}
                  </h4>
                  <p className="text-gray-600">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dark:hidden">
        <path
          className="fill-[#fcd5ce65] dark:fill-[#0a0a0a]"
          fillOpacity="1"
          d="M0,128L26.7,149.3C53.3,171,107,213,160,234.7C213.3,256,267,256,320,245.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,149.3C693.3,171,747,245,800,277.3C853.3,309,907,299,960,256C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,160C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Portfolio;
