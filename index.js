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
let rantrans = transportation [Math.floor(Math.random() * transportation.length)]

//As a user, I want a form of entertainment to be randomly selected for my day trip.
let entertainment = ["Comedy Show", "Hiking", "Karaoke", "Amusement Parks"]
let funThings = entertainment[Math.floor(Math.random() * entertainment.length)];
console.log(random + (", ") + randomFood + (", ") + rantrans + (", and ") + funThings);