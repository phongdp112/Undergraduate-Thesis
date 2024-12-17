import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Đọc base URL từ .env
  timeout: Number(import.meta.env.VITE_API_TIMEOUT), // Đọc timeout từ .env
});

// Thêm JWT vào header
apiClient.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Xử lý lỗi
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Token might have expired.');
      // Xử lý khi JWT hết hạn (ví dụ: chuyển hướng tới trang đăng nhập)
    }
    return Promise.reject(error);
  }
);

export default apiClient;
