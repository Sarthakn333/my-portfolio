import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
      I’m Sarthak , a Frontend Developer with 4 years of experience—long enough to know that nothing stays the same in web development for more than five minutes. I specialize in React, Redux, TypeScript, and a whole stack of tools that make the web faster, prettier, and occasionally frustrating. Writing clean, maintainable code is my thing until I revisit it months later and wonder what past-me was thinking. I thrive on creating smooth UIs, optimizing performance, and, of course, debugging the ‘mysteries’ that come with web development. If there’s a better way to do something, I’ll find it—or at least pretend I knew it all along!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="projects">
          My Projects
      </Link>
      </button>’
    </div>
  );
};

export default AboutMeText;