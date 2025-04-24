import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="font-semibold pt-2 text-slate-700">
        <li className="inline-block hover:bg-[#373d42] px-2 py-2 rounded-md hover:shadow-sm hover:text-white mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="inline-block hover:bg-[#373d42] px-2 py-2 rounded-md hover:shadow-sm hover:text-white">
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
