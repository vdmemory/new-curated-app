import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const projectSlice = createSlice({
    name: 'project',

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialState: [{ id: 1, title: 'hello' }] as any,

    reducers: {
        addProject(state, action) {
            return action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.project,
            };
        },
    },
});
