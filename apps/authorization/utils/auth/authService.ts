export default class AuthService {
    getToken = (): string => localStorage.getItem('requestToken');
    setToken = (token: string): void =>
        localStorage.setItem('requestToken', token);
    removeToken = (): void => localStorage.removeItem('requestToken');
    setSessionId = (sessionId: string): void =>
        localStorage.setItem('sessionId', sessionId);
    getSessionId = (): string => localStorage.getItem('sessionId');
    removeSessionId = (): void => localStorage.removeItem('sessionId');
}
