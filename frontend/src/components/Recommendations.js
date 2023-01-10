import '../styles/Recommendations.css';

import React from "react";

import agraImg from "../assets/recommendations/agraImg.png";
import jaipurImg from "../assets/recommendations/jaipurImg.png";
import kolkataImg from "../assets/recommendations/kolkataImg.png";
import amritsarImg from "../assets/recommendations/amritsarImg.png";

function Recommendations(){
    return(
        <>
        <div id="title">
            Popular places you can visit
        </div>

        <div id="cardsWrapper">
            <div id="cards">
                <div class="card" id="card1">
                    <img src={agraImg} class="cardImg" id="cardImg1"></img> 
                    <div class="film" id="film1"></div>
                    <div class="cardText" id="text1">Agra</div>
                </div>
                <div class="card" id="card2">
                    <img src={jaipurImg} class="cardImg" id="cardImg2"></img> 
                    <div class="film" id="film2"></div>
                    <div class="cardText" id="text2">Jaipur</div>
                </div>
                <div class="card" id="card3">
                    <img src={kolkataImg} class="cardImg" id="cardImg3"></img> 
                    <div class="film" id="film3"></div>
                    <div class="cardText" id="text3">Kolkata</div>
                </div>
                <div class="card" id="card4">
                    <img src={amritsarImg} class="cardImg" id="cardImg4"></img>
                    <div class="film" id="film4"></div> 
                    <div class="cardText" id="text4">Amritsar</div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Recommendations;