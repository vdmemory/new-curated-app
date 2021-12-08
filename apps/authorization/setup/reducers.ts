import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../components/auth/store';

const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
});

export default rootReducer;
