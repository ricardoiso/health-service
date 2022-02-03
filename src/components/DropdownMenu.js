import React, { useState } from 'react';

export function DropdownMenu() {
  const [categorySelected, setCategorySelected] = useState();

  const categories = ['Medicamentos', 'Insumos', 'Doctores', 'Centros Médicos'];

    function toggleDropdown(){
        const dropdownContainer = document.getElementById('dropdownRightStart');
        dropdownContainer.classList.toggle('hidden');
        dropdownContainer.classList.toggle('flex');
    }


  return (
      <div className="text-left ml-28">
          <button id="dropdownRightStartButton" onClick={toggleDropdown} data-dropdown-placement="right-start" className="mr-6 mb-3 text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Categorias
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </button>

          {categorySelected && 
            <div className='inline-block ml-5 mb-3 text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-600 rounded-lg text-sm px-4 py-2.5' >{categorySelected}</div>
          }

    <div
      id="dropdownRightStart"
      className="hidden absolute z-10 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul className="py-1" aria-labelledby="dropdownRightStartButton">
        { categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setCategorySelected(category)}
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              { category }
            </button>
          </li>  
        ))}
      </ul>
    </div>
      </div>
  );
};
