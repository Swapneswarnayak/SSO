"use client";

import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  Heading1,
  LoginButton,
  heading1Style,
  loginText,
  logoBox,
  parentBox,
  sideBox,
} from "./LoginStyle";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { signin } from "@/Auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputCaptcha, setInputCaptcha] = useState<any>("");
  const [captchaCode, SetCaptchaCode] = useState<any>("");
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const refreshCapcha = () => {
    SetCaptchaCode(Math.random().toString(36).substr(2, 6));
  };
  useEffect(() => {
    refreshCapcha();
  }, []);

  //password show hide function
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    if (inputCaptcha == captchaCode) {
      try {
        const response = await signin(formData);
        console.log(response?.data?.data, "resp");
        localStorage.setItem("token", JSON.stringify(response?.data?.data));
        push("/Dashboard");
      } catch (error: any) {
        setError(error.response.data.message);
        console.error(error);
      } finally {
        setIsLoading(false);
        refreshCapcha();
      }
    } else {
      alert("Wrong Captcha");
    }
  }

  return (
    <Box sx={parentBox}>
      <Box sx={sideBox}>
        <Container maxWidth={"xl"}>
          <Box sx={logoBox}>
            <Image src="/GovLogo__2_.png" width={50} height={70} alt={""} />
            <Heading1 sx={heading1Style}>
              UNION PUBLIC SERVICE COMMISSION
            </Heading1>
            <Typography sx={loginText}>Login</Typography>
          </Box>
          <Box>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <form onSubmit={onSubmit}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: "9px",
                  color: "white",
                  fontSize: { md: "14px", lg: "14px" },
                }}
              >
                Email
              </Typography>
              <OutlinedInput
                type={"email"}
                placeholder="Enter Email Id"
                size="small"
                required={true}
                name="email"
                onChange={handleChange}
                // value={email}
                sx={{
                  width: "100%",
                  background: "white",
                  marginBottom: "8px",
                  mt: 1,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  lineHeight: "9px",
                  mt: 1,
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Password
              </Typography>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required={true}
                name="password"
                onChange={handleChange}
                size="small"
                sx={{
                  width: "100%",
                  background: "white",
                  marginBottom: "8px",
                  mt: 1,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Box sx={{ display: "flex", alignItems: "center", mt: 1.3 }}>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Captcha"
                  autoComplete="off"
                  required={true}
                  // variant="outlined"
                  type="text"
                  onPaste={(event: any) => {
                    event.preventDefault();
                    return false;
                  }}
                  onDrop={(event: any) => {
                    event.preventDefault();
                    return false;
                  }}
                  onKeyDown={(event: any) => {
                    if (event.key == "Enter") {
                      // handleLogin()
                    }
                  }}
                  value={inputCaptcha}
                  sx={{ width: "55%", background: "white" }}
                  onChange={(event: any) => {
                    setInputCaptcha(event.target.value);
                  }}
                  inputProps={{
                    style: {
                      height: "45px",
                      padding: "0 14px",
                    },
                  }}
                ></TextField>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    padding: "5px 20px",
                    fontSize: "20px",
                    width: "30%",
                    textAlign: "center",
                    margin: "auto",
                    height: "45px",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "not-allowed",
                    // border: "2px solid red",
                    backgroundColor: "#757575",
                  }}
                  fontFamily="Nunito"
                >
                  {captchaCode}
                </Typography>
                <Tooltip title="Refresh Captcha">
                  <RefreshIcon
                    onClick={refreshCapcha}
                    sx={{
                      fontSize: "33px",
                      color: "#E15A11",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
              <LoginButton
                // onClick={onSubmit}
                type="submit"
                disabled={isLoading}
                size="small"
                sx={{ fontSize: "15px", py: 1, width: "100%", mt: 2 }}
              >
                {isLoading ? "Loading..." : "Login"}
              </LoginButton>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
