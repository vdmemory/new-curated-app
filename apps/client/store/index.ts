import { combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { initializeStore } from '@new-curated-app/setup/redux';

import { projectSlice } from './slices/project.slice';

const rootReducer = combineReducers({
    [projectSlice.name]: projectSlice.reducer,
});

const wrapperStoreRedux = createWrapper(initializeStore(rootReducer));
export default wrapperStoreRedux;
