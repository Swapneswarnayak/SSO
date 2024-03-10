import { Button, Typography, styled } from "@mui/material";

 const parentBox={
    height:"100vh",
    backgroundImage: `url(/Banner.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"

}

const Heading1 = styled(Typography)(({ theme }:any) => ({
    padding: theme.spacing(1),
    color: "black",
    fontFamily: "Nunito, sans-serif",
    lineHeight: "41.72px",
    fontWeight: 700,
  }));


  const logoBox={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "10%",
  }

  const heading1Style={
    color: "#fff900",
    lineHeight: "28px",
    fontSize: {
      xs: "11.26",
      sm: "8.26",
      md: "9.26px",
      lg: "12.26px",
      xl: "17.26px",
    },
  }

  const loginText={
    letterSpacing: "0em",
    textAlign: "center",
    lineHeight: "30px",
    color: "white",

    justifyContent: "center",
  }

  const sideBox={
    width: "29%",
    height: "100%",
    background: "#000000b3",
  }

  
  const LoginButton = styled(Button)`
    width: auto;
    height: auto;

    background: #e15a11;
    font-weight: 600;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    box-shadow: 0px 0px 19px -10px rgba(215, 215, 215, 0.25);
    color: white;
    &:hover {
      background-color: #e15a11;
    }
  `;
  

  export {
    parentBox,Heading1,logoBox,heading1Style,loginText,sideBox,LoginButton
  }