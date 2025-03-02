import { motion } from "framer-motion";
 import { fadeIn } from "../../components/framerMotion/variants"

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center text-center">
     <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
        <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-6xl text-orange font-bold uppercase"
      >
       Sarthak <br className="hidden sm:hidden md:block" />
        Gupta
      </motion.h1>
    <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A passionate Frontend Developer with 4 years of experience, crafting seamless <br />user experiences and building scalable web applications.
      </motion.p>
    </div>
  );
};

export default HeroText;