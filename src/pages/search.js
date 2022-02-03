import React, { useState, useEffect } from "react";
import { DropdownMenu } from "../components/DropdownMenu.js";
import Navbar from "../components/Navbar.js"
import SearchBar from "../components/SearchBar.js"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch.js";

function SearchPage() {
  const [items, setItems] = useState([]);
  const [centers, setCenters] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const data = useSearch();
  const category = useParams().category;
  console.log(data);



  /* try {
    if (items.length === 0 && centers.length === 0 && doctors.length === 0) {
      switch (category) {
        case 'medical-items':
          setItems(data.data);
          console.log('Items done: ', items);
          break;
          case 'medical-centers':
            setCenters(data.data);
            console.log('Centers done: ', centers);
            break;
            case 'doctors':
              setDoctors(data.data);
              console.log('Doctors done: ', doctors);
          break;
        default: 
          break;
      } 
    }
  } catch (error) {
    console.error(error);
  } */



  return (
    <div className="m-4">
      <Navbar />
      <main className="text-center">
        <h1 className=" sm:text-3xl text-2xl font-medium title-font capitalize py-8 text-gray-900">
          ¿Qué estás buscando?
        </h1>

        <DropdownMenu />
        <SearchBar />

        {data.data.length === 0 && 
          <p className="m-8">
            Espere un momento, estamos seleccionando los mejores resultados para
            su caso...
          </p>
        }

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">

              { data.data &&
                data.data.map((element, index) => (
                  <div className="p-4 lg:w-1/2 md:w-full" key={index}>
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




              
              {/* <div className="p-4 lg:w-1/2 md:w-full">
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
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
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
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      The Catalyzer
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
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
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
