import React from "react";
import uni from "../assets/uni.png";
const EducationSection = () => {
  return (
    <>
    <section id="education" className="education-section py-12 bg-[#fcd5ce65] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-8 md:px-4">
        <div className="section-title text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800  dark:text-white">Education</h2>
          <div className="line mx-auto my-4 w-16 h-1 bg-rose-800 dark:bg-gray-700" ></div>
          <p className="lead text-gray-600 mt-2  dark:text-white">
            My academic background and qualifications
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">

          <div className="lg:order-1 order-2 px-4">
            <div
              className="education-card mb-3 dark:bg-black bg-white p-6 rounded-lg shadow-md hover:transform  transition-all  duration-400 ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
            
              <h4 className="text-2xl font-semibold text-rose-800 mb-2 ">
                Bachelor of Business , Management Information Systems
              </h4>
              <span className="institute block font-bold text-gray-800 mb-1 dark:text-gray-300">
                Alexandria University - Management Information Systems (MIS)
                Department
              </span>
              <span className="date block text-gray-500 mb-1">
                Expected Graduation: 2026
              </span>
              <p className="text-gray-700 dark:text-gray-300">
                I'm currently working towards my Bachelor's degree in Management
                Information Systems, blending business insights with technical
                skills to develop impactful digital solutions.
              </p>
            </div>
            <div
              className="education-card dark:bg-black bg-white p-6 rounded-lg shadow-md hover:transform  transition-all  duration-400 ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
            
              <h4 className="text-2xl font-semibold text-rose-800 mb-2 ">
                courses
              </h4>
              <span className="institute block text-gray-800 mb-1 font-bold dark:text-gray-300">
                Front-End devolpment course at Route academy
              </span>
              <span className="date block text-gray-500 mb-1">2025</span>
              <p className="text-gray-700"></p>
            </div>
          </div>
          <div className="lg:order-2 order-1 px-4">
            <div className=" p-6 rounded-lg shadow-md flex items-center justify-center h-full">
              <img
                src={uni}
                alt="alexandria uni image"
                className="w-full  rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="#"
            className="py-1 px-4 w-full  dark:shadow-gray-300 dark:shadow-2xl md:w-auto border-3 border-rose-900 rounded-2xl m-5 text-white bg-rose-800 hover:bg-white  hover:transform hover:scale-105 hover:text-rose-800 transition-all duration-400 font-bold   shadow-rose-500 shadow "
            id="downloadCV1"
          >
            <i className="fas fa-download mr-2"></i>
            Download My CV
          </a>
        </div>
      </div>
    </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dark:hidden">
        <path
          className="fill-[#fcd5ce65] dark:fill-[#0a0a0a] "
          fillOpacity="1"
          d="M0,128L26.7,149.3C53.3,171,107,213,160,234.7C213.3,256,267,256,320,245.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,149.3C693.3,171,747,245,800,277.3C853.3,309,907,299,960,256C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,160C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
      </>
  );
};

export default EducationSection;
