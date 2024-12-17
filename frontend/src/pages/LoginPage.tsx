import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { styled, useTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

import { Paragraph, Span } from "../components/Typography";
import authService from "../services/Auth/authService"; // Import authService
// STYLED COMPONENTS
const GoogleButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  boxShadow: theme.shadows[0],
  backgroundColor: "#e0e0e0",
  "&:hover": { backgroundColor: "#d5d5d5" }
}));

const Logo = styled("div")({
  gap: 10,
  display: "flex",
  alignItems: "center",
  "& span": { fontSize: 26, lineHeight: 1.3, fontWeight: 800 }
});

const FirebaseRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#1A2038",
  minWidth: "100vw !important",
  minHeight: "100vh !important",
  "& .card": { maxWidth: 800, margin: "1rem" },
  "& .cardLeft": {
    color: "#fff",
    height: "100%",
    display: "flex",
    padding: "32px 56px",
    flexDirection: "column",
    backgroundSize: "cover",
    background: "linear-gradient(135deg, #0A1A2E 0%, #1A3B5C 50%, #2A5A8E 100%)",
    [theme.breakpoints.down("sm")]: { minWidth: 200 },
    "& img": { width: 32, height: 32 }
  },
  "& .mainTitle": {
    fontSize: 18,
    lineHeight: 1.3,
    marginBottom: 24
  },
  "& .item": {
    position: "relative",
    marginBottom: 12,
    paddingLeft: 16,
    "&::after": {
      top: 8,
      left: 0,
      width: 4,
      height: 4,
      content: '""',
      borderRadius: 4,
      position: "absolute",
      backgroundColor: theme.palette.error.main
    }
  }
}));

// initial login credentials
const initialValues = {
  email: "jason@ui-lib.com",
  password: "dummyPass",
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string().email("Invalid Email address").required("Email is required!")
});

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  // Cập nhật handleFormSubmit để gọi hàm login từ authService
  const handleFormSubmit = async (
    values: { email: string; password: string; remember: boolean }, 
    actions: FormikHelpers<{ email: string; password: string; remember: boolean }>
  ) => {
    try {
      // Gọi hàm login từ authService
      await authService.login({ email: values.email, password: values.password });
      
      // Sau khi login thành công, chuyển hướng về trang trước đó hoặc trang chủ
      navigate(state ? state.from : "/");
      enqueueSnackbar("Logged In Successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Login failed. Please check your credentials", { variant: "error" });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FirebaseRoot>
      <Card className="card">
        <Grid container>
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="cardLeft">
              <Logo>
                <span>MatX Pro</span>
              </Logo>

              <h1 className="mainTitle">Admin Dashboard</h1>

              <div className="features">
                <div className="item">JWT, Firebase & Auth0 Authentication</div>
                <div className="item">Clean & Organized code</div>
                <div className="item">Limitless Pages & Components</div>
              </div>

              <Span flexGrow={1}></Span>

              <a href="https://ui-lib.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/logos/ui-lib.png" alt="UI Lib Logo" />
              </a>
            </div>
          </Grid>

          <Grid size={{ md: 6, xs: 12 }}>
            <Box p={4}>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex" alignItems="center" gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Remember Me</Paragraph>
                      </Box>

                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}>
                        Forgot password?
                      </NavLink>
                    </Box>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={isSubmitting}
                      variant="contained"
                      sx={{ my: 2 }}>
                      Login
                    </LoadingButton>

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{
                          marginInlineStart: 5,
                          color: theme.palette.primary.main
                        }}>
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FirebaseRoot>
  );
};

export default LoginPage;
