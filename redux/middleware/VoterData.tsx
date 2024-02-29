import {put, takeEvery} from 'redux-saga/effects'
import { GET_VOTER_LIST } from '../../contants'
import { postRequest } from '../../networkInterface';
import { setVoterData } from '../reducer/VoterData';

function* getVoterList(data:any):any{
    const formData = new FormData();
    formData.append('leader_id', data?.data?.leader_id,);
    const response:any = yield postRequest('voter-list.php', formData);
    // console.warn('response--response-->',response)
    yield put(setVoterData(response));
}

function* getAllVoters(){
    yield takeEvery(GET_VOTER_LIST,getVoterList)
}

export default getAllVoters