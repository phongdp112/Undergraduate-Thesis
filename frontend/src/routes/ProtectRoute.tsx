import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectRouteProps {
  children?: React.ReactNode; // Thêm prop children vào đây
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem('token'); // Kiểm tra token

  // Nếu không có token, chuyển hướng đến trang login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Nếu có token, hiển thị các route con
  return <>{children || <Outlet />}</>;
};

export default ProtectRoute;
