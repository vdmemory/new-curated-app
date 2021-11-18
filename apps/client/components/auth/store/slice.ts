import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { RequestToken, FormData } from '../../../api/auth';

const userSlice = createSlice({
    name: 'user',

    initialState: {
        signInError: null as null | string,
        signInLoading: false as boolean,
        requestToken: {} as RequestToken,
    },

    reducers: {
        createSessionRequest(state, action: PayloadAction<FormData>) {
            return {
                ...state,
                signInLoading: true,
            };
        },
        createSessionSuccess(state, { payload }: { payload: RequestToken }) {
            return {
                ...state,
                signInLoading: false,
                requestToken: payload,
            };
        },
        createSessionFailure(state, { payload }: { payload: string }) {
            return {
                ...state,
                signInLoading: false,
                requestToken: { requestToken: '' },
                signInError: payload,
            };
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

export const {
    createSessionRequest,
    createSessionSuccess,
    createSessionFailure,
} = userSlice.actions;
export default userSlice;
