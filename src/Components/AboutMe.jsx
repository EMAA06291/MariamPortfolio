import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function AboutMe() {
  const codeString = `
  <body>  
  <p>
Hello, here is me Mariam Mohamed a passionate MIS student
 with a growing interest in Front-End Development.
  I love exploring new ways to build creative and user-friendly web experiences.
   I’m someone who believes in hard work, 
   learning through challenges and trusting the process 
   even when things aren’t perfect yet.
Beyond programming, I enjoy developing myself
 in different areas because I believe growth comes from staying
  curious and open to learning. My goal is to keep improving,
   one step at a time and create something meaningful along the way.
  </p>
  </body>`;
  return (
    
    <section id="about" className="py-20 overflow-x-hidden dark:bg-[#0a0a0a]">
   
      <div className="container mx-auto px-4 pt-50 lg:pt-0 max-w-6xl ">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-rose-800 mx-auto mt-4 rounded-full dark:bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div data-aos="fade-right">
            <div
              id="red-cart"
              className="bg-white  rounded-2xl shadow-md p-8 border-t-4 border-rose-700 dark:bg-[black]"
            >
              <h3 className="mb-6 text-2xl font-extrabold text-rose-800">
                Hello! This's me
              </h3>
              <p className="text-white font-extralight ">
                <SyntaxHighlighter
                  language="html"
                  style={oneDark}
                  className=" font-extrabold"
                  customStyle={{
                    margin: 0,
                    fontSize: "18px",
                    backgroundColor: "black",
                    borderRadius: "8px",
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </p>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-md p-8 dark:bg-black">
              <h3 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                My Skills
              </h3>

              {[
                { name: "HTML/CSS", value: 95 },
                { name: "JavaScript", value: 90 },
                { name: "bootstrap", value: 85 },
                { name: "tailwind", value: 80 },
                { name: "jquery", value: 70 },
              ].map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 font-medium dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 font-semibold dark:text-white ">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 ">
                    <div
                      className="bg-rose-800 h-3 rounded-full transition-all duration-700 "
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
