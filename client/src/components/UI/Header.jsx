import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import logo from "../../assets/digiOffsiderLogo.png";
function Header() {
  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="h-10 bg-cover max-w-16 pt-1">
          <img src={logo} alt="digiOffsider" />
        </div>
        <div className=" pt-1">
          <NavBar />
        </div>
      </div>
      <div className="mt-2">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
