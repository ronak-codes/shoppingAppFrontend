import React ,{useState,useEffect} from 'react'
import axios from "axios"
import { BASE_URL } from '../constants';

const useFetch = () => {
    const [data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    const[error,setError] = useState(null);


    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.get(`${BASE_URL}/products/`);
            setData(response.data);
            setIsLoading(false);

        }catch(error){
            console.log("Error While Fetching Products",error);
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const reFetch = () =>{
        setIsLoading(true);
        fetchData();
    }
  return {data,isLoading,reFetch,error}
}

export default useFetch