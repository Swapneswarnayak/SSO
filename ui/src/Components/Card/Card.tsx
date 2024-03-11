"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Container, Grid, Typography } from "@mui/material";

import { useRouter } from "next/navigation";
import { handleRoleClick, tokenStr } from "@/Auth";

export default function SimpleSlide({ moduleList }: any) {
  const { push } = useRouter();

  const handleClickRole = async (role: any) => {
    push(`http://localhost:3001/home?email=${tokenStr.email}&role=${role}`);
  };

  return (
    <Box
      sx={{
        // height: 180,
        // width: 130,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container fixed>
        <Grid container spacing={2}>
          {moduleList.map((el: any, i: any) => {
            return (
              <Grid item xs={4}>
                <Slide
                  direction={el.direction}
                  style={{ transformOrigin: "0 0 0", height: "100%" }}
                  {...(true ? { timeout: 1000 } : {})}
                  in={true}
                  mountOnEnter
                  unmountOnExit
                >
                  <Card
                    sx={{
                      minWidth: 255,
                      boxShadow:
                        "0px 2px 5px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgb(169 172 250 / 42%), 0px 1px 5px 0px rgb(120 186 246 / 61%)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 600,
                          textAlign: "center",
                          backgroundColor: "#1976D3",
                          borderRadius: "10px",
                          color: "white",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {el.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        A UPSC gate pass grants access for Employees and
                        Officers, containing Employees/Officers details for
                        secure entry into UPSC premises.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {el.roles.map((el2: any) => {
                        return (
                          <Button
                            size="small"
                            onClick={async () => {
                              handleClickRole(el2.name);
                            }}
                            sx={{ color: "#E1780E" }}
                          >
                            {el2.name}
                          </Button>
                        );
                      })}
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
