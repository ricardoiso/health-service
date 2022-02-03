import React from 'react';
import MedicGif from '../images/home-medic.gif';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Encuentra el medicamento,
            <br className="hidden lg:inline-block" /> farmacia o doctor que
            necesites
          </h1>
          <p className="mb-8 leading-relaxed">
            Esta plataforma está dedicada para ayudarte a conseguir los
            productos o medicamentos necesarios para tu tratamiento.
          </p>
          <div className="flex justify-center">
              <Link to="search">
                <button className="inline-flex text-white bg-gradient-to-r from-indigo-500 to-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-600 rounded text-lg">
                  ¿Qué buscas?
                </button>
              </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/3 w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={MedicGif}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
