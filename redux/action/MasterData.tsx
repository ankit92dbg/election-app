import { GET_MASTER_DATA } from "../../contants";

export const getMasterData = async(data: any) =>{
    return {
        type: GET_MASTER_DATA,
        data
    }
}