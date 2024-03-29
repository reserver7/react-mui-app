import React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const Test = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>

      <br />

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            display: { xs: "none", sm: "block" },
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>

      <Button variant="text">Hello World</Button>
      <Button
        startIcon={<AcUnitIcon />}
        variant="contained"
        fullWidth
        size="large"
      >
        Hello World
      </Button>
      <Button endIcon={<AdbIcon />} variant="outlined">
        Hello World
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": { backgroundColor: "black" },
          "&:disabled": { backgroundColor: "white", color: "black" },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>Custom Style2</CustomButton>

      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>

      <Button color="secondary" variant="contained">
        Theme Button
      </Button>
      <CustomThemeButton>CustomThemeButton</CustomThemeButton>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
};

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
  color: "white",
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 10,
  "&:hover": { backgroundColor: "black" },
  "&:disabled": { backgroundColor: "white", color: "black" },
}));

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "white",
  margin: 10,
  "&:hover": { backgroundColor: "black" },
  "&:disabled": { backgroundColor: "white", color: "black" },
});

export default Test;
