import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
// import { openDatabase } from 'react-native-sqlite-storage';
import {ToDoVoterItem} from './voter-models';
import moment from 'moment';

const tableName = 'voters_data';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'election.db', location: 'default'});
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
        updated_at  TEXT,
        needUpdate string
    );`;

  await db.executeSql(query);
};

export const saveTodoItems = async (db: SQLiteDatabase, todoItems: any) => {
  try {
    const insertQuery =
      `
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
    updated_at,
    needUpdate
    ) VALUES` +
      todoItems
        .map(
          (i: any) => `(
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
      '${i.updated_at}',
      '0'
      )`,
        )
        .join(',');

    return db.executeSql(insertQuery);
  } catch (error: any) {
    console.warn('ers--->', error);
  }
};

export const updateItems = async (db: SQLiteDatabase, formData: any) => {
  try{
    let data = Object.fromEntries(formData._parts)
    let query = `UPDATE voters_data SET AC_NO='${data.AC_NO}',PART_NO='${data?.PART_NO}',SECTION_NO='${data?.SECTION_NO}',SLNOINPART='${data?.SLNOINPART}',C_HOUSE_NO='${data?.C_HOUSE_NO}',
    C_HOUSE_NO_V1='${data?.C_HOUSE_NO_V1}',FM_NAME_EN='${data?.FM_NAME_EN}',LASTNAME_EN='${data?.LASTNAME_EN}',FM_NAME_V1='${data?.FM_NAME_V1}',LASTNAME_V1='${data?.LASTNAME_V1}',RLN_TYPE='${data?.RLN_TYPE}',
    RLN_FM_NM_EN='${data?.RLN_FM_NM_EN}',RLN_L_NM_EN='${data?.RLN_L_NM_EN}',RLN_FM_NM_V1='${data?.RLN_FM_NM_V1}',RLN_L_NM_V1='${data?.RLN_L_NM_V1}',EPIC_NO='${data?.EPIC_NO}',GENDER='${data?.GENDER}',
    AGE='${data?.AGE}',DOB='${data?.DOB}',MOBILE_NO='${data?.MOBILE_NO}',AC_NAME_EN='${data?.AC_NAME_EN}',AC_NAME_V1='${data?.AC_NAME_V1}',SECTION_NAME_EN='${data?.SECTION_NAME_EN}',
    SECTION_NAME_V1='${data?.SECTION_NAME_V1}',PSBUILDING_NAME_EN='${data?.PSBUILDING_NAME_EN}',PSBUILDING_NAME_V1='${data?.PSBUILDING_NAME_V1}',PART_NAME_EN='${data?.PART_NAME_EN}',PART_NAME_V1='${data?.PART_NAME_V1}',
    profile_image='${data?.profile_image_path}',
    aadhar='${data?.aadhar}',
    caste='${data?.caste}',
    RELATION_PART_NO='${data?.RELATION_PART_NO}',
    RELATION_SLNOINPART='${data?.RELATION_SLNOINPART}',
    isMarried='${data?.isMarried}',
    voter_label='${data?.voter_label}',
    political_party='${data?.political_party}',
    isDead='${data?.isDead}',
    education='${data?.education}',
    other_education='${data?.education_other}',
    isHomeShifted='${data?.homeShifted}',
    isHomeShiftedWithin='${data?.constituencyHomeShifted}',
    shiftedAddress='${data?.homeShiftedAddress}',
    shifted_country='${data?.home_shifted_country}',
    shifted_state='${data?.home_shifted_state}',
    shifted_city='${data?.home_shifted_city}',
    shifted_address='${data?.home_shifted_address}',
    profession='${data?.profession}',
    other_profession='${data?.profession_other}',
    isStayingOutside='${data?.outsideLocation}',
    isStayingOutsideWithin='${data?.constituencyOutside}',
    stayingAddress='${data?.outsideLocationAddress}',
    staying_country='${data?.outside_location_country}',
    staying_state='${data?.outside_location_state}',
    staying_city='${data?.outside_location_city}',
    staying_address='${data?.outside_location_address}',
    labharthi_center='${data?.labharthi_center}',
    labharthi_state='${data?.labharthi_state}',
    labharthi_candidate='${data?.labharthi_candidate}',
    approach_time='${data?.APPROACH_QTY}',
    approach_reason='${data?.APPROACH_REASON}',
    candidate_name='${data?.CANDIDATE_NAME}',
    needUpdate='${data?.needUpdate}'
    WHERE id=${data?.voter_id}`
    console.warn('query--->',query)
    await db.executeSql(query);
  }catch(error:any){
    console.warn('err-->',error)
  }
  // try {
  //   $query = "UPDATE `voters_data` SET `AC_NO`=${form},`PART_NO`='$PART_NO',`SECTION_NO`='$SECTION_NO',`SLNOINPART`='$SLNOINPART',`C_HOUSE_NO`='$C_HOUSE_NO',
  //   `C_HOUSE_NO_V1`='$C_HOUSE_NO_V1',`FM_NAME_EN`='$FM_NAME_EN',`LASTNAME_EN`='$LASTNAME_EN',`FM_NAME_V1`='$FM_NAME_V1',`LASTNAME_V1`='$LASTNAME_V1',`RLN_TYPE`='$RLN_TYPE',
  //   `RLN_FM_NM_EN`='$RLN_FM_NM_EN',`RLN_L_NM_EN`='$RLN_L_NM_EN',`RLN_FM_NM_V1`='$RLN_FM_NM_V1',`RLN_L_NM_V1`='$RLN_L_NM_V1',`EPIC_NO`='$EPIC_NO',`GENDER`='$GENDER',
  //   `AGE`='$AGE',`DOB`='$DOB',`MOBILE_NO`='$MOBILE_NO',`AC_NAME_EN`='$AC_NAME_EN',`AC_NAME_V1`='$AC_NAME_V1',`SECTION_NAME_EN`='$SECTION_NAME_EN',
  //   `SECTION_NAME_V1`='$SECTION_NAME_V1',`PSBUILDING_NAME_EN`='$PSBUILDING_NAME_EN',`PSBUILDING_NAME_V1`='$PSBUILDING_NAME_V1',`PART_NAME_EN`='$PART_NAME_EN',`PART_NAME_V1`='$PART_NAME_V1',
  //   `profile_image`='$basename',
  //   `aadhar`='$aadhar',
  //   `caste`='$caste',
  //   `RELATION_PART_NO`='$RELATION_PART_NO',
  //   `RELATION_SLNOINPART`='$RELATION_SLNOINPART',
  //   `isMarried`='$isMarried',
  //   `voter_label`='$voter_label',
  //   `political_party`='$political_party',
  //   `isDead`='$isDead',
  //   `education`='$education',
  //   `other_education`='$education_other',
  //   `isHomeShifted`='$homeShifted',
  //   `isHomeShiftedWithin`='$constituencyHomeShifted',
  //   `shiftedAddress`='$homeShiftedAddress',
  //   `shifted_country`='$home_shifted_country',
  //   `shifted_state`='$home_shifted_state',
  //   `shifted_city`='$home_shifted_city',
  //   `shifted_address`='$home_shifted_address',
  //   `profession`='$profession',
  //   `other_profession`='$profession_other',
  //   `isStayingOutside`='$outsideLocation',
  //   `isStayingOutsideWithin`='$constituencyOutside',
  //   `stayingAddress`='$outsideLocationAddress',
  //   `staying_country`='$outside_location_country',
  //   `staying_state`='$outside_location_state',
  //   `staying_city`='$outside_location_city',
  //   `staying_address`='$outside_location_address',
  //   `labharthi_center`='$labharthi_center',
  //   `labharthi_state`='$labharthi_state',
  //   `labharthi_candidate`='$labharthi_candidate',
  //   `approach_time`='$approach_time',
  //   `approach_reason`='$approach_reason',
  //   `candidate_name`='$candidate_name'
  //   WHERE `id`='$voter_id'";

  //   return db.executeSql(insertQuery);
  // } catch (error: any) {
  //   console.warn('ers--->', error);
  // }
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table if exists ${tableName}`;

  await db.executeSql(query);
};

/* search and filter */

export const getSearch = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  name: any,
  fatherName: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (name != '') {
      WHERE += ` AND (FM_NAME_EN LIKE '%${name}%' OR  EPIC_NO LIKE '%${name}%')`;
    }
    if (fatherName != '') {
      WHERE += ` AND RLN_FM_NM_EN LIKE '%${fatherName}%'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY id DESC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalSearch = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  name: any,
  fatherName: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (name != '') {
      WHERE += ` AND (FM_NAME_EN LIKE '%${name}%' OR  EPIC_NO LIKE '%${name}%')`;
    }
    if (fatherName != '') {
      WHERE += ` AND RLN_FM_NM_EN LIKE '%${fatherName}%'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY id DESC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getAlphabetical = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalAlphabetical = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );

    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getAgewise = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND AGE BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND AGE=${Number(ageFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalAgewise = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND AGE BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND AGE=${Number(ageFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getFamilyReport = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  familySizeFrom: any,
  familySizeTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    let HAVING = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (familySizeFrom != '' && familySizeTo != '') {
      HAVING += ` HAVING COUNT(voters_data.id) BETWEEN ${Number(
        familySizeFrom,
      )} AND ${Number(familySizeTo)}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      HAVING += ` HAVING COUNT(voters_data.id)=${Number(familySizeFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT voters_data.*, COUNT(voters_data.id) as family_count FROM voters_data WHERE ${WHERE} GROUP BY voters_data.C_HOUSE_NO, voters_data.SECTION_NAME_EN,voters_data.id ${HAVING}  ORDER BY voters_data.FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalFamilyReport = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  familySizeFrom: any,
  familySizeTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    let HAVING = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (familySizeFrom != '' && familySizeTo != '') {
      HAVING += ` HAVING COUNT(voters_data.id) BETWEEN ${Number(
        familySizeFrom,
      )} AND ${Number(familySizeTo)}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      HAVING += ` HAVING COUNT(voters_data.id)=${Number(familySizeFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT voters_data.*, COUNT(voters_data.id) as family_count FROM voters_data WHERE ${WHERE} GROUP BY voters_data.C_HOUSE_NO, voters_data.SECTION_NAME_EN,voters_data.id ${HAVING}  ORDER BY voters_data.FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getFamilyHeadReport = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(v1.PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(v1.PART_NO AS INT)=${Number(partFrom)}`;
    }

    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND CAST(v1.AGE AS INT) BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND CAST(v1.AGE AS INT)=${Number(ageFrom)}`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT v1.*,v2.* FROM voters_data as v1 JOIN (select C_HOUSE_NO,SECTION_NAME_EN, max(AGE) as maxAge,COUNT(*) as family_count from voters_data  group by C_HOUSE_NO,SECTION_NAME_EN ORDER BY voters_data.C_HOUSE_NO ASC) v2 ON  v1.SECTION_NAME_EN=v2.SECTION_NAME_EN AND v1.AGE=v2.maxAge WHERE ${WHERE} ORDER BY v1.FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalFamilyHeadReport = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(v1.PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(v1.PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND CAST(v1.AGE AS INT) BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND CAST(v1.AGE AS INT)=${Number(ageFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT v1.*,v2.* FROM voters_data as v1 JOIN (select C_HOUSE_NO,SECTION_NAME_EN, max(AGE) as maxAge,COUNT(*) as family_count from voters_data  group by C_HOUSE_NO,SECTION_NAME_EN ORDER BY voters_data.C_HOUSE_NO ASC) v2 ON  v1.SECTION_NAME_EN=v2.SECTION_NAME_EN AND v1.AGE=v2.maxAge WHERE ${WHERE} ORDER BY v1.FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getDoubleName = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalDoubleName = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getMarried = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  marriageAge:any,
  partFrom: any,
  partTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    WHERE += " AND isMarried=1 AND GENDER='F'";
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(marriageAge!=''){
      WHERE += ` AND AGE>=${Number(marriageAge)}`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalMarried = async (
  db: SQLiteDatabase,
  marriageAge:any,
  partFrom: any,
  partTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    WHERE += " AND isMarried=1 AND GENDER='F'";
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(marriageAge!=''){
      WHERE += ` AND CAST(AGE AS INT)>=${Number(marriageAge)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getSingleVoter = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    WHERE += " AND isMarried=0";
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND CAST(AGE AS INT) BETWEEN ${Number(ageFrom)} AND ${Number(
        ageTo,
      )}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND CAST(AGE AS INT)=${Number(ageFrom)}`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalSingleVoter = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  ageFrom: any,
  ageTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    WHERE += " AND isMarried=0";
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND CAST(AGE AS INT) BETWEEN ${Number(ageFrom)} AND ${Number(
        ageTo,
      )}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND CAST(AGE AS INT)=${Number(ageFrom)}`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getAddressWise = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  address: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(address!=''){
      WHERE += ` AND PSBUILDING_NAME_EN LIKE '%${address}%'`;           
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalAddressWise = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  address: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    WHERE += " AND isMarried=0";
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(address!=''){
      WHERE += ` AND PSBUILDING_NAME_EN LIKE '%${address}%'`;           
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getSurnameReport = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  surname: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(surname!=''){
      WHERE += ` AND LASTNAME_EN LIKE '%${surname}%'`;           
    }


    let results = [];
    results = await db.executeSql(
      `SELECT voters_data.PART_NO,voters_data.LASTNAME_EN, COUNT(*) AS Total FROM voters_data WHERE ${WHERE} AND LASTNAME_EN IS NOT NULL AND LASTNAME_EN!='' GROUP BY voters_data.LASTNAME_EN,voters_data.PART_NO LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalSurnameReport = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  surname: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(surname!=''){
      WHERE += ` AND LASTNAME_EN LIKE '%${surname}%'`;           
    }

    let results = [];
    results = await db.executeSql(
      `SELECT voters_data.PART_NO,voters_data.LASTNAME_EN, COUNT(*) AS Total FROM voters_data WHERE ${WHERE} GROUP BY voters_data.LASTNAME_EN,voters_data.PART_NO`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getFamilyLabel = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  familySizeFrom: any,
  familySizeTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (familySizeFrom != '' && familySizeTo != '') {
      WHERE += ` AND CAST(family_size AS INT) BETWEEN ${Number(familySizeFrom)} AND ${Number(
        familySizeTo,
      )}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      WHERE += ` AND CAST(family_size AS INT)=${Number(familySizeFrom)}`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalFamilyLabel = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  familySizeFrom: any,
  familySizeTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if (familySizeFrom != '' && familySizeTo != '') {
      WHERE += ` AND CAST(family_size AS INT) BETWEEN ${Number(familySizeFrom)} AND ${Number(
        familySizeTo,
      )}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      WHERE += ` AND CAST(family_size AS INT)=${Number(familySizeFrom)}`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getSMSReport = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  name: any,
  surname: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if (name != '') {
      WHERE += ` AND FM_NAME_EN LIKE '%${name}%'`;
    }
    if (surname != '') {
      WHERE += ` AND LASTNAME_EN LIKE '%${surname}%'`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalSMSReport = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  name: any,
  surname: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if (name != '') {
      WHERE += ` AND FM_NAME_EN LIKE '%${name}%'`;
    }
    if (surname != '') {
      WHERE += ` AND LASTNAME_EN LIKE '%${surname}%'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getCasteWise = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  caste: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(caste!=''){
      WHERE += ` AND caste ='${caste}'`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalCasteWise = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  caste: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(caste!=''){
      WHERE += ` AND caste ='${caste}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getLabelValue = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  labelValue: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(labelValue!=''){
      WHERE += ` AND voter_label ='${labelValue}'`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalLabelValue = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  labelValue: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(labelValue!=''){
      WHERE += ` AND voter_label ='${labelValue}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getAreaWise = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  area: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(area!=''){
      WHERE += ` AND AC_NAME_EN ='${area}'`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalAreaWise = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  area: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(area!=''){
      WHERE += ` AND AC_NAME_EN ='${area}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getPartyWise = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  party: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(party!=''){
      WHERE += ` AND political_party ='${party}'`;
    }


    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalPartyWise = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  party: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(party!=''){
      WHERE += ` AND political_party ='${party}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getDeadList = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  dead: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(dead!=''){
      WHERE += ` AND isDead ='${dead}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalDeadList = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  dead: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(dead!=''){
      WHERE += ` AND isDead ='${dead}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getBirthday = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  dateFrom: any,
  dateTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }         
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    let dFrom = dateFrom instanceof Date
                      ? moment(dateFrom).format('MM-DD')
                      : ''
    let dTo = dateTo instanceof Date
                      ? moment(dateTo).format('MM-DD')
                      : ''  
    if(dFrom!='' && dTo!=''){
        WHERE += ` AND strftime('%m-%d',DOB) BETWEEN '${dFrom}' AND '${dTo}'`;
    }
    if(dFrom!='' && dTo==''){
        WHERE += ` AND strftime('%m-%d',DOB)='${dFrom}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalBirthday = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  dateFrom: any,
  dateTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    let dFrom = dateFrom instanceof Date
    ? moment(dateFrom).format('MM-DD')
    : ''
    let dTo = dateTo instanceof Date
        ? moment(dateTo).format('MM-DD')
        : ''  
    if(dFrom!='' && dTo!=''){
    WHERE += ` AND strftime('%m-%d',DOB) BETWEEN '${dFrom}' AND '${dTo}'`;
    }
    if(dFrom!='' && dTo==''){
    WHERE += ` AND strftime('%m-%d',DOB)='${dFrom}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getEducationList = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  education: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(education!=''){
      WHERE += ` AND education ='${education}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalEducationList = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  education: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(education!=''){
      WHERE += ` AND education ='${education}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getHomeShifted = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  isHomeShifted: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(isHomeShifted!=''){
      WHERE += ` AND isHomeShifted ='${isHomeShifted}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalHomeShifted = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  isHomeShifted: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(isHomeShifted!=''){
      WHERE += ` AND isHomeShifted ='${isHomeShifted}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getNewVoterList = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    WHERE += " AND strftime('%Y',DATE('now')) - strftime('%Y',DOB) - (strftime('00-%m-%d',DATE('now')) <strftime('00-%m-%d',DOB)) < 24";
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalNewVoterList = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    WHERE += " AND strftime('%Y',DATE('now')) - strftime('%Y',DOB) - (strftime('00-%m-%d',DATE('now')) <strftime('00-%m-%d',DOB)) < 24";
    

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getProfessionList = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  profession: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(profession!=''){
      WHERE += ` AND profession ='${profession}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalProfessionList = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  profession: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(profession!=''){
      WHERE += ` AND profession ='${profession}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getOutsideLocation = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  isOutsideLocation: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(isOutsideLocation!=''){
      WHERE += ` AND isStayingOutside ='${isOutsideLocation}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalOutsideLocation = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  isOutsideLocation: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(isOutsideLocation!=''){
      WHERE += ` AND isStayingOutside ='${isOutsideLocation}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getLabharthiCenter = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  selectedLBCenter: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(selectedLBCenter!=''){
      WHERE += ` AND labharthi_center ='${selectedLBCenter}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalLabharthiCenter = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  selectedLBCenter: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(selectedLBCenter!=''){
      WHERE += ` AND labharthi_center ='${selectedLBCenter}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getLabharthiState = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  selectedLBState: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(selectedLBState!=''){
      WHERE += ` AND labharthi_state ='${selectedLBState}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalLabharthiState = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  selectedLBState: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(selectedLBState!=''){
      WHERE += ` AND labharthi_state ='${selectedLBState}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getLabharthiCandidate = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  selectedLBCandidate: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(selectedLBCandidate!=''){
      WHERE += ` AND labharthi_candidate ='${selectedLBCandidate}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalLabharthiCandidate = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  selectedLBCandidate: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(selectedLBCandidate!=''){
      WHERE += ` AND labharthi_candidate ='${selectedLBCandidate}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getApproachQty = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  approachQty: any,
  approachReason: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(approachQty!=''){
      WHERE += ` AND approach_time ='${approachQty}'`;
    }
    if(approachReason!=''){
      WHERE += ` AND approach_reason ='${approachReason}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalApproachQty = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  approachQty: any,
  approachReason: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(approachQty!=''){
      WHERE += ` AND approach_time ='${approachQty}'`;
    }
    if(approachReason!=''){
      WHERE += ` AND approach_reason ='${approachReason}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getVoterSurvey = async (
  db: SQLiteDatabase,
  page: Number,
  Total: Number,
  partFrom: any,
  partTo: any,
  party: any,
  candidateName: any,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    let startFrom = (Number(page) - 1) * Number(Total);
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }
    if(party!=''){
      WHERE += ` AND political_party ='${party}'`;
    }
    if(candidateName!=''){
      WHERE += ` AND candidate_name ='${candidateName}'`;
    }
    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC LIMIT ${startFrom}, ${Total}`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getTotalVoterSurvey = async (
  db: SQLiteDatabase,
  partFrom: any,
  partTo: any,
  party: any,
  candidateName: any,
  leader_id: any,
) => {
  try {
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    if (partFrom != '' && partTo != '') {
      WHERE += ` AND CAST(PART_NO AS INT) BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND CAST(PART_NO AS INT)=${Number(partFrom)}`;
    }

    if(party!=''){
      WHERE += ` AND political_party ='${party}'`;
    }
    if(candidateName!=''){
      WHERE += ` AND candidate_name ='${candidateName}'`;
    }

    let results = [];
    results = await db.executeSql(
      `SELECT * FROM voters_data WHERE ${WHERE} ORDER BY FM_NAME_EN ASC`,
    );
    return Math.ceil(Number(results[0]?.rows?.length) / 50);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getACNo = async (
  db: SQLiteDatabase,
  leader_id: any,
): Promise<ToDoVoterItem[]> => {
  try {
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id}`;
    let results = [];
    results = await db.executeSql(
      `SELECT DISTINCT AC_NO FROM voters_data WHERE ${WHERE} ORDER BY AC_NO ASC`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getPARTNo = async (
  db: SQLiteDatabase,
  leader_id: any,
  AC_NO: any,
): Promise<ToDoVoterItem[]> => {
  try {
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id} AND AC_NO=${AC_NO}`;
    let results = [];
    results = await db.executeSql(
      `SELECT DISTINCT CAST(PART_NO AS INT) AS PART_NO FROM voters_data WHERE ${WHERE} ORDER BY PART_NO ASC`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getSECTIONNo = async (
  db: SQLiteDatabase,
  leader_id: any,
  AC_NO: any,
  PART_NO: any,
): Promise<ToDoVoterItem[]> => {
  try {
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id} AND AC_NO=${AC_NO} AND PART_NO=${PART_NO}`;
    let results = [];
    results = await db.executeSql(
      `SELECT DISTINCT CAST(SECTION_NO AS INT) AS SECTION_NO FROM voters_data WHERE ${WHERE} ORDER BY SECTION_NO ASC`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const getSLNOINPART = async (
  db: SQLiteDatabase,
  leader_id: any,
  AC_NO: any,
  PART_NO: any,
  SECTION_NO: any,
): Promise<ToDoVoterItem[]> => {
  try {
    const todoItems: ToDoVoterItem[] = [];
    let WHERE = ``;
    WHERE += `leader_id=${leader_id} AND AC_NO=${AC_NO} AND PART_NO=${PART_NO} AND SECTION_NO=${SECTION_NO}`;
    let results = [];
    results = await db.executeSql(
      `SELECT DISTINCT CAST(SLNOINPART AS INT) AS SLNOINPART FROM voters_data WHERE ${WHERE} ORDER BY SECTION_NO ASC`,
    );

    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

