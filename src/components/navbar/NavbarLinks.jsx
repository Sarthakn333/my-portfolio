import { Link } from "react-scroll";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex xl:flex-row max-lg:flex-col gap-6 text-white font-body 
        xl:relative max-lg:absolute max-lg:top-[100%] max-lg:left-0 items-center
        max-lg:w-full max-lg:bg-cyan/30 backdrop-blur-lg xl:bg-black py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
        <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
            {link.link}
        </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
