import api from '../api/post.js';
import React, {useEffect} from 'react';

function Specialties() {
  const organizations = [
    {
      title: 'Sociedad Anticancerosa',
      img: 'https://www.mischiquiticos.com/wp-content/uploads/2013/05/Logo-SOCOEDAD-ANTICANCEROSA.jpg',
      page: 'https://www.sociedadanticancerosa.org/'
    },
    {
      title: 'La Sociedad Venezolana de Oncología',
      img: 'http://www.oncologia.org.ve/site/img/logo.png',
      page: 'http://www.oncologia.org.ve/site/estructuras/'
    },
    {
      title: 'Fundaparka',
      img: 'https://pbs.twimg.com/profile_images/1364547442109255682/KKN4l5lq_400x400.jpg',
      page: 'https://www.instagram.com/fundaparkca/?hl=es'
    },
    {
      title: 'Alzheimer Venezuela',
      img: 'https://pbs.twimg.com/profile_images/1331637189088829440/clZ2T3Rh_400x400.jpg',
      page: 'https://www.sociedadanticancerosa.org/'
    },
    {
      title: 'Sociedad Venezolana de Cardiología',
      img: 'https://yt3.ggpht.com/ytc/AKedOLS04EE8RdB-nNfgD_DpyX2xOEwfI7qMvTmEAqQWig=s900-c-k-c0x00ffffff-no-rj',
      page: 'https://svcardiologia.org/es/'
    },
    {
      title: 'Sociedad Venezolana de Endocrinología y Metabolismo',
      img: 'https://pbs.twimg.com/media/FKpBdtIWUAE-4gK?format=png&name=120x120',
      page: 'https://www.svemonline.org'
    },
  ]

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
    <section id='orgSection' className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Organizaciones en Venezuela</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">En la unión está la fuerza, organizaciones sin fines de lucro en el sector salud.</p>
    </div>
    <div className="flex flex-wrap mx-16">
      { organizations.map((org, index) => (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ org.img } />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{ org.title }</h2>
            <a href={ org.page } className="text-indigo-600 ">Ir a su página<svg className="inline-block ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
          </div>
        </div>
      </div>
      )) }
    </div>
  </div>
</section>
  );
}

export default Specialties;
