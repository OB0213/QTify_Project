import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    palette: {
      typography: {
        fontFamily: "Poppins, sans-serif", // 👈 Important: no extra quotes!
      },
      primary: {
        main: "#34C94B",
      },
      secondary: {
        main: "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar />
    </ThemeProvider>
  )
}

export default App
