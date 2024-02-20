import {GET_BM_LIST} from '../../contants';
import { postRequest } from '../../networkInterface';
import { retrieveUserSession } from '../../utils';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getAllBM = async(data = [], action: any) => {
  switch(action?.type){
    case GET_BM_LIST:
      return [action?.data]

      default :
      return data
  }
}  


  
  const BMData = createSlice({
    name: "BMData",
    initialState:  {
      data: null,
      isLoading: true,
      errors: '',
    },
    reducers: {
      setBMData: (state, action) => {
        state.data = action?.payload?.data
        state.isLoading = false
      },
    },
  })

  export const{
    setBMData,
  } = BMData.actions;
  export default BMData.reducer;
