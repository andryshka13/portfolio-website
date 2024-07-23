"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/MyPhoto.jpg"
              width={192}
              height={192}
              alt="avatar"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] shadow-xl border-white"
            />
          </motion.div>

          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-2xl"
          >
            🙋‍♂️
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
      >
        <span className="font-bold">Hi, I'm Andrii,</span> a hardworking and
        passionate
        <br /> <span className="font-bold">front-end developer.</span> I enjoy
        building websites and apps.{" "}
        <span className="underline">I'm focused on React,</span> but open to
        learning new technologies.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group w-[198.5px] bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV_Andrii_Kerekeza.pdf"
          className="group w-[] bg-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none hover:scale-110 active:scale-105 transition border 
          dark:bg-white/10 dark:border-0 dark:text-white/90"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition " />
        </a>
        <a
          href="https://www.linkedin.com/in/andrii-kerekeza-779118205/"
          className="bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full
          hover:scale-110 active:scale-105 transition border dark:bg-white/10 dark:border-0 dark:text-white/90"
        >
          <BsLinkedin className="group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://github.com/andryshka13"
          className="bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full
          hover:scale-110 active:scale-105 transition border dark:bg-white/10 dark:border-0 dark:text-white/90"
        >
          <FaGithub className="group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
