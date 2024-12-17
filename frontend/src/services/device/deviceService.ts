import apiClient from '../Auth/apiClient';

interface DeviceReponse {
    id: string;
    name: string;
    status: string;
    lastActive: string;
  }

const authService = {
  login: async (credentials: LoginRequest): Promise<void> => { 
    try {
      // Gọi API đăng nhập và lấy JWT token
      const response = await apiClient.post('/authenticate/login', credentials);
      const { token } = response.data;

      // Lưu JWT vào localStorage
      sessionStorage.setItem('token', token);
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
