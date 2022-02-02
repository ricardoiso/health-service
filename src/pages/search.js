import React from "react";
import Navbar from "../components/Navbar.js"
import SearchBar from "../components/SearchBar.js"

function SearchPage() {
  return(
    <div className="m-4">
      <Navbar />
      <main className="text-center">
        <h1 className=" sm:text-3xl text-2xl font-medium title-font capitalize mb-4 py-8 text-gray-900">¿Qué estás buscando?</h1>

        <SearchBar />

        <p className="m-8">Espere un momento, estamos seleccionando los mejores resultados para su caso...</p>
      </main>
    </div> 
  )
}

export default SearchPage;
