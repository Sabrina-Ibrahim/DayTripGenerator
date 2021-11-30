"use strict";
//As a user, I want a destination to be randomly selected for my day trip.
//pick multiple places and create a generator to output more than one place.
//try an array and loop.

let places = ["Greece", "Cuba", "Japan", "Thailand"];
let random = places[Math.floor(Math.random() * places.length)]

//As a user, I want a restaurant to be randomly selected for my day trip.
let restaurant = ["The Spring Oyster", "Skyward", "The Signature Room", "Single Shot"]
let randomFood = restaurant[Math.floor(Math.random() * restaurant.length)]

//As a user, I want a mode of transportation to be randomly selected for my day trip.
let transportation = ["Private Jet", "Boat", "Tesla", "Train"]
let rantrans = transportation[Math.floor(Math.random() * transportation.length)]

//As a user, I want a form of entertainment to be randomly selected for my day trip.
let entertainment = ["Comedy Show", "Hiking", "Karaoke", "Amusement Parks"]
let funThings = entertainment[Math.floor(Math.random() * entertainment.length)];
console.log(random + (", ") + randomFood + (", ") + rantrans + (", and ") + funThings);

//As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
//Try prompts to see whether or not they like their trip options, if they do congratulate them and keep output. Reprint.
//If not, re-run options they want to redo. 

let userInput = prompt("Are you happy with your day trip options?");
    if(userInput == "yes"){
    console.log((random + (", ") + randomFood + (", ") + rantrans + (", and ") + funThings));
    }
    else {
        let newInput = prompt("Do you want to change the destination or entertainment?");
        if(newInput == "destination"){
            random = (places[Math.floor(Math.random() * places.length)])
        } 
        else if(newInput == "entertainment"){
            funThings = (entertainment[Math.floor(Math.random() * entertainment.length)])
        }
    }
