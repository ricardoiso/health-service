import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import api from '../api/post.js';

const useSearch = () => {
    const [data, setData] = useState();
    const { category } = useParams();

    const categoriesData = [
        {
            id: 1,
            name: 'Medicamendos e insumos',
            slug: 'medical-items'
        },
        {
            id: 2,
            name: 'Centros medicos',
            slug: 'medical-centers'
        },
        {
            id: 3,
            name: 'Doctores',
            slug: 'doctors'
        },
    ];

    console.log(category)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await api.get(
                getApiUrlByCategory(),
            );
            console.log(data);
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
    }, [category]);

    const getApiUrlByCategory = () => {
        switch (category) {
            case categoriesData[0].slug:
                return "https://hackaton-caracas-2022.herokuapp.com/api/v1/medical_items.json"
            case categoriesData[1].slug:
                return "https://hackaton-caracas-2022.herokuapp.com/api/v1/medical_centers.json"
            case categoriesData[2].slug:
                return "https://hackaton-caracas-2022.herokuapp.com/api/v1/doctors.json"
            default:
                return "https://hackaton-caracas-2022.herokuapp.com/api/v1/doctors.json";
        }
    }

    return {
        data,
        categoriesData
    }
}

export { useSearch }