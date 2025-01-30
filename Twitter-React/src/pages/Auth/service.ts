import {client, setAuthorizationHeader, removeAuthorizationHeader} from '../../api/client'
import { Credentials, Login } from './type'
import storage from '../../utils/storage'



export const login = async (credentials: Credentials) => {
    const respoonse = await client.post<Login>('/auth/login', credentials)
    const { accessToken } = respoonse.data;
    setAuthorizationHeader(accessToken);
    storage.set('auth', accessToken);
    return respoonse.data;
};


export const logout = async () => { 
    storage.remove('auth');
    removeAuthorizationHeader();
}
