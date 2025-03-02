/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants"

// eslint-disable-next-line react/prop-types
const SingleExperience = ({ experience }) => {
  return (
    <motion.div
    variants={fadeIn("right", 0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className=" sm:h-auto w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
  >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
      </motion.div>
  );
};

export default SingleExperience;