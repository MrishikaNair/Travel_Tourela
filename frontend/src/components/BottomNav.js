import "../styles/BottomNav.css";

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function BottomNav(props){
    if(props.page=="categories"){
        function setCat(){
            sessionStorage.setItem("userCategories", JSON.stringify(props.selectedCategories));
        }

        return(
            <>
            <div id="buttonsWrapper">
                <div id="buttons">
                    <Link to="/">   
                        <button className="navButton2" id="backBtn">
                            <div className="btnText">
                                Back
                            </div>
                        </button>
                    </Link>
                    <Link to="/startplanning">
                        <button className="navButton1" id="nextBtn" onClick={setCat}>
                            <div className="btnText" >
                                Next
                            </div>
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
            
            </>
        );
    }
    else if(props.page=="startplanning"){
        function setInfo(){
            sessionStorage.setItem("placeList", JSON.stringify(props.placeList));
            sessionStorage.setItem("pacing", JSON.stringify(props.pacing));
            sessionStorage.setItem("startDate", JSON.stringify(props.startDate));
            sessionStorage.setItem("numOfPeople", JSON.stringify(props.numOfPeople));
            console.log(sessionStorage);
        }
        return(
            <>
            <div id="buttonsWrapper">
                <div id="buttons">
                    <Link to="/categories">    
                        <button className="navButton2" id="backBtn">
                            <div className="btnText">
                                Back
                            </div>
                        </button>
                    </Link>
                    <Link to="/results">
                        <button className="navButton1" id="nextBtn" onClick={setInfo}>
                            <div className="btnText">
                                Next
                            </div>
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
            
            </>
        );
    }

    else if(props.page=="Results"){
        function setPlaces(){
            sessionStorage.setItem("itinerary", props.itineraryPlaces)
        }
        return(
            <>
            <div id="buttonsWrapper">
                <div id="buttons">
                    <Link to="/startplanning">    
                        <button className="navButton2" id="backBtn">
                            <div className="btnText">
                                Back
                            </div>
                        </button>
                    </Link>
                    <Link to="/itinerary">
                        <button className="navButton1" id="nextBtn" onClick={setPlaces}>
                            <div className="btnText">
                                Done
                            </div>
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
            
            </>
        );
    }
} 