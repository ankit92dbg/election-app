import {GET_VOTER_LIST} from '../../contants';
import { createSlice } from "@reduxjs/toolkit";

export const getAllVoters = async(data = [], action: any) => {
  switch(action?.type){
    case GET_VOTER_LIST:
      return [action?.data]

      default :
      return data
  }
}  


  
  const VoterData = createSlice({
    name: "VoterData",
    initialState:  {
      data: null,
      isLoading: true,
      errors: '',
    },
    reducers: {
      setVoterData: (state, action) => {
        state.data = action?.payload?.data
        state.isLoading = false
      },
    },
  })

  export const{
    setVoterData,
  } = VoterData.actions;
  export default VoterData.reducer;
