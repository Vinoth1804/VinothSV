import React from "react";

function About({ id }: { id: string }) {
  return (
    <div id={id} className="p-8  bg-gray-100 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <p className="text-green-500 text-xl font-semibold">ABOUT</p>
        <h2 className="text-4xl font-bold mt-2">Who I am</h2>
        <p className="text-gray-500 italic"> I am currently a Master student doing Blockchain</p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Technology has always been at the heart of my aspirations. I honed my skills in JavaScript, Python, and blockchain, enabling me to develop scalable and innovative solutions. During my career,
          I’ve gained valuable experience designing and developing PDF systems for an insurance platform,
          creating COVID-19 test booking systems, and building a decentralized medical report sharing platform
          using Ethereum smart contracts. Each project has been a step towards bridging the gap between creativity and
          functionality, ensuring my work delivers meaningful impact.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Driven by the belief that technology can be a force for good, I constantly seek opportunities to learn and grow. My expertise also extends to building blockchain-powered solutions, data-driven systems, and decentralized applications. With a strong foundation in software engineering and a passion for exploring cutting-edge technologies, I am committed to making a difference in society.
          Let’s connect and collaborate to transform bold ideas into impactful realities!
        </p>

        <a href="https://github.com/Vinoth1804/" className="text-blue-500 font-semibold mt-4 inline-block hover:underline">
          Check out some of my latest projects
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="ml-auto md:w-1/3 flex justify-center">
        <img 
          src="/bit.jpg"  // Replace with actual image path
          alt="Laptop with glowing colors"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
}

export default About;
