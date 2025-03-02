import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sarthak-gupta-b8a836172/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sarthakn333" Icon={FiGithub} />
   
    </div>
  );
};

export default ContactSocial;