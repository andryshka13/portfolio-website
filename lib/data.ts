import carRentalImg from "@/public/CarRental.png";
import eatTastyImg from "@/public/EatTasty.png";
import nikeLandingImg from "@/public/NikeLandingPage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "RentalCar",
    description:
      "Car rental site, where you can check price and information about different type of cars. I take the data from rapidAPI.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: carRentalImg,
    link: "https://rental-car-psi.vercel.app/",
  },
  {
    title: "EatTasty",
    description:
      "Recipe site, where I used the Meal DB API to get the data. You can find a different recipes with image and details how to cook the dish.",
    tags: ["React", "JavaScript", "Tailwind", "Redux"],
    imageUrl: eatTastyImg,
    link: "https://eat-tasty.vercel.app/",
  },
  {
    title: "Nike Summer Collection",
    description:
      "Web page that show summer collection from Nike, with simple functionality and animation. ",
    tags: ["React", "Tailwind", "JavaScript"],
    imageUrl: nikeLandingImg,
    link: "https://nike-summer-collection.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Redux",
  "Axios",
  "Framer Motion",
] as const;
