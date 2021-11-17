import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const userSlice = createSlice({
    name: 'user',

    initialState: {},

    reducers: {
        getUser(state) {
            return state;
        },
        setUser(state, action) {
            const userData = action.payload;
            return { ...state, ...userData };
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice;
