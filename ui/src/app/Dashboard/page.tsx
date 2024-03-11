"use client";
import { getModuleandRoles } from "@/Auth";
import SimpleSlide from "@/Components/Card/Card";
import { Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [moduleList, setModuleList] = useState<any>([]);
  useEffect(() => {
    fetchModule();
  }, []);

  const fetchModule = async () => {
    try {
      const response = await getModuleandRoles();
      console.log(response.data.data, "data");
      setModuleList(response.data.data);
    } catch (err: any) {
      console.log(err, "error");
    }
  };
  return (
    <Box sx={{ height: "100%" }}>
      <SimpleSlide moduleList={moduleList} />
    </Box>
  );
};

export default DashboardPage;
