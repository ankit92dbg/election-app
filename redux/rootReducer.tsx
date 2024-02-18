import {combineReducers} from 'redux'
import BMData, { getAllBM } from './reducer/BMData'
import VoterData, { getAllVoters } from './reducer/VoterData'
export default combineReducers({
    getAllBM,
    BMData,
    VoterData,
    getAllVoters,
})