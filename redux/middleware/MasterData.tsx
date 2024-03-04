import {put, takeEvery} from 'redux-saga/effects'
import { GET_MASTER_DATA } from '../../contants'
import { postRequest } from '../../networkInterface';
import { setMasterData } from '../reducer/MasterData';

function* getMasterData(data:any):any{
    console.warn('getMasterData--->')
    const formData = new FormData();
    formData.append('leader_id', data?.data?.leader_id);
    const response:any = yield postRequest('master-data.php', formData);
    console.warn('response--->',response)
    yield put(setMasterData(response));
}

function* getAllMasterData(){
    yield takeEvery(GET_MASTER_DATA,getMasterData)
}

export default getAllMasterData