import {put, takeEvery} from 'redux-saga/effects'
import { GET_BM_LIST } from '../../contants'
import { postRequest } from '../../networkInterface';
import { setBMData } from '../reducer/BMData';

function* getBMList(data:any):any{
    const formData = new FormData();
    formData.append('leader_id', data?.data?.leader_id);
    const response:any = yield postRequest('bm-list.php', formData);
    yield put(setBMData(response));
}

function* getAllBM(){
    yield takeEvery(GET_BM_LIST,getBMList)
}

export default getAllBM