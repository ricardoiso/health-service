import React from 'react';

function SearchBar() {
  return(
    <div className='mx-28'> 
        <input type="text" id="findInput" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder:text-center placeholder-gray-400 shadow-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="¿Qué buscas?"/>
    </div>
  )
}

export default SearchBar; 
