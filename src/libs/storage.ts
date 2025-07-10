import { LoginResponse } from "@/types/auth";

  // 保存认证信息到localStorage
  export const setAuthData = (data: LoginResponse) => {
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };
  
  // 获取当前用户
  export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  // 检查是否已登录
  export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  
  // 登出
  export const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };