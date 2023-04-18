import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/dumbell.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#000" fontStyle="italic" fontSize="22px">
        “Push harder than yesterday<br/> if you want a different tomorrow.”
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        A little progress <br /> each day adds up to <br/><span style={{ color: "#ff2625" }}>BIG results.</span>
      </Typography>
      <Typography fontSize="22px" fontStyle="italic" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.2,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="100px"
      >
        Sweat, Smile and Repeat
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
