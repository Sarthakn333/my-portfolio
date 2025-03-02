import SingleExperience from "./SingleExperience";
// import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants"

const experiences = [
  {
    job: "Senior Frontend Developer",
    company: "Accenture",
    date: "2021 - Present",
    responsibilities: [
      "Develop Responsive User Interfaces: Implement UI designs, ensuring cross-browser and cross-device compatibility.",
      "Build Interactive Components: Create dynamic web elements using modern JavaScript frameworks (React.js, Vue.js, or similar).",
      "Integrate with Backend APIs: Consume RESTful APIs to fetch and display data, enabling seamless user interactions.",
      "Performance Optimization: Analyze and optimize frontend code for performance and user experience.",
      "Maintain and Refactor Code: Improve existing code for scalability and maintainability.",
      "Participate in Code Reviews: Collaborate with other developers, providing code reviews and accepting feedback to ensure quality."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row flex-col w-full justify-center">
      {experiences.map((experience, index) => {
        return (
          <>
          <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
            <SingleExperience key={index} experience={experience} />
            </motion.div>
            {/* {index < 2 ? (
              
                <FaArrowRightLong className="text-6xl text-orange lg:block hidden" />
            
            ) : (
              ""
            )} */}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;