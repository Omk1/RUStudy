/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import {Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Groups",
    }
   
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <h1>RU Study</h1>
      </div>
      <div className="navbar-links-container">
        <a className = "a-nolinks" href="">Home</a>
        <a className = "a-nolinks" href="">About</a>
        <a href=""><Link className = "links" to = '/Groups'><span>Groups</span></Link></a>
        
        <button className="primary-button">
          <Link className = "button-link" to = '/LoginPage'>Sign Up/Sign In</Link>
        </button>
        <script src = "javasript.js" >
          
        </script>
      </div>
      
    </nav>
  );
};

export default Navbar;
