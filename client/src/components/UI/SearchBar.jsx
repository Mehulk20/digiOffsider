import Button from "./shared/Button";

function SearchBar() {
  return (
    <div className="flex justify-center items-center py-2 w-full px-2">
      <form className="w-full max-w-xl flex gap-2">
        <input
          type="text"
          placeholder="Search for something..."
          className="w-full p-2 text-lg rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none pl-3"
        />
        <Button>search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
