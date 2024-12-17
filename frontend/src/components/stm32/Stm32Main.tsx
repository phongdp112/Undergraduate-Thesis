import { Box } from "@mui/material";

import Stm32Table from "./Stm32Table";

const Stm32Main: React.FC = () => {
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
            <Stm32Table />
        </Box>
    )
}
export default Stm32Main;