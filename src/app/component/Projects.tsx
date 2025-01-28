import React from "react";

const projects = [
  {
    name: "Weather App",
    image: "/image4.jpg",
  },
  {
    name: "EHR Blockchain App",
    image: "/image.jpg",
  },
  {
    name: "Blockchain Based KYC",
    image: "/image2.jpg",
  },
  {
    name: "COVID-19 APP",
    image: "/image1.jpg",
  },
];

function Projects({id}) {
  return (
    <div className="p-8 bg-gradient-to-r from-teal-400 to-cyan-500" id={id}>
      <p className="text-white text-xl font-semibold mb-2">PROJECTS</p>
      <h2 className="text-3xl text-white font-bold mb-6">What I Built</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Project Title */}
            <h3 className="absolute top-4 left-4 text-white text-xl font-semibold z-10">{project.name}</h3>

            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-lg">
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80"
              />

              {/* Overlay with Clickable "More Info" */}
              <a
                href="https://github.com/Vinoth1804"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
              >
                <p className="text-white text-lg font-medium">More Info</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
