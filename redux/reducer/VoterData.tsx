import {GET_BM_LIST} from '../../contants';
import { postRequest } from '../../networkInterface';
import { retrieveUserSession } from '../../utils';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getAllVoters = async(data = [], action: any) => {
  switch(action?.type){
    case GET_BM_LIST:
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
