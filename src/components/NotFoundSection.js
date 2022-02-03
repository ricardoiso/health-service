import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundGIF from '../images/not-found.gif';

export const NotFoundSection = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={NotFoundGIF} />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ocurrió un error pero no te preocupes, no fue tu culpa</h1>
        <p class="mb-8 leading-relaxed">Lamentamos muchisimo que no hayas podido encontrar la ruta que deseabas, por favor dirigete al inicio.</p>
        <div class="flex justify-center">
          <Link to="/">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};
