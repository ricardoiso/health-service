import api from '../api/post.js';
import React, {useState, useEffect} from 'react';


function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(
          "https://hackaton-caracas-2022.herokuapp.com/api/v1/doctors.json",
        );
        console.log(data);
        if (data.length !== 0 && doctors.length === 0) {
          setDoctors(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section id='doctorsSection' className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
          Equipo de Doctores Especialistas
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Contamos con los mejores profesionales en el área de enfermedades crónicas.
          </p>
        </div>


        <div className="flex flex-wrap -m-4">
          {doctors && 
            doctors.slice(0, 4).map((doctor, index) => (
              <div className="p-4 lg:w-1/4 md:w-1/2" key={index}>
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {doctor.name}
                  </h2>
                  <h3 className="text-gray-500 ">Oncología</h3>
                  <h4 className="text-gray-400 ">{ doctor.email }</h4>
                  <h4 className="text-gray-400 mb-3">{ doctor.contact_number }</h4>
                  {/* {<h3 className="text-gray-500 mb-3">{ doctor.medical_specialities.map(speciality => (speciality + ' ')) }</h3>} */}
                  <p className="mb-4">
                    { doctor.description.substring(1, doctor.description.length -1) }
                  </p>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Doctors;
