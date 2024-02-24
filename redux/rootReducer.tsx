import {combineReducers} from 'redux'
import BMData, { getAllBM } from './reducer/BMData'
import MasterData, { getAllMasterData } from './reducer/MasterData'
import VoterData, { getAllVoters } from './reducer/VoterData'
export default combineReducers({
    getAllBM,
    BMData,
    VoterData,
    getAllVoters,
    MasterData,
    getAllMasterData,
})