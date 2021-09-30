import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initializeStore = (rootReducer: any) => {
    return () => {
        return configureStore({
            reducer: rootReducer,
            middleware: [...getDefaultMiddleware()],
            devTools: process.env.NODE_ENV !== 'production',
            enhancers: [],
        });
    };
};
export default initializeStore;
