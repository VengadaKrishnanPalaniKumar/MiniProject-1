import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CommentRounded  from "@mui/icons-material";
function Navbar(){
    const[openMenu,setOpenMenu]=useState(false)
    const menuOption=[
        {
            text:"Home",
            icon:<HomeIcon/>,
        },
        {
            text:"About",
            icon:<InfoIcon/>,

        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon />,
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon />,
        },
    ];
    return(
        <nav>
            <div className="nav-logo-container">
               <img src="{logo}" alt=""/>
            </div>
            <div className="navbar-links-container">
                <a href ="">Home</a>
                <br></br>
                <a href ="">About</a>
                <br></br>
                <a href="">Contact</a>
                <br></br>
                <a href="">
                 <BsCart2 className="navbar-cart-icon" />
                 </a>
                 <br></br>
                 <button className="primary-button">Books</button>
               </div>
               <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
               </div>    
        </nav>
    );
}
export default Navbar




// Navbar.js
{/*import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Navbarlogo">📚 BookShop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
*/}
