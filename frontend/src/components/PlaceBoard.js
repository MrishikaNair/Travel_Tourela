import React, { useEffect, useState } from "react";

import "../styles/PlaceBoard.css";
import PlaceInfoCard from "./PlaceInfoCard";

export default function PlaceBoard({placeCardInfo, setPlaceCardInfo}){
    
    function places(placeCardInfo){
        // console.log(placeCardInfo);
        return placeCardInfo.map((place, index) => {
            return <PlaceInfoCard key={index} placeName={place.placeName} placeDays={place.placeDays} placeCardInfo={placeCardInfo} setPlaceCardInfo={setPlaceCardInfo}/>;
        })
    }
    if(placeCardInfo.length===0){
        return(
            <>
            <div id="placeBoard2">
                Added places will appear here 
            </div>
            </>
        );
    }
    else{
        return(
            <>
            <div id="placeBoard">
                {
                    places(placeCardInfo)
                }
            </div>
            </>
        );
    }

}