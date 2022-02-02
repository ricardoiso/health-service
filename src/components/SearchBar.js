import React from 'react';

function SearchBar() {
  return(
    <div> 
      <input className="md rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter Post Title"/>
    </div>
  )
}

export default SearchBar; 
