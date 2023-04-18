import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/bodypart.png";
import TargetImage from "../assets/icons/muscle.png";
import EquipmentImage from "../assets/icons/machine.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      type: "Body Part",
    },
    {
      icon: TargetImage,
      name: target,
      type: "Target Muscle",
    },
    {
      icon: EquipmentImage,
      name: equipment,
      type: "Equipment",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography color="#ff2625" textTransform="capitalize" variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "100px", height: "100px" }}
              />
            </Button>
            <Stack>
              <Typography
                color="#ff2625"
                fontStyle="italic"
                fontWeight="600"
                textTransform="capitalize"
                variant="h6"
                borderTop="1px solid red"
                borderBottom="1px solid red"
              >
                {item.type}
              </Typography>
              <Typography
                color="#000"
                fontWeight="600"
                textTransform="capitalize"
                variant="h5"
              >
                {item.name}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
