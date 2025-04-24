import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
function SocialNav() {
  return (
    <nav>
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4 text-gray-400">
        <a href="#" className="hover:text-white text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-white text-xl">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-white text-xl">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default SocialNav;
