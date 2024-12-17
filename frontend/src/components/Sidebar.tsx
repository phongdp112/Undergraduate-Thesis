import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, Box, Switch, FormControlLabel } from '@mui/material';
import { Dashboard, Yard, DeviceThermostat, HelpOutline } from '@mui/icons-material'; // Import các icon

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  // State để theo dõi trạng thái thu nhỏ/đầy đủ của sidebar
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  // Các style chung cho sidebar

  const brandStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Đảm bảo các phần tử được phân bố đều
    alignItems: 'center', // Canh giữa theo chiều dọc
    width: '100%', // Chiều rộng của div này chiếm toàn bộ chiều rộng sidebar
    marginBottom: '20px', // Khoảng cách dưới để không bị dính vào divider
  };

  const sidebarStyles = {
    alignItems: 'center',
    top: 0,
    left: 0,
    width: isExpanded ? '270px' : '40px', // Nếu mở rộng thì rộng 250px, nếu thu nhỏ thì chỉ còn 60px
    height: '100vh',
    
    backgroundColor: '#388E3C',
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: '20px',
    boxShadow: '1px 0 10px rgba(0, 0, 0, 0.1)',
    backgroundImage:
      'url("https://th.bing.com/th/id/R.58ea47d159ce4f865b951a2f95538244?rik=0YBIQDJF10mb5g&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1209%2f30%2fc4%2f14215112_1348980415555.jpg&ehk=HC%2bK2Z3vNXwNXLSIbRHXd8ZKo%2bncvIg0r%2faob7Dx0sg%3d&risl=&pid=ImgRaw&r=0")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'width 0.3s', // Hiệu ứng khi thay đổi kích thước
  };

  const listItemStyles = {
    color: 'white',
    fontSize: '12px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    textDecoration: 'none' as 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    display: 'flex', // Thay đổi để sử dụng flexbox cho ListItem
    alignItems: 'center', // Căn chỉnh icon và text theo chiều dọc
    '&:hover': {
      backgroundColor: '#D2691E',
      color: 'white',
      border: '1px solid #D2691E',
      textDecoration: 'none !important',
    },
  };

  const dividerStyles = {
    backgroundColor: '#81C784', // Màu xanh sáng cho divider
  };

  // Sự kiện khi chuột di chuyển vào sidebar
  const handleMouseEnter = () => {
    if(!isFixed){
    setIsExpanded(true); // Mở rộng sidebar
    }
  };

  // Sự kiện khi chuột di chuyển ra ngoài sidebar
  const handleMouseLeave = () => {
    if(!isFixed){
    setIsExpanded(false); // Thu nhỏ sidebar
    }
  };
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFixed(event.target.checked); // Kiểm tra trạng thái của nút switch
    if (!event.target.checked) {
      setIsExpanded(true); // Nếu không cố định, mở rộng sidebar
    }
  };
  return (
    <div
      style={sidebarStyles}
      onMouseEnter={handleMouseEnter} // Bắt sự kiện di chuyển vào sidebar
      onMouseLeave={handleMouseLeave} // Bắt sự kiện di chuyển ra ngoài sidebar
    >
      {/* Nút Switch để cố định sidebar không bị thu nhỏ */}
     {isExpanded && <div style={brandStyle}>
       <b> phongdp112 </b>
      <FormControlLabel
        control={<Switch checked={isFixed} onChange={handleSwitchChange} 
        sx={{
          
          '& .MuiSwitch-track': {
            backgroundColor: isFixed ? '#D2691E !important' : '#388E3C', // Thay đổi màu khi bật
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: isFixed ? '#D2691E' : '#388E3C', // Thay đổi màu thumb khi bật
          },
        }}/>}
        label=""
        style={{ marginTop: 'auto', color: 'white' }
      }
      />
      </div>}
      {isExpanded && <Divider style={dividerStyles} />}
      <List>
        <ListItem component="a" href="#" style={{ padding: 0 }}>
          <Box sx={listItemStyles}>
            <Dashboard sx={{ marginRight: isExpanded ? 2 : 0  }} /> {/* Icon cho Dashboard */}
            {isExpanded && <ListItemText primary="Dashboard" />} {/* Chỉ hiển thị văn bản khi sidebar được mở rộng */}
          </Box>
        </ListItem>
        <ListItem component="a" href="/garden" style={{ padding: 0 }}>
          <Box sx={listItemStyles}>
            <Yard sx={{ marginRight: isExpanded ? 2 : 0  }} /> {/* Icon cho Garden */}
            {isExpanded && <ListItemText primary="Garden" />} {/* Chỉ hiển thị văn bản khi sidebar được mở rộng */}
          </Box>
        </ListItem>
        <ListItem component="a" href="/stm32" style={{ padding: 0 }}>
          <Box sx={listItemStyles}>
            <Yard sx={{ marginRight: isExpanded ? 2 : 0  }} /> {/* Icon cho Garden */}
            {isExpanded && <ListItemText primary="STM32" />} {/* Chỉ hiển thị văn bản khi sidebar được mở rộng */}
          </Box>
        </ListItem>
        <ListItem component="a" href="/device-sensor" style={{ padding: 0 }}>
          <Box sx={listItemStyles}>
            <DeviceThermostat sx={{ marginRight: isExpanded ? 2 : 0  }} /> {/* Icon cho Device-Sensor */}
            {isExpanded && <ListItemText primary="Device-Sensor" />} {/* Chỉ hiển thị văn bản khi sidebar được mở rộng */}
          </Box>
        </ListItem>
        <ListItem component="a" href="/document" style={{ padding: 0 }}>
          <Box sx={listItemStyles}>
            <HelpOutline sx={{ marginRight: isExpanded ? 2 : 0   }} /> {/* Icon cho Documentation */}
            {isExpanded && <ListItemText primary="Documentation" />} {/* Chỉ hiển thị văn bản khi sidebar được mở rộng */}
          </Box>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
