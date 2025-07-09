import axios, { AxiosError } from 'axios';

export interface User {
    id: number;
    name: string;
    role: number;
  }
  
export interface CreateUserDto {
    name: string;
    role: number;
}

export function GetRole(role: number) : string{

    switch(role){

        case 1:
            return "Front Developer"
        case 2:
            return "Backend Developer"
        case 3:
            return "Test Developer"

    }

    return "UnKnown"
}

export const FetchUsers = async () : Promise<User[]> => {
    const response = await fetch('/api/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
};