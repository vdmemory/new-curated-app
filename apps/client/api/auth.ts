import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const API_KEY_DB = 'dfd85164f101e8e2441b61e7280e6edf';

// TODO: переписать константы
export const ENDPOINTS = {
    requestToken: `/authentication/token/new?api_key=${API_KEY_DB}`,
    createSessionWithLogin: `/authentication/token/validate_with_login?api_key=${API_KEY_DB}`,
    createSession: `/authentication/session/new?api_key=${API_KEY_DB}`,
};

export type FetchRequestToken = {
    success: boolean;
    expires_at: string;
    request_token: string;
};

export type FetchSessionId = {
    success: boolean;
    session_id: string;
};

export type UserData = {
    userName: string;
    password: string;
    requestToken: string;
};

export type FormData = {
    userName: string;
    password: string;
};

export class RequestToken {
    requestToken: string;
    constructor(data: FetchRequestToken) {
        this.requestToken = data.request_token;
    }
}

export class SessionId {
    sessionId: string;
    constructor(data: FetchSessionId) {
        this.sessionId = data.session_id;
    }
}

export const createRequestToken = () =>
    api.get(ENDPOINTS.requestToken).then(({ data }) => new RequestToken(data));

export const createSessionWithLogin = ({
    userName,
    password,
    requestToken,
}: UserData) =>
    api
        .post(ENDPOINTS.createSessionWithLogin, {
            ...{
                username: userName,
                password,
                request_token: requestToken,
            },
        })
        .then(({ data }) => new RequestToken(data));

export const createSession = (requestToken: string) =>
    api
        .post(ENDPOINTS.createSession, {
            ...{
                request_token: requestToken,
            },
        })
        .then(({ data }) => new SessionId(data));
