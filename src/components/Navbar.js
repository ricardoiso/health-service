import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:font-semibold">
          <h1 className="ml-5 text-xl">Servicio de Salud</h1>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href='#orgSection' className="mr-5 hover:font-semibold hover:text-purple-800">Organizaciones</a>
          <a href='#doctorsSection' className="mr-5 hover:font-semibold hover:text-purple-800">Doctores</a>
          <Link to="/search" className="mr-5 hover:font-semibold hover:text-purple-800">Buscar</Link>
          {/* <Link to="/login" className='mr-5 hover:font-semibold hover:text-purple-800'>Inicia Sesión</Link> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
