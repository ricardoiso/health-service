import api from '../api/post.js';
import React, {useEffect} from 'react';

function Specialties() {

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/api/v1/doctors.json');
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error => ${err}`)
        }
      }
    }
  }, [])

  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Organizaciones en Venezuela</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">De Venezuela al mundo</p>
    </div>
    <div class="flex flex-wrap mx-16">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.mischiquiticos.com/wp-content/uploads/2013/05/Logo-SOCOEDAD-ANTICANCEROSA.jpg" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sociedad Anticancerosa</h2>
            <a href="https://www.sociedadanticancerosa.org/" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="http://www.oncologia.org.ve/site/img/logo.png" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">La Sociedad Venezolana de Oncología</h2>
            <a href="http://www.oncologia.org.ve/site/estructuras/" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/1364547442109255682/KKN4l5lq_400x400.jpg" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Fundaparka</h2>
            <a href="https://www.instagram.com/fundaparkca/?hl=es" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/1331637189088829440/clZ2T3Rh_400x400.jpg" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Alzheimer</h2>
            <a href="https://www.sociedadanticancerosa.org/" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://yt3.ggpht.com/ytc/AKedOLS04EE8RdB-nNfgD_DpyX2xOEwfI7qMvTmEAqQWig=s900-c-k-c0x00ffffff-no-rj" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sociedad Venezolana de Cardiología</h2>
            <a href="https://svcardiologia.org/es/" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pbs.twimg.com/media/FKpBdtIWUAE-4gK?format=png&name=120x120" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sociedad Venezolana de Endocrinología y Metabolismo</h2>
            <a href="https://www.svemonline.org/" className="text-indigo-600 hover:underline">Ir a su página -></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Specialties;
