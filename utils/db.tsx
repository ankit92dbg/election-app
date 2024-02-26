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
        updated_at  TEXT
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
    updated_at
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
      '${i.updated_at}'
      )`,
        )
        .join(',');

    return db.executeSql(insertQuery);
  } catch (error: any) {
    console.warn('ers--->', error);
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(partTo)}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND v1.PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND v1.PART_NO=${Number(partFrom)}`;
    }

    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND v1.AGE BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND v1.AGE=${Number(ageFrom)}`;
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
      WHERE += ` AND v1.PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND v1.PART_NO=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND v1.AGE BETWEEN ${Number(ageFrom)} AND ${Number(ageTo)}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND v1.AGE=${Number(ageFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
    }
    if(marriageAge!=''){
      WHERE += ` AND AGE>=${Number(marriageAge)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND AGE BETWEEN ${Number(ageFrom)} AND ${Number(
        ageTo,
      )}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND AGE=${Number(ageFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
    }
    if (ageFrom != '' && ageTo != '') {
      WHERE += ` AND AGE BETWEEN ${Number(ageFrom)} AND ${Number(
        ageTo,
      )}`;
    }
    if (ageFrom != '' && ageTo == '') {
      WHERE += ` AND AGE=${Number(ageFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
    }
    if (familySizeFrom != '' && familySizeTo != '') {
      WHERE += ` AND family_size BETWEEN ${Number(familySizeFrom)} AND ${Number(
        familySizeTo,
      )}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      WHERE += ` AND family_size=${Number(familySizeFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
    }

    if (familySizeFrom != '' && familySizeTo != '') {
      WHERE += ` AND family_size BETWEEN ${Number(familySizeFrom)} AND ${Number(
        familySizeTo,
      )}`;
    }
    if (familySizeFrom != '' && familySizeTo == '') {
      WHERE += ` AND family_size=${Number(familySizeFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }         
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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
      WHERE += ` AND PART_NO BETWEEN ${Number(partFrom)} AND ${Number(
        partTo,
      )}`;
    }
    if (partFrom != '' && partTo == '') {
      WHERE += ` AND PART_NO=${Number(partFrom)}`;
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