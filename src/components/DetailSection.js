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
            {element && element.name}
          </h1>
          <p className="mb-2 leading-relaxed">
            
            {element && (slug === 'medical-items' || slug === 'medical-centers') &&
            element.direction}
          </p>
          <p className="mb-8 leading-relaxed">
            {element && (slug ==='doctors' || slug === 'medical-centers') &&
              element.description.substring(1, element.description.length - 1)}
            {element && slug === 'medical-items' && 
            element.description}
          </p>
          {/* {<h4 className="text-gray-400 ">{ slug === 'doctors' && element.email}</h4>
          <h4 className="text-gray-400 mb-3">{ slug === 'doctors' && element.contact_number}</h4>} */}
          
        </div>
      </div>
    </section>
  );
}
