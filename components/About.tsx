"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="nm-28 max-w-[45rem] text-center leading-8 sm:mb-40 
      scroll-mt-28"
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Physics</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">front-end development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, and Tailwind CSS.</span>I
        am also familiar with TypeScript and always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        sports games, watching movies, and playing with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
