import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = () => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        className="w-full px-5 py-2 text-base font-normal border border-r-0 rounded-md rounded-r-none border-primary font-inter placeholder-primary focus:ring-0 focus:border-primary"
        placeholder="Find a couple"
      />
      <button className="absolute top-0 bottom-0 flex items-center justify-center px-5 py-3 text-white transition-colors duration-300 border-2 rounded-md bg-primary hover:bg-white hover:text-primary -right-2 border-primary">
        <SearchIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
