import "./App.css";
import { Box, CssBaseline, Stack } from "@mui/material";
import Header from "./components/Header";
import LeftBody from "./components/LeftBody";
import CenterBody from "./components/CenterBody";
import RightBody from "./components/RightBody";
import Create from "./components/Create";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
          <Create />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
