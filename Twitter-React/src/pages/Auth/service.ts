import {client, setAuthorizationHeader} from '../../api/client'
import { Credentials, Login } from './type'

export const login = async (credentials: Credentials) => {
    const respoonse = await client.post<Login>('/auth/login', credentials)
    const { accessToken } = respoonse.data;
    setAuthorizationHeader(accessToken);
    return respoonse.data;
};
