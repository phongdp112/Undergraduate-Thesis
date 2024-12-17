import { Box } from "@mui/material";
import DeviceCard from "./DeviceCard";

const DeviceMain: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#fafafa", // Set background
                padding: "20px", // Margin trong nội dung
                display: "flex",
                flexDirection: "column", // Xếp các item theo chiều dọc
                alignItems: "center", // Canh giữa nội dung
                gap: "16px", // Khoảng cách giữa các item
                height:"100%"
            }}>
            <DeviceCard />
        </Box>
    )
}
export default DeviceMain;