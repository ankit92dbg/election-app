import EncryptedStorage from "react-native-encrypted-storage";
import { createTable, deleteTable, getDBConnection, getTodoItems, getTotalRowNo, saveTodoItems } from "./db";

export const storeUserSession = async(data: any) => {
    try {
      await EncryptedStorage.setItem('user_session', JSON.stringify(data));

      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  }


  export const retrieveUserSession = async() => {
    try {   
        const session:any = await EncryptedStorage.getItem("user_session");
        if (session != null) {
          return JSON.parse(session)
        }else{
          return null
        }
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const logutUser = async() => {
    try {   
        const session:any = await EncryptedStorage.removeItem("user_session");
        if (session != null) {
          return {message:"success"}
        }else{
          return null
        }
    } catch (error) {
        // There was an error on the native side
    }
  }


  export const storeVoterData = async(data: any) => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      await saveTodoItems(db, data?.data);
      return {message:"success"}
    } catch (error) {
      console.error(error);
    }
  }

  export const deleteVoterTable = async() => {
    try {
      const db = await getDBConnection();
      await deleteTable(db);
      return {message:"success"}
    } catch (error) {
      console.error(error);
    }
  }


  export const retrieveVoterData = async() => {
    try {   
      const db = await getDBConnection();
      const data = await getTodoItems(db);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const getTotalRowCount = async() => {
    try {   
      const db = await getDBConnection();
      const data = await getTotalRowNo(db);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }


