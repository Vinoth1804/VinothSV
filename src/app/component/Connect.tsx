import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Connect({ id }: { id: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_sggkq97"; // Replace with your EmailJS Service ID
    const templateID = "template_7ndy5bd"; // Replace with your EmailJS Template ID
    const publicKey = "nmNpjvFGdN4-_qgGP"; // Replace with your EmailJS Public Key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000); // Reset after 5 sec
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 p-6"
    id={id}>
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center">Let&apos;s Connect!</h2>
        <p className="text-gray-300 text-center mt-2">Have a question or want to collaborate?</p>

        {isSent && <p className="text-green-400 text-center mt-4">✅ Message Sent Successfully!</p>}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-gradient-to-r from-green-600 to-blue-300  text-white font-semibold rounded-lg  transition-transform transform hover:scale-105"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/Vinoth1804" target="_blank" className="text-white text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/vinothkumar-mohanraj" target="_blank" className="text-white text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default Connect;
