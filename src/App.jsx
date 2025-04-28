import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#34C94B",
      },
      secondary: {
        main: "#121212",
      },
      typography: {
        fontFamily: `'Poppins', sans-serif`, 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    </ThemeProvider>
  )
}

export default App
