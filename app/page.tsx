import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
}
