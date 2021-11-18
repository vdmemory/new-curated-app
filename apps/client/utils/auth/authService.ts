const getRequestToken = () => localStorage.getItem('requestToken');
const getSessionId = () => localStorage.getItem('sessionId');
const removeRequestToken = () => localStorage.removeItem('requestToken');
const removeSessionId = () => localStorage.removeItem('sessionId');
const setRequestToken = (token: string) =>
    localStorage.setItem('requestToken', token);
const setSessionId = (sessionId: string) =>
    localStorage.setItem('sessionId', sessionId);

//TODO: переписать на класс
const authService = {
    getToken: getRequestToken,
    setToken: setRequestToken,
    removeToken: removeRequestToken,
    setSessionId,
    getSessionId,
    removeSessionId,
};

export default authService;
