import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import { Paragraph, Span } from "./Typography";

// STYLED COMPONENTS
const AppFooter = styled(Toolbar)(() => ({
    background: "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)", // Gradient xanh lá cây
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", 
  display: "flex",
  alignItems: "center",
  minHeight: 64,
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" }
    }
  }
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto"
}));


const Footer: React.FC = () => {

  return (
   
      <AppBar position="static" >
        <AppFooter >
          <FooterContent>
            <a href="#">
              <Button variant="contained" color="secondary">
                phongdp112
              </Button>
            </a>

            <Span m="auto" />

            <Paragraph m={0}>
              Design and Developed by <a href="#">phongdp112</a>
            </Paragraph>
          </FooterContent>
        </AppFooter>
      </AppBar>
   
  );
}
export default Footer;