import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-section py-12 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-8 md:px-4">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
            <div className="line mx-auto my-4 w-16 h-1 bg-rose-800 dark:bg-gray-700"></div>
            <p className="lead text-gray-600 mt-2 dark:text-white">
              Technologies and tools I use to create amazing web experiences
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            <div className=" px-4">
              <div
                className="education-card dark:bg-black mb-3 bg-white p-6 rounded-lg shadow-md hover:transform  transition-all  duration-400 ease-in-out hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="education-icon flex justify-center mb-4">
                  <i className="fas fa-book text-4xl text-rose-600"></i>
                </div>
                <h4 className="text-2xl font-semibold text-rose-800 mb-2">
                  Front-End Web Development
                </h4>
                <span className="institute block font-bold text-gray-800 mb-1 dark:text-gray-400">
                  I create clean, responsive, and user-friendly websites using
                  HTML, CSS, and JavaScript. I focus on building visually
                  appealing layouts and smooth interactions that deliver great
                  user experiences.
                </span>
              </div>
            </div>
            <div className="px-4">
              <div
                className="education-card dark:bg-black bg-white p-6 rounded-lg shadow-md hover:transform  transition-all  duration-400 ease-in-out hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4 className="text-2xl font-semibold text-rose-800 mb-2 ">
                  Website Optimization & Performance
                </h4>
                <span className="institute block text-gray-800 mb-1 font-bold dark:text-gray-400">
                  I improve website performance by optimizing code, images, and
                  structure. Faster loading, better SEO, and smoother user
                  experience across all devices.
                </span>
                <p className="text-gray-700"></p>
              </div>
            </div>
            <div className="px-4">
              <div
                className="education-card dark:bg-black bg-white p-6 rounded-lg shadow-md hover:transform  transition-all  duration-400 ease-in-out hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4 className="text-2xl font-semibold text-rose-800 mb-2 ">
                  Custom Web Features & Interactivity
                </h4>
                <span className="institute block text-gray-800 mb-1 font-bold dark:text-gray-400">
                  I build custom JavaScript features such as sliders, forms,
                  pop-ups, and animations to make websites more dynamic,
                  interactive, and engaging for users.
                </span>
                <p className="text-gray-700"></p>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Skills;
