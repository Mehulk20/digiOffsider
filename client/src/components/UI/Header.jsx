import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import logo from "../../assets/digiOffsiderLogo.png";
function Header() {
  return (
    <header className="bg-[#FDFAF6] sticky top-0 z-50 font-fontHeader">
      <div className="max-w-6x mx-auto flex items-center justify-between px-3">
        <div className="h-10 bg-cover max-w-16 pt-1">
          <img src={logo} alt="digiOffsider" />
        </div>
        <div className=" pt-1">
          <NavBar />
        </div>
      </div>
      <div className="mt-2 bg-[#282A3A]">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
