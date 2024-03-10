"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";

const icon = (
  <Paper sx={{ m: 1, width: 800, height: 200, p: 4 }} elevation={4}>
    {/* <svg> */}
    <Box
      component="polygon"
      // points="0,100 50,00, 100,100"
      sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
        p: 3,
      }}
    >
      Module Name
    </Box>
    {/* </svg> */}
  </Paper>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        width: 130,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}
      <Box sx={{ display: "flex" }}>
        <Slide
          direction="right"
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          <h1>Module Name</h1>
        </Slide>
        <Slide
          direction="up"
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
        <Slide
          direction="down"
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
        <Slide
          direction="left"
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
