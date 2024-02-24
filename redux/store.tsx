import {Tuple, configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import getAllBM from './middleware/BMData'
import getAllVoters from './middleware/VoterData'
import getAllMasterData from './middleware/MasterData'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:rootReducer,
    middleware: () => new Tuple( sagaMiddleware)
});

sagaMiddleware.run(getAllBM)
sagaMiddleware.run(getAllVoters)
sagaMiddleware.run(getAllMasterData)

export default store;