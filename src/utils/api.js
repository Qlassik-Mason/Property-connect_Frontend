import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'

export const api = axios.create({
    baseURL: "http://localhost:8000"
})



export const getAllProperties = async () =>{

    try{
        const response = await api.get("/api/residency/allproperty",{timeout:10*1000});

        if(response.status === 400 || response.status === 500)
        {
            throw response.data
        }
        return response.data
    }catch(error){
        toast.error("something went wrong");
        throw error;
    }
};


export const getProperty = async(id)=>{

    try{
        const response = await api.get(`/api/residency/${id}`,{timeout:10*1000});

        if(response.status === 400 || response.status === 500)
        {
            throw response.data
        }
        return response.data
    }catch(error){
        toast.error("something went wrong");
        throw error;
    }
}
