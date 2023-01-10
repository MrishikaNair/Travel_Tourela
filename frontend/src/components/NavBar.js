import '../styles/NavBar.css';
import React from 'react';
import tourelaLogoWhite from "../assets/tourelaLogoWhite.png";
import { process_params } from 'express/lib/router';


import { Outlet, Link } from "react-router-dom";

function NavBar(props) {

  // HomePage
  if(props.page==="home"){
    return (
    <>
    <div id="headingText">
        Tourela
    </div>

    <div id='navbar'>
      
      <div id="logo">
        <Link to="/">
          <img id="logoImg" src={tourelaLogoWhite} ></img>
        </Link>
      </div>

      <div id='navButtons'>
        <Link to="/Categories">
          <button class='buttons' id='cta'>
            <div class='buttonText' id='ctaText'>
              Start Planning
            </div>
          </button>
        </Link>
        <button class='buttons' id='profileButton'></button>
      </div>
      <Outlet />
    </div>
    </>
  );
  }

  // categories page
  else if(props.page=="categories"){
    return(
      <>
      <div id="headingText">
        Tourela
      </div>

      <div id='navbar'>
        
        <div id="logo">
          <Link to="/">
            <img id="logoImg" src={tourelaLogoWhite} ></img>
          </Link>
        </div>

        <div id='navButtons'>
          {/* <Link to="/Categories">
            <button class='buttons' id='cta'>
              <div class='buttonText' id='ctaText'>
                Start Planning
              </div>
            </button>
          </Link> */}
          <button class='buttons' id='profileButton'></button>
        </div>
        <Outlet />
      </div>
      </>
    );
  }

  else if (props.page === "Results"){
    return(
      <>
      <div id="headingText">
        Tourela
      </div>

      <div id='navbar'>
        
        <div id="logo">
          <Link to="/">
            <img id="logoImg" src={tourelaLogoWhite} ></img>
          </Link>
        </div>

        <div id='navButtons'>
          {/* <Link to="/Categories">
            <button class='buttons' id='cta'>
              <div class='buttonText' id='ctaText'>
                Start Planning
              </div>
            </button>
          </Link> */}
          <button class='buttons' id='profileButton'></button>
        </div>
        <Outlet />
      </div>
      </>
    );
  }

  else if (props.page === "Itinerary"){
    return(
      <>
      <div id="headingText">
        Tourela
      </div>

      <div id='navbar'>
        
        <div id="logo">
          <Link to="/">
            <img id="logoImg" src={tourelaLogoWhite} ></img>
          </Link>
        </div>

        <div id='navButtons'>
          {/* <Link to="/Categories">
            <button class='buttons' id='cta'>
              <div class='buttonText' id='ctaText'>
                Start Planning
              </div>
            </button>
          </Link> */}
          <button class='buttons' id='profileButton'></button>
        </div>
        <Outlet />
      </div>
      </>
    );
  }
  
}

export default NavBar;