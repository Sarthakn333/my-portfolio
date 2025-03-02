import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
 import { fadeIn } from "../../components/framerMotion/variants"

const projects = [
  {
    name: "ShopEase",
    year: "Jun2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://e-commerce-testt.netlify.app/",
  },
  {
    name: "Tomato Food Dine",
    year: "Apr2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://tomatofooddine.netlify.app/",
  },
  {
    name: "Tech News Reader",
    year: "Feb2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://tech-news-reader.netlify.app/",
  },
  {
    name: "Movie Search",
    year: "Jan2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://easy-movie-search.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
    <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
        </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;