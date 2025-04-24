import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li>
          <Link className="hover:text-white">About Us</Link>
        </li>
        <li>
          <Link className="hover:text-white">Contact</Link>
        </li>
        <li>
          <Link className="hover:text-white">Blog</Link>
        </li>
        <li>
          <Link className="hover:text-white">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
