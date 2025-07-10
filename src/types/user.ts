import api from '@/libs/api';
import {LoginCredentials, LoginResponse} from '@/types/auth';

interface Group {
    url: string
}

export interface User {
    id: number;
    username: string;
    url: string;
    email: string;
    group: Array<Group>;
  }
  
export interface CreateUserDto {
    username: string;
    url: string;
    email: string;
}

export const UserLogin = async(credentials : LoginCredentials): Promise<LoginResponse> => {

    const response = await api.post<LoginResponse>('/login/', credentials);

    return response.data;

}

export const FetchUsers = async () : Promise<User[]> => {
    const response = await api.get('/users/');
    return response.data;
};