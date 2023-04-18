import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff">
      <Stack
        borderTop="1px solid red"
        direction="row"
        gap="40px"
        justifyContent="center"
        alignItems="center"
        px="40px"
        pt="24px"
        mb="20px"
      >
        <img src={Logo} alt="logo" width="auto" height="40px" />
        <Typography
          fontWeight="800"
          color="red"
          variant="h5"
          fontStyle="italic"
        >
          “Just believe in yourself. Even if you don’t, just pretend that you do
          and at some point, you will.”
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
