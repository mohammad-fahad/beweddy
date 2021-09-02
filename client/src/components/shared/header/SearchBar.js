import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  return (
    <div className='relative flex-1'>
      <input
        type='text'
        className='w-full py-2 px-5 border border-primary border-r-0 rounded-r-none rounded-md text-base font-inter font-normal placeholder-primary focus:ring-0 focus:border-primary'
        placeholder='Find a couple'
      />
      <button className='absolute bg-primary text-white hover:bg-white hover:text-primary -right-2 top-0 bottom-0 border-2 border-primary rounded-md py-3 px-5 transition-colors duration-300 flex items-center justify-center'>
        <SearchIcon className='w-6 h-6' />
      </button>
    </div>
  );
};

export default SearchBar;
