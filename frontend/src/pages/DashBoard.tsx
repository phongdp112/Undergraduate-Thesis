import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashBoard: React.FC = () => {
  const ScreenStyle: React.CSSProperties = {
    width: "100%",
    display: "flex", // Sử dụng flexbox để tạo layout linh động
    maxWidth: "1170px",
    margin: "0 auto",
  };

  const MainStyle: React.CSSProperties = {
    display: "flex", // Đảm bảo container của Header và Footer sử dụng flexbox
    flexDirection: "column", // Đặt theo chiều dọc để Header ở trên và Footer ở dưới
    width: "100%", // Chiếm toàn bộ chiều rộng còn lại
    flexGrow: 1, // Phần này sẽ chiếm toàn bộ không gian còn lại
  };

  return (
    <div style={ScreenStyle}>
      <Sidebar />
      <div style={MainStyle}>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default DashBoard;
