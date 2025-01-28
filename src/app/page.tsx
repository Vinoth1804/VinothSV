"use client"

import About from "./component/About";
import Connect from "./component/Connect";
import Header from "./component/Header";
import Main  from "./component/Main";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Main id="home" /> {/* Adding the id for Main */}
      <Skills id="skills" /> {/* Adding the id for Skills */}
      <Projects id="projects" /> {/* Adding the id for Projects */}
      <About id="about" /> {/* Adding the id for About */}
      <Connect id="contact" /> {/* Adding the id for Connect */}
    </>
  );
}
