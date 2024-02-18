import { GET_VOTER_LIST } from "../../contants";

export const getAllVoters = async(data: any) =>{
    return {
        type: GET_VOTER_LIST,
        data
    }
}