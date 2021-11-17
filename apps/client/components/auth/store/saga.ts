import { call, put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import { getUser, setUser } from './slice';

function requestGetUser() {
    return axios.request({
        method: 'get',
        url: 'https://my-json-server.typicode.com/atothey/demo/user',
    });
}

function* handleGetUser() {
    try {
        const { data } = yield call(requestGetUser);
        yield put(setUser({ ...data }));
    } catch (error) {
        console.log(error);
    }
}

export default function* watcherSaga() {
    yield takeLatest(getUser.type, handleGetUser);
}
