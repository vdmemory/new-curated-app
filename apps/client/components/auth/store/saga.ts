import { call, put, takeLatest, delay } from '@redux-saga/core/effects';

import {
    createSessionRequest,
    createSessionSuccess,
    createSessionFailure,
} from './slice';
import {
    createRequestToken,
    createSessionWithLogin,
    createSession,
} from '../../../api/auth';
import { authService } from '../../../utils';

function* createSessionWithLoginSaga({
    payload,
}: ReturnType<typeof createSessionRequest>) {
    try {
        const requestToken = yield call(createRequestToken);
        const dataCreateSession = {
            ...payload,
            ...requestToken,
        };
        const data = yield call(createSessionWithLogin, dataCreateSession);
        const { sessionId } = yield call(createSession, data.requestToken);
        yield put(createSessionSuccess(data));
        yield authService.setToken(data.requestToken);
        yield authService.setSessionId(sessionId);
    } catch (e) {
        yield put(createSessionFailure(e.response.data.status_message));
        yield delay(3000);
        yield put(createSessionFailure(''));
        authService.removeToken();
    }
}

export default function* watcherSaga() {
    yield takeLatest(createSessionRequest.type, createSessionWithLoginSaga);
}
