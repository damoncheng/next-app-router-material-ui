export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponseUser {
  
    id: string;
    username: string;
    email: string;

}

export interface LoginResponse {
    token: string;
    user: LoginResponseUser
}
