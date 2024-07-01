import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ravi.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a budding software developer from IIT Kharagpur (2024 Batch), skilled in web technologies such as JavaScript, React.js, and Node.js. My experience includes internships at YHills and RShift, where I built dynamic e-commerce platforms and optimized software solutions, boosting efficiency by 30%. A problem-solver at heart, I've also excelled in coding challenges on GeeksforGeeks. Connect with me on <a href="https://www.linkedin.com/in/ravi-raj-meena-65a251194/" target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>LinkedIn</a> or explore my projects on <a href="https://github.com/Balerion769" target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>GitHub</a>.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Pic.png"
          />
        </div>
      </div>
    </section>
  );
}