import axios from "axios";
import { BASE_URL } from "./config";

export const postRequest = async(url:any,formData:any) =>{
    try{
        const response = await fetch(`${BASE_URL}${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData
        }).then((response) => response.json()).then(async(response) => {
          return response !=null && response  
        })
        console.warn('response1--->',response)
        return response !=null && response
        
    }catch(error){
        return error;
    }
}