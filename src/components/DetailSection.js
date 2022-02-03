import React from 'react';
import { useParams } from "react-router-dom";
import { useSearchByCategoryAndId } from "../hooks/useSearch.js";
import DetailGIF from '../images/detail.gif';

export default function DetailSection() {
    const { slug, id } = useParams();
    var element;

    console.log(slug, id);
    let dataObj = useSearchByCategoryAndId(slug, id);
    if (dataObj) {
        element = dataObj.data;
    }
    console.log('dataObj ', dataObj)

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={DetailGIF}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {element && element.name}Algo
          </h1>
          <p className="mb-8 leading-relaxed">
            {element &&
              element.description.substring(1, element.description.length - 1)}
          </p>
          <h4 className="text-gray-400 ">{element.email}</h4>
          <h4 className="text-gray-400 mb-3">{element.contact_number}</h4>
          {/* <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div> */}
        </div>
      </div>
    </section>
  );
}
