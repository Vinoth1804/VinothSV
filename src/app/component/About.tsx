import React from "react";
import Image from "next/image";

function About({ id }: { id: string }) {
  return (
    <div id={id} className="p-8 bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-black text-xl font-semibold tracking-widest">ABOUT</p>
        <h2 className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Who I am
        </h2>
        <p className="text-gray-600 italic text-lg">
      I&apos;m currently a Master student specializing in Blockchain Technology.</p>

        <p className="text-gray-700 leading-relaxed">
          Technology has always been at the heart of my aspirations. I honed my skills in JavaScript, Python, and blockchain, enabling me to develop scalable and innovative solutions. During my career,
          I’ve gained valuable experience designing and developing PDF systems for an insurance platform,
          creating COVID-19 test booking systems, and building a decentralized medical report sharing platform
          using Ethereum smart contracts. Each project has been a step towards bridging the gap between creativity and
          functionality, ensuring my work delivers meaningful impact.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Driven by the belief that technology can be a force for good, I constantly seek opportunities to learn and grow. My expertise also extends to building blockchain-powered solutions, data-driven systems, and decentralized applications. With a strong foundation in software engineering and a passion for exploring cutting-edge technologies, I am committed to making a difference in society.
          Let’s connect and collaborate to transform bold ideas into impactful realities!
        </p>

        <a
          href="https://github.com/Vinoth1804/"
          className="inline-block px-6 py-3 mt-4 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
        >
          Check out some of my latest projects
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 relative">
        <div className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/bit.jpg"  // Replace with actual image path
            alt="Laptop with glowing colors"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 blur-2xl opacity-30 rounded-lg z-0"></div>
      </div>
    </div>
  );
}

export default About;