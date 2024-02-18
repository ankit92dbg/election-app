
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
// import { openDatabase } from 'react-native-sqlite-storage';
import { ToDoVoterItem } from './voter-models';

const tableName = 'voters_data';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'election.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id number,
        leader_id  TEXT,
        AC_NO  TEXT,
        PART_NO  TEXT,
        SECTION_NO  TEXT,
        SLNOINPART  TEXT,
        C_HOUSE_NO  TEXT,
        C_HOUSE_NO_V1  TEXT,
        FM_NAME_EN  TEXT,
        LASTNAME_EN  TEXT,
        FM_NAME_V1  TEXT,
        LASTNAME_V1  TEXT,
        RLN_TYPE  TEXT,
        RLN_FM_NM_EN  TEXT,
        RLN_L_NM_EN  TEXT,
        RLN_FM_NM_V1  TEXT,
        RLN_L_NM_V1  TEXT,
        EPIC_NO  TEXT,
        GENDER  TEXT,
        AGE  TEXT,
        DOB  TEXT,
        MOBILE_NO  TEXT,
        AC_NAME_EN  TEXT,
        AC_NAME_V1  TEXT,
        SECTION_NAME_EN  TEXT,
        SECTION_NAME_V1  TEXT,
        PSBUILDING_NAME_EN  TEXT,
        PSBUILDING_NAME_V1  TEXT,
        PART_NAME_EN  TEXT,
        PART_NAME_V1  TEXT,
        profile_image  TEXT,
        aadhar  TEXT,
        caste  TEXT,
        RELATION_PART_NO  TEXT,
        RELATION_SLNOINPART  TEXT,
        isMarried  TEXT,
        voter_label  TEXT,
        political_party  TEXT,
        isDead  TEXT,
        education  TEXT,
        other_education  TEXT,
        isHomeShifted  TEXT,
        isHomeShiftedWithin  TEXT,
        shiftedAddress  TEXT,
        shifted_country  TEXT,
        shifted_state  TEXT,
        shifted_city  TEXT,
        shifted_address  TEXT,
        profession  TEXT,
        other_profession  TEXT,
        isStayingOutside  TEXT,
        isStayingOutsideWithin  TEXT,
        stayingAddress  TEXT,
        staying_country  TEXT,
        staying_state  TEXT,
        staying_city  TEXT,
        staying_address  TEXT,
        labharthi_center  TEXT,
        labharthi_state  TEXT,
        labharthi_candidate  TEXT,
        approach_time  TEXT,
        approach_reason  TEXT,
        candidate_name  TEXT,
        created_at  TEXT,
        updated_at  TEXT
    );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoVoterItem[]> => {
  try {
    const todoItems: ToDoVoterItem[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName} ORDER BY id ASC LIMIT 50`);
    results.forEach((result : any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index))
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalRowNo = async (db: SQLiteDatabase)=> {
  try {
    const results = await db.executeSql(`SELECT * FROM ${tableName} ORDER BY id ASC`);
   return results.length
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const saveTodoItems = async (db: SQLiteDatabase, todoItems:any) => {
// let items =  todoItems.map((i : any) => console.warn('i--->>>',i))
 try{
    const insertQuery = `
    INSERT OR REPLACE INTO voters_data (
    id,  
    leader_id,    
    AC_NO, 
    PART_NO,
    SECTION_NO,
    SLNOINPART,
    C_HOUSE_NO,
    C_HOUSE_NO_V1,
    FM_NAME_EN,
    LASTNAME_EN,
    FM_NAME_V1,
    LASTNAME_V1,
    RLN_TYPE,
    RLN_FM_NM_EN,
    RLN_L_NM_EN,
    RLN_FM_NM_V1,
    RLN_L_NM_V1,
    EPIC_NO,
    GENDER,
    AGE,
    DOB,
    MOBILE_NO,
    AC_NAME_EN,
    AC_NAME_V1,
    SECTION_NAME_EN,
    SECTION_NAME_V1,
    PSBUILDING_NAME_EN,
    PSBUILDING_NAME_V1,
    PART_NAME_EN,
    PART_NAME_V1,
    profile_image,
    aadhar,
    caste,
    RELATION_PART_NO,
    RELATION_SLNOINPART,
    isMarried,
    voter_label,
    political_party,
    isDead,
    education,
    other_education,
    isHomeShifted,
    isHomeShiftedWithin,
    shiftedAddress,
    shifted_country,
    shifted_state,
    shifted_city,
    shifted_address,
    profession,
    other_profession,
    isStayingOutside,
    isStayingOutsideWithin,
    stayingAddress,
    staying_country,
    staying_state,
    staying_city,
    staying_address,
    labharthi_center,
    labharthi_state,
    labharthi_candidate,
    approach_time,
    approach_reason,
    candidate_name,
    created_at,
    updated_at
    ) VALUES`+  
    todoItems.map((i : any) => `(
      '${i.id}',  
      '${i.leader_id}',    
      '${i.AC_NO}', 
      '${i.PART_NO}',
      '${i.SECTION_NO}',
      '${i.SLNOINPART}',
      '${i.C_HOUSE_NO}',
      '${i.C_HOUSE_NO_V1}',
      '${i.FM_NAME_EN}',
      '${i.LASTNAME_EN}',
      '${i.FM_NAME_V1}',
      '${i.LASTNAME_V1}',
      '${i.RLN_TYPE}',
      '${i.RLN_FM_NM_EN}',
      '${i.RLN_L_NM_EN}',
      '${i.RLN_FM_NM_V1}',
      '${i.RLN_L_NM_V1}',
      '${i.EPIC_NO}',
      '${i.GENDER}',
      '${i.AGE}',
      '${i.DOB}',
      '${i.MOBILE_NO}',
      '${i.AC_NAME_EN}',
      '${i.AC_NAME_V1}',
      '${i.SECTION_NAME_EN}',
      '${i.SECTION_NAME_V1}',
      '${i.PSBUILDING_NAME_EN}',
      '${i.PSBUILDING_NAME_V1}',
      '${i.PART_NAME_EN}',
      '${i.PART_NAME_V1}',
      '${i.profile_image}',
      '${i.aadhar}',
      '${i.caste}',
      '${i.RELATION_PART_NO}',
      '${i.RELATION_SLNOINPART}',
      '${i.isMarried}',
      '${i.voter_label}',
      '${i.political_party}',
      '${i.isDead}',
      '${i.education}',
      '${i.other_education}',
      '${i.isHomeShifted}',
      '${i.isHomeShiftedWithin}',
      '${i.shiftedAddress}',
      '${i.shifted_country}',
      '${i.shifted_state}',
      '${i.shifted_city}',
      '${i.shifted_address}',
      '${i.profession}',
      '${i.other_profession}',
      '${i.isStayingOutside}',
      '${i.isStayingOutsideWithin}',
      '${i.stayingAddress}',
      '${i.staying_country}',
      '${i.staying_state}',
      '${i.staying_city}',
      '${i.staying_address}',
      '${i.labharthi_center}',
      '${i.labharthi_state}',
      '${i.labharthi_candidate}',
      '${i.approach_time}',
      '${i.approach_reason}',
      '${i.candidate_name}',
      '${i.created_at}',
      '${i.updated_at}'
      )`).join(',');
  
    return db.executeSql(insertQuery);
 }catch(error : any){
    console.warn('ers--->',error)
 }
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table if exists ${tableName}`;

  await db.executeSql(query);
};