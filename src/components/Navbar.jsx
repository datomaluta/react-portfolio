import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-3xl">DM</div>
      <div className="my-8 ml-8 flex items-center justify-center gap-4 ">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/davit-malutashvili-14b2691a4/"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a target="_blank" href="https://github.com/datomaluta">
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
