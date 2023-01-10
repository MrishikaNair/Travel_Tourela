import React from "react";

import "../styles/PredictionCard.css";

export default function PredictionCard({ result , itineraryPlaces, setItineraryPlaces}){
    function addToFinal(){
        setItineraryPlaces([...itineraryPlaces, result])
    }
    return(
        <>
        <div className="predCardContainer">
            <div className="predCardName">{result.name}</div>
            <div className="predCardAddr">{result.formatted_address}</div>
            <button className="predBtn" onClick={addToFinal}>Add</button>
        </div>
        </>
    );
}