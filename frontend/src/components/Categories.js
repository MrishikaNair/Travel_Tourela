import "../styles/Categories.css";

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";

import img1 from "../assets/categories/historicSitesImg.png";
import img2 from "../assets/categories/bodyRelaxingImg.png";
import img3 from "../assets/categories/religiousSitesImg.png";
import img4 from "../assets/categories/parksAndGardensImg.png";
import img5 from "../assets/categories/outdoorsImg.png";
import img6 from "../assets/categories/museumsImg.png";
import img7 from "../assets/categories/cuisinesImg.png";
import img8 from "../assets/categories/shoppingImg.png";
import img9 from "../assets/categories/funAndGamesImg.png";
import img10 from "../assets/categories/drinksAndDanceImg.png";

function Categories(){
    const [selectedCategories, setCategories] = useState([]);

    return (
        <>
        <NavBar page="categories"/>

        <div id="categoriesHeadingWrapper">
            <div id="categoriesHeading">
                Choose your areas of interest
            </div>
        </div>


        <div id="categoryCardsWrapper">
            <div id="categoryCards">
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={1} text="Historic Sites" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={2} text="Body Relaxing" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={3} text="Religious Sites" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={4} text="Parks and Gardens" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={5} text="Outdoors" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={6} text="Museums" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={7} text="Cuisines" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={8} text="Shopping" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={9} text="Fun and Games" />
                <CategoryCard setCategories={setCategories} selectedCategories={selectedCategories} num={10} text="Drinks and Dance" />
            </div>
        </div>

        <BottomNav page="categories" selectedCategories={selectedCategories}/>
        </>
    );
}

function CategoryCard(props){
    const i = props.num;

    function selectCategory(e){
        const arr = [...props.selectedCategories];
        if(arr.includes(i)){
            for(let j=0; j < arr.length; j++){
                if(arr[j] === i){
                    arr.splice(j,1);
                }
            }
            props.setCategories(arr);
        }
        else{
            props.setCategories([...arr, i]);
        }
        return (e.target.classList.toggle('activeCard'));
    }

    return (
        <>
        <div class="categoryCard" id={"card"+props.num}>
            <img class="cardImg2" src={imgsrc(props.num)} onClick={selectCategory}></img> 
            <div class="categoriesFilm" id="film1"></div>
            <div class="categoriesCardText" id="text1">{props.text}</div>
        </div>
        </>
    );
}

    function imgsrc(i){
        switch(i){
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            case 4:
                return img4;
            case 5:
                return img5;
            case 6:
                return img6;
            case 7:
                return img7;
            case 8:
                return img8;
            case 9:
                return img9;
            case 10:
                return img10;
            default:
                return null;
        }
    }
export default Categories;
