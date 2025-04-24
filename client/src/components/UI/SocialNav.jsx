import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function SocialNav() {
  return (
    <nav>
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4 text-gray-400">
        <Link className="hover:text-white text-xl">
          <FaTwitter />
        </Link>
        <Link className="hover:text-white text-xl">
          <FaLinkedin />
        </Link>
        <Link className="hover:text-white text-xl">
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
}

export default SocialNav;
