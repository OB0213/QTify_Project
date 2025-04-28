import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Box,
} from "@mui/material";
import Logo from './Logo';
import Searchbar from './Searchbar';
import Buttondata from './Buttondata';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />

        <Searchbar placeholder={"Search a album of your choice"}/>

        <Buttondata text={"Give Feedback"}></Buttondata>
     
      </Toolbar>
    </AppBar>
  );
}

export default Navbar

