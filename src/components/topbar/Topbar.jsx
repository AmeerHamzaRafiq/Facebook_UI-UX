import React, { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCentre">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts, or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">34</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">11</span>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/rynxxJzt/AMEER-HAMZA-Copy.jpg"
          alt="Profile"
          className="topbarImg"
         
        />
      </div>
      <div className="mobileMenu" >
        <a href="#">Home</a>
        <a href="#">Timeline</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
}
