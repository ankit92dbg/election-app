import {GET_MASTER_DATA} from '../../contants';
import { createSlice } from "@reduxjs/toolkit";

export const getAllMasterData = async(data = [], action: any) => {
  switch(action?.type){
    case GET_MASTER_DATA:
      return [action?.data]

      default :
      return data
  }
}  


  
  const MasterData = createSlice({
    name: "MasterData",
    initialState:  {
      data: null,
      isLoading: true,
      errors: '',
    },
    reducers: {
      setMasterData: (state, action) => {
        state.data = action?.payload?.data
        state.isLoading = false
      },
    },
  })

  export const{
    setMasterData,
  } = MasterData.actions;
  export default MasterData.reducer;
