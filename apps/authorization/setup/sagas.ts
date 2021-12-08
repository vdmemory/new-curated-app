import { all } from 'redux-saga/effects';

import { userSaga } from '../components/auth/store';

export default function* rootSaga() {
    yield all([userSaga()]);
}
