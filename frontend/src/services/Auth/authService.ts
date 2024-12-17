import apiClient from './apiClient';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const authService = {
  login: async (credentials: LoginRequest): Promise<void> => { 
    try {
      // Gọi API đăng nhập và lấy JWT token
      const response = await apiClient.post('/authenticate/login', credentials);
      console.log(response.data);
      
      sessionStorage.setItem('token', response.data);
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  logout: (): void => {
    // Xóa JWT khỏi localStorage
    sessionStorage.removeItem('token');
  },

  getCurrentUser: async (): Promise<any> => {
    const response = await apiClient.get('/api/me'); // API giả định trả về thông tin người dùng
    return response.data;
  }
};

export default authService;
