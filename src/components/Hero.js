import React from 'react';
import MedicGif from '../images/home-medic.gif';

function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Encuentra el medicamento,
            <br class="hidden lg:inline-block" /> farmacia o doctor que
            necesites
          </h1>
          <p class="mb-8 leading-relaxed">
            Esta plataforma está dedicada para ayudarte a conseguir los
            productos o medicamentos necesarios para tu tratamiento.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              ¿Qué buscas?
            </button>
            {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-2/3 w-full">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={MedicGif}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
