import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-12 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-rose-600 mx-auto my-4 dark:bg-gray-900"></div>
          <p className="text-gray-600 dark:text-white">
            I'd love to hear from you! Feel free to send me a message
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-50 dark:bg-[#0a0a0a] dark:text-white p-6 rounded-lg shadow-md"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full mb-4 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 border-0 bg-rose-200 dark:bg-gray-800"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full mb-4 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 border-0 bg-rose-200 dark:bg-gray-800"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full mb-4 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 border-0 bg-rose-200 dark:bg-gray-800"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full mb-4 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 border-0 bg-rose-200 dark:bg-gray-800"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-rose-800 text-white font-semibold rounded-md hover:bg-rose-700 transition-all duration-500 shadow-lg hover:shadow-rose-400"
              >
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </form>
          </div>

          <div
            className="flex flex-col justify-center bg-gradient-to-r from-rose-300 via-rose-200 to-amber-50 shadow-[10px_10px_100px_10px_rgba(0,0,0,0.9)] dark:shadow-gray-900 shadow-rose-300 p-6 rounded-lg text-gray-900 dark:text-white dark:from-gray-800 dark:via-gray-950 dark:to-black"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold mb-4 myname text-rose-900">my Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-rose-700 text-2xl  bg-rose-400 dark:bg-amber-100 rounded-full p-2"
                />
                <div>
                  <h4 className="font-bold text-rose-950 dark:text-gray-500">
                    Location
                  </h4>
                  <p className="text-gray-800 dark:text-white">
                    Alexandria, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-rose-700 text-2xl bg-rose-400 dark:bg-amber-100 rounded-full p-2"
                />
                <div>
                  <h4 className="font-bold text-rose-950 dark:text-gray-500">
                    Phone
                  </h4>
                  <p className="text-gray-800 dark:text-white">1111111</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-rose-700 text-2xl  bg-rose-400 dark:bg-amber-100 rounded-full p-2"
                />
                <div>
                  <h4 className="font-bold text-rose-950 dark:text-gray-500">
                    Email
                  </h4>
                  <p className="text-gray-800 dark:text-white">
                    marian@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 text-2xl">
              <a
                href="https://github.com/xx"
                target="_blank"
                className="text-gray-900 dark:text-gray-400 hover:text-rose-700 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/xx"
                target="_blank"
                className="text-gray-700 hover:text-rose-700 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="mailto:xx"
                className="text-gray-700 hover:text-rose-700 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-rose-500 dark:text-amber-300 text-xl hover:text-rose-700 transition-colors"
                />
              </a>
              <a
                href=""
                className="text-blue-700 hover:text-rose-700 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 border-t border-gray-200 pt-6">
        <div className="text-center text-gray-600">
          © Copyright <strong className="text-rose-700">Mariam Mohamed</strong>.
          All Rights Reserved
        </div>
      </footer>
    </section>
  );
};

export default Contact;
