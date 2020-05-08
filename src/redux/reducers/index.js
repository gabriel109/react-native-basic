import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth from './authReducer';

const authConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: ['msgError']
};

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, auth),
})

export default rootReducer;