import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Select from "@mui/material/Select";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Edit from "@mui/icons-material/Edit";
import React, { useEffect, useState } from 'react';
import stm32Service from '../../services/stm32/stm32Service';
import { Stm32Response } from "../../services/stm32/stm32Service";

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const DeviceTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const Small = styled("small")(({ bgcolor }: { bgcolor: string }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

// Styled TableCell for centering content
const CenteredTableCell = styled(TableCell)(() => ({
  textAlign: "center",
}));

const Stm32Table: React.FC = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;

  const [devices, setDevices] = useState<Stm32Response[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all_devices'); // Trạng thái lọc

  useEffect(() => {
    const getDevices = async () => {
      try {
        const data = await stm32Service.fetchAll();
        // Lọc các thiết bị dựa trên trạng thái kết nối
        const filteredDevices = data.filter((device) => {
          if (filter === 'connected') return device.is_connected;
          if (filter === 'disconnected') return !device.is_connected;
          return true; // Nếu filter là all_devices, không lọc
        });
        setDevices(filteredDevices);
      } catch (error) {
        setError('Failed to fetch STM32 devices');
      } finally {
        setLoading(false);
      }
    };

    getDevices();
  }, [filter]); // Cập nhật lại khi filter thay đổi

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>STM32 Devices</Title>
        <Select size="small" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="all_devices">All Devices</MenuItem>
          <MenuItem value="connected">Connected</MenuItem>
          <MenuItem value="disconnected">Disconnected</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <DeviceTable>
          <TableHead>
            <TableRow>
              <CenteredTableCell colSpan={4}>Serial Number</CenteredTableCell>
              <CenteredTableCell colSpan={4}>Code Name</CenteredTableCell> 
              <CenteredTableCell colSpan={4}>Garden Name</CenteredTableCell>
              <CenteredTableCell colSpan={4}>Last Connected</CenteredTableCell>
              <CenteredTableCell colSpan={4}>Device Quantity</CenteredTableCell>
              <CenteredTableCell colSpan={4}>Status</CenteredTableCell>
              <CenteredTableCell colSpan={4}>Action</CenteredTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device, index) => (
              <TableRow key={index} hover>
                <CenteredTableCell colSpan={4}>
                  {device.stm32SerialNumber}
                </CenteredTableCell>
                <CenteredTableCell colSpan={4}>
                  {device.stm32Name}
                </CenteredTableCell>
                <CenteredTableCell colSpan={4}>
                  {device.gardenName}
                </CenteredTableCell>

                <CenteredTableCell colSpan={4}>
                  {device.last_connected.toLocaleString()}
                </CenteredTableCell>

                <CenteredTableCell colSpan={4}>
                  {device.deviceQuantity.toString()}
                </CenteredTableCell>

                <CenteredTableCell colSpan={4}>
                  {device.is_connected ? (
                    <Small bgcolor={bgPrimary}>Connected</Small>
                  ) : (
                    <Small bgcolor={bgError}>Disconnected</Small>
                  )}
                </CenteredTableCell>

                <CenteredTableCell colSpan={4}>
                  <IconButton>
                    <Edit color="primary" />
                  </IconButton>
                </CenteredTableCell>
              </TableRow>
            ))}
          </TableBody>
        </DeviceTable>
      </Box>
    </Card>
  );
};

export default Stm32Table;
