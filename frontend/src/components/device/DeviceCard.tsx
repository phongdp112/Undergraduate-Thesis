import React from "react";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { lighten, styled, useTheme, Theme } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import StarOutline from "@mui/icons-material/StarOutline";
import TrendingUp from "@mui/icons-material/TrendingUp";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
// Styled Components
const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
}));

const FabIcon = styled(Fab)(() => ({
  width: "44px !important",
  height: "44px !important",
  boxShadow: "none !important"
}));

const H3 = styled("h3")(() => ({
  margin: 0,
  fontWeight: 500,
  marginLeft: "12px"
}));

const H1 = styled("h1")(({ theme }: { theme: Theme }) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary
}));

const Span = styled("span")(() => ({
  fontSize: "13px",
  marginLeft: "4px"
}));

const IconBox = styled("div")(() => ({
  width: 16,
  height: 16,
  color: "#fff",
  display: "flex",
  overflow: "hidden",
  borderRadius: "300px",
  justifyContent: "center",
  "& .icon": { fontSize: "14px" }
}));

// Styles object
const styles = {
  card: {
    padding: "16px"
  },
  contentBox: {
    paddingTop: "16px"
  },
  iconBox: {
    backgroundColor: (theme: Theme) => theme.palette.success.main
  },
  span: {
    fontSize: "13px",
    marginLeft: "4px",
    color: "#08ad6c"
  },
  activeUsersCard: {
    backgroundColor: "rgba(9, 182, 109, 0.15)"
  },
  transactionCard: {
    backgroundColor: "rgba(255, 0, 0, 0.15)"
  },
  newSignupCard: {
    backgroundColor: "rgba(33, 150, 243, 0.15)"
  }
};

const DeviceCard: React.FC = () => {
  const { palette } = useTheme();
  const bgError = lighten(palette.error.main, 0.85);

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {/* Card 1 */}
      <Grid item md={4} xs={12}>
        <Card elevation={3} sx={styles.card}>
          <ContentBox>
            <FabIcon size="medium" sx={styles.activeUsersCard}>
              <TrendingUp color="success" />
            </FabIcon>
            <H3 style={{ color: "#08ad6c" }}>Active Users</H3>
          </ContentBox>

          <ContentBox sx={styles.contentBox}>
            <H1>10.8k</H1>
            <IconBox sx={styles.iconBox}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span style={styles.span}>(+21%)</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item md={4} xs={12}>
        <Card elevation={3} sx={styles.card}>
          <ContentBox>
            <FabIcon size="medium" sx={{ backgroundColor: bgError }}>
              <StarOutline color="error" />
            </FabIcon>
            <H3 style={{ color: palette.error.main }}>Transactions</H3>
          </ContentBox>

          <ContentBox sx={styles.contentBox}>
            <H1>$2.8M</H1>
            <IconBox sx={{ backgroundColor: palette.error.main }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span style={{ color: palette.error.main }}>(+21%)</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item md={4} xs={12}>
        <Card elevation={3} sx={styles.card}>
          <ContentBox>
            <FabIcon size="medium" sx={styles.newSignupCard}>
              <TrendingUp color="primary" />
            </FabIcon>
            <H3 style={{ color: "#2196f3" }}>New Signups</H3>
          </ContentBox>

          <ContentBox sx={styles.contentBox}>
            <H1>1.2k</H1>
            <IconBox sx={{ backgroundColor: "primary.main" }}>
              <ExpandLess className="icon" />
            </IconBox>
            <Span style={{ color: "#2196f3" }}>(+15%)</Span>
          </ContentBox>
        </Card>
      </Grid>\<Grid item md={4} xs={12}>
   
      <AddCircleTwoToneIcon sx={{ fontSize: "5vw" }} />

      </Grid>
    </Grid>
  );
};

export default DeviceCard;
