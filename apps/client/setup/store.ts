import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

type AppStore = ReturnType<typeof makeStore>;
export interface SagaStore extends Store {
    sagaTask?: Task;
}

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
            sagaMiddleware,
        ],
        devTools: process.env.NODE_ENV !== 'production',
        enhancers: [],
    });
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper<AppStore>(makeStore);
export default wrapper;
