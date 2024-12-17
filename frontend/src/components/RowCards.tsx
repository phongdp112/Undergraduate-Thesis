import { Fragment } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import MoreVert from "@mui/icons-material/MoreVert";
import DateRange from "@mui/icons-material/DateRange";
import StarOutline from "@mui/icons-material/StarOutline";
import { Span } from "../components/Typography";

// STYLED COMPONENTS
const ProjectName = styled(Span)(({ theme }) => ({
  marginLeft: 24,
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: { marginLeft: 4 },
}));

const StyledFabStar = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  background: "#08ad6c !important",
  backgroundColor: "rgba(9, 182, 109, 1) !important",
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.error.main} !important`,
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "32px !important",
  height: "32px !important",
}));

interface RowCardsProps {}

const RowCards: React.FC<RowCardsProps> = () => {
  return [1, 2, 3, 4].map((id) => (
    <Fragment key={id}>
      <Card sx={{ py: 1, px: 2 }} className="project-card">
        <Grid container alignItems="center">
          <Grid item xs={7} md={5}>
            <Box display="flex" alignItems="center">
              <Checkbox />

              {id % 2 === 1 ? (
                <StyledFabStar size="small">
                  <StarOutline />
                </StyledFabStar>
              ) : (
                <StyledFab size="small">
                  <DateRange />
                </StyledFab>
              )}

              <ProjectName>Project {id}</ProjectName>
            </Box>
          </Grid>

          <Grid item xs={4} md={3}>
            <Box color="text.secondary">{(new Date().getTime(), "MM/dd/yyyy hh:mma")}</Box>
          </Grid>

          <Grid item xs={false} sm={3}>
            <Box display="flex" position="relative" marginLeft="-0.875rem !important">
              <StyledAvatar src="/assets/images/face-4.jpg" />
              <StyledAvatar src="/assets/images/face-4.jpg" />
              <StyledAvatar src="/assets/images/face-4.jpg" />
              <StyledAvatar sx={{ fontSize: "14px" }}>+3</StyledAvatar>
            </Box>
          </Grid>

          <Grid item xs={1}>
            <Box display="flex" justifyContent="flex-end">
              <IconButton>
                <MoreVert />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Card>

      <Box py={1} />
    </Fragment>
  ));
};

export default RowCards;
