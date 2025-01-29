import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiFirebase, SiNextdotjs, SiTailwindcss, SiPython, SiTensorflow } from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Javascript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-black text-4xl" /> },
  { name: "Node", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "Github", icon: <FaGithub className="text-gray-500 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-gray-700 text-4xl" /> },
  { name: "Tensorflow", icon: <SiTensorflow className="text-black text-4xl" /> },
  { name: "Microsoft Azure", icon: <TfiMicrosoftAlt className="text-blue-800 text-4xl" /> },
];

function Skills({ id }: { id: string }) {
  return (
    <div className="p-8 bg-gray-100" id={id}> {/* Applied light grey background */}
      <p className="text-black text-xl font-semibold mb-4">Skills</p>
      <h2 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-3xl font-bold mb-6">
  What I can do
</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:bg-green-100 hover:scale-105 transform transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
