import { GET_BM_LIST } from "../../contants";

export const getAllBM = async(data: any) =>{
    return {
        type: GET_BM_LIST,
        data
    }
}