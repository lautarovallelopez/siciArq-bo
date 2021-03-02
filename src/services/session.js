import http from 'services/http';
import { getToken, hasSession } from 'services/storage';

const validateToken = token => http.post('/public-api/session', { token });

const validateSession = async queryParams => {
  const accessToken = queryParams?.accessToken;
  if (accessToken) {
    const { success, user } = await validateToken(accessToken);
    return { success, accessToken, user };
  }
  const currentSession = hasSession();
  if (currentSession) {
    const token = getToken();
    const { success, user } = await validateToken(token);
    return { success, accessToken: token, user };
  }
  if (!queryParams || !currentSession) {
    return { success: false };
  }
  return { success: false };
};

export default validateSession;
