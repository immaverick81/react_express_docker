export interface AuthState {
    username?: string;
    email: string;
    token?: string;
    isAuthenticated?: boolean;
    password: string;
}