import EncryptedStorage from "react-native-encrypted-storage";
import { createTable, deleteTable, getACNo, getAddressWise, getAgewise, getAlphabetical, getApproachQty, getAreaWise, getBirthday, getCasteWise, getDBConnection, getDeadList, getDoubleName, getEducationList, getFamilyHeadReport, getFamilyLabel, getFamilyReport, getHomeShifted, getLabelValue, getLabharthiCenter, getLabharthiState, getMarried, getNewVoterList, getOutsideLocation, getPARTNo, getPartyWise, getProfessionList, getSECTIONNo, getSLNOINPART, getSMSReport, getSearch, getSingleVoter, getSurnameReport, getTotalAddressWise, getTotalAgewise, getTotalAlphabetical, getTotalApproachQty, getTotalAreaWise, getTotalBirthday, getTotalCasteWise, getTotalDeadList, getTotalDoubleName, getTotalEducationList, getTotalFamilyHeadReport, getTotalFamilyLabel, getTotalFamilyReport, getTotalHomeShifted, getTotalLabelValue, getTotalLabharthiCenter, getTotalLabharthiState, getTotalMarried, getTotalNewVoterList, getTotalOutsideLocation, getTotalPartyWise, getTotalProfessionList, getTotalSMSReport, getTotalSearch, getTotalSingleVoter, getTotalSurnameReport, getTotalVoterSurvey, getVoterSurvey, saveTodoItems, updateItems } from "./db";
import { SQLiteDatabase } from "react-native-sqlite-storage";

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


  export const retrieveSearchData = async(page:any,total:any,partFrom:any,partTo:any,name:any,fatherName:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSearch(db,page,total,partFrom,partTo,name,fatherName,leader_id);
      const totalData = await getTotalSearch(db,partFrom,partTo,name,fatherName,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveAlphabeticalData = async(page:any,total:any,partFrom:any,partTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getAlphabetical(db,page,total,partFrom,partTo,leader_id);
      const totalData = await getTotalAlphabetical(db,partFrom,partTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveAgewiseData = async(page:any,total:any,partFrom:any,partTo:any,ageFrom:any,ageTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getAgewise(db,page,total,partFrom,partTo,ageFrom,ageTo,leader_id);
      const totalData = await getTotalAgewise(db,partFrom,partTo,ageFrom,ageTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveFamilyReportData = async(page:any,total:any,partFrom:any,partTo:any,familySizeFrom:any,familySizeTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getFamilyReport(db,page,total,partFrom,partTo,familySizeFrom,familySizeTo,leader_id);
      const totalData = await getTotalFamilyReport(db,partFrom,partTo,familySizeFrom,familySizeTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveFamilyHeadReportData = async(page:any,total:any,partFrom:any,partTo:any,ageFrom:any,ageTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getFamilyHeadReport(db,page,total,partFrom,partTo,ageFrom,ageTo,leader_id);
      const totalData = await getTotalFamilyHeadReport(db,partFrom,partTo,ageFrom,ageTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveDoubleNameData = async(page:any,total:any,partFrom:any,partTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getDoubleName(db,page,total,partFrom,partTo,leader_id);
      const totalData = await getTotalDoubleName(db,partFrom,partTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveMarriageAgeData = async(page:any,total:any,marriageAge:any,partFrom:any,partTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getMarried(db,page,total,marriageAge,partFrom,partTo,leader_id);
      const totalData = await getTotalMarried(db,marriageAge,partFrom,partTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveSingleVoterData = async(page:any,total:any,partFrom:any,partTo:any,ageFrom:any,ageTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSingleVoter(db,page,total,partFrom,partTo,ageFrom,ageTo,leader_id);
      const totalData = await getTotalSingleVoter(db,partFrom,partTo,ageFrom,ageTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveAddressWiseData = async(page:any,total:any,partFrom:any,partTo:any,address:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getAddressWise(db,page,total,partFrom,partTo,address,leader_id);
      const totalData = await getTotalAddressWise(db,partFrom,partTo,address,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveSurnameData = async(page:any,total:any,partFrom:any,partTo:any,surname:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSurnameReport(db,page,total,partFrom,partTo,surname,leader_id);
      const totalData = await getTotalSurnameReport(db,partFrom,partTo,surname,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveFamilyLabelData = async(page:any,total:any,partFrom:any,partTo:any,familySizeFrom:any,familySizeTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getFamilyLabel(db,page,total,partFrom,partTo,familySizeFrom,familySizeTo,leader_id);
      const totalData = await getTotalFamilyLabel(db,partFrom,partTo,familySizeFrom,familySizeTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveSMSData = async(page:any,total:any,partFrom:any,partTo:any,name:any,surname:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSMSReport(db,page,total,partFrom,partTo,name,surname,leader_id);
      const totalData = await getTotalSMSReport(db,partFrom,partTo,name,surname,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveCasteWiseData = async(page:any,total:any,partFrom:any,partTo:any,caste:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getCasteWise(db,page,total,partFrom,partTo,caste,leader_id);
      const totalData = await getTotalCasteWise(db,partFrom,partTo,caste,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveLabelValueData = async(page:any,total:any,partFrom:any,partTo:any,labelValue:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getLabelValue(db,page,total,partFrom,partTo,labelValue,leader_id);
      const totalData = await getTotalLabelValue(db,partFrom,partTo,labelValue,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveAreaWiseData = async(page:any,total:any,partFrom:any,partTo:any,area:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getAreaWise(db,page,total,partFrom,partTo,area,leader_id);
      const totalData = await getTotalAreaWise(db,partFrom,partTo,area,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrievePartyWiseData = async(page:any,total:any,partFrom:any,partTo:any,party:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getPartyWise(db,page,total,partFrom,partTo,party,leader_id);
      const totalData = await getTotalPartyWise(db,partFrom,partTo,party,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveDeadListData = async(page:any,total:any,partFrom:any,partTo:any,dead:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getDeadList(db,page,total,partFrom,partTo,dead,leader_id);
      const totalData = await getTotalDeadList(db,partFrom,partTo,dead,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveBirthdayData = async(page:any,total:any,partFrom:any,partTo:any,dateFrom:any,dateTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getBirthday(db,page,total,partFrom,partTo,dateFrom,dateTo,leader_id);
      const totalData = await getTotalBirthday(db,partFrom,partTo,dateFrom,dateTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveEducationData = async(page:any,total:any,partFrom:any,partTo:any,education:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getEducationList(db,page,total,partFrom,partTo,education,leader_id);
      const totalData = await getTotalEducationList(db,partFrom,partTo,education,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveHomeShiftedData = async(page:any,total:any,partFrom:any,partTo:any,isHomeShifted:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getHomeShifted(db,page,total,partFrom,partTo,isHomeShifted,leader_id);
      const totalData = await getTotalHomeShifted(db,partFrom,partTo,isHomeShifted,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveNewVoterData = async(page:any,total:any,partFrom:any,partTo:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getNewVoterList(db,page,total,partFrom,partTo,leader_id);
      const totalData = await getTotalNewVoterList(db,partFrom,partTo,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveProfessionData = async(page:any,total:any,partFrom:any,partTo:any,profession:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getProfessionList(db,page,total,partFrom,partTo,profession,leader_id);
      const totalData = await getTotalProfessionList(db,partFrom,partTo,profession,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveOutsideLocationData = async(page:any,total:any,partFrom:any,partTo:any,isOutsideLocation:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getOutsideLocation(db,page,total,partFrom,partTo,isOutsideLocation,leader_id);
      const totalData = await getTotalOutsideLocation(db,partFrom,partTo,isOutsideLocation,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveLabharthiCenterData = async(page:any,total:any,partFrom:any,partTo:any,selectedLBCenter:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getLabharthiCenter(db,page,total,partFrom,partTo,selectedLBCenter,leader_id);
      const totalData = await getTotalLabharthiCenter(db,partFrom,partTo,selectedLBCenter,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveLabharthiStateData = async(page:any,total:any,partFrom:any,partTo:any,selectedLBState:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getLabharthiState(db,page,total,partFrom,partTo,selectedLBState,leader_id);
      const totalData = await getTotalLabharthiState(db,partFrom,partTo,selectedLBState,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveLabharthiCandidateData = async(page:any,total:any,partFrom:any,partTo:any,selectedLBCandidate:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getLabharthiState(db,page,total,partFrom,partTo,selectedLBCandidate,leader_id);
      const totalData = await getTotalLabharthiState(db,partFrom,partTo,selectedLBCandidate,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveApproachQtyData = async(page:any,total:any,partFrom:any,partTo:any,approachQty:any,approachReason:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getApproachQty(db,page,total,partFrom,partTo,approachQty,approachReason,leader_id);
      const totalData = await getTotalApproachQty(db,partFrom,partTo,approachQty,approachReason,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveVoterSurveyData = async(page:any,total:any,partFrom:any,partTo:any,party:any,candidateName:any,leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getVoterSurvey(db,page,total,partFrom,partTo,party,candidateName,leader_id);
      const totalData = await getTotalVoterSurvey(db,partFrom,partTo,party,candidateName,leader_id);
      return {message:"success",totalData:totalData,data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveACNo = async(leader_id:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getACNo(db,leader_id);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrievePARTNo = async(leader_id:any,AC_NO:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getPARTNo(db,leader_id,AC_NO);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveSECTIONNo = async(leader_id:any,AC_NO:any,PART_NO:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSECTIONNo(db,leader_id,AC_NO,PART_NO);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const retrieveSLNOINPART = async(leader_id:any,AC_NO:any,PART_NO:any,SECTION_NO:any) => {
    try {   
      const db = await getDBConnection();
      const data = await getSLNOINPART(db,leader_id,AC_NO,PART_NO,SECTION_NO);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }

  export const saveVoterData = async(formData:any) => {
    try {   
      const db = await getDBConnection();
      const data = await updateItems(db,formData);
      return {message:"success",data}
    } catch (error) {
        // There was an error on the native side
    }
  }


