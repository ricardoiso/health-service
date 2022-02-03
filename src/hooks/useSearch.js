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

    const [categorySelected, setcategorySelected] = useState(categoriesData[2]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get(
                    getApiUrlByCategory(category),
            );
            console.log(data);
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();

        setcategorySelected(
            categoriesData.find(({slug}) => slug == category)
            ||
            categoriesData.find(category => category.slug == 'doctors')
        );
    }, [category]);

    const getApiUrlByCategory = (category) => {
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
        categoriesData,
        categorySelected,
    }
}

function useSearchByCategoryAndId(category, id) {
    const [data, setData] = useState();
    let fetchData;

    useEffect(async () => {
        switch (category) {
            case 'medical-items':
                fetchData = await api.get(`https://hackaton-caracas-2022.herokuapp.com/api/v1/medical_items/${id}.json`) 
                console.log('Medical Item: ', fetchData);
                setData(fetchData);
                break;
            case 'medical-centers':
                fetchData = await api.get(`https://hackaton-caracas-2022.herokuapp.com/api/v1/medical_centers/${id}.json`) 
                console.log('Medical Center: ', fetchData);
                setData(fetchData);
                break;
            case 'doctors':
                fetchData = await api.get(`https://hackaton-caracas-2022.herokuapp.com/api/v1/doctors/${id}.json`) 
                console.log('Doctor is: ', fetchData);
                setData(fetchData);
            break;
            default:
                break;
        }
    }, []);

    return data;
}

export { useSearch, useSearchByCategoryAndId }