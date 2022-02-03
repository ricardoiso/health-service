import React, { useState, useEffect } from "react";
import { DropdownMenu } from "../components/DropdownMenu.js";
import Navbar from "../components/Navbar.js"
import SearchBar from "../components/SearchBar.js"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch.js";

function SearchPage() {

  const data = useSearch();

  try {
    let filterInput = document.getElementById('findInput');
  
    if (filterInput) {
      filterInput.addEventListener('keyup', filterValues);
    }
  
    function filterValues() {
      let filterValue = document.getElementById('findInput').value.toLowerCase();

      let cards = document.getElementById('cards');
      let cardItems = cards.querySelectorAll('div.card');

      for (let i = 0; i < cardItems.length; i++) {
        console.log('Cards en i ', cards[i])
        let card = cardItems[i].getElementsByTagName('div')[0];

        if (card.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
          cardItems[i].style.display = '';
        } else  {
          cardItems[i].style.display = 'none';
        }
        
      }
    }
    
  } catch (error) {
    console.warn(error);
  }


  return (
    <div className="m-4">
      <Navbar />
      <main className="text-center">
        <h1 className=" sm:text-3xl text-2xl font-medium title-font capitalize py-8 text-gray-900">
          ¿Qué estás buscando?
        </h1>

        <DropdownMenu />
        <SearchBar />

        { data.data && data.data.length === 0 && 
          <p className="m-8">
            Espere un momento, estamos seleccionando los mejores resultados para
            su caso...
          </p>
        }

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div id="cards" className="flex flex-wrap -m-4">

              { data.data &&
                data.data.map((element, index) => (
                  <div className="card p-4 lg:w-1/2 md:w-full" key={index}>
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="w-full text-gray-900 text-lg title-font font-medium mb-3">
                      { element.name }
                    </h2>

                    <h4 className="text-gray-400 ">{ element.email }</h4>
                  <h4 className="text-gray-400 mb-3">{ element.contact_number }</h4>

                    <p className="leading-relaxed text-base">
                      {data.categorySelected.slug === 'doctors' && element.description.substring(1, element.description.length -1) }
                      {data.categorySelected.slug === 'medical-centers' && element.description.substring(1, element.description.length -1) }
                      {data.categorySelected.slug === 'medical-items' && element.description }
                    </p>

                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Ver Información
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
