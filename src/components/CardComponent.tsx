import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardComponent = ({ title, value, color, icon }) => {
  return (
    <Card
      sx={{
        minWidth: 230,
        maxWidth: 250,
        borderRadius: 2,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      
      <Box
        sx={{
          backgroundColor: color,
          padding: "10px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 600 }}>
          {title}
        </Typography>
        <IconButton sx={{ color: "#fff" }}>{icon}</IconButton>
      </Box>

    
      <CardContent
        sx={{
          textAlign: "left",
          padding: "10px 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      </CardContent>

      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 15px",
          borderTop: "1px solid #ddd",
          color: "#888",
          fontSize: "14px",
        }}
      >
        <span>View details</span>
        <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
      </Box>
    </Card>
  );
};

export default CardComponent;
