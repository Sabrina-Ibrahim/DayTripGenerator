//As a user, I want a destination to be randomly selected for my day trip.
//pick multiple places and create a generator to output more than one place.
//try an array and loop.
"use strict"

let places = ["Greece", "Cuba", "Japan", "Thailand"];
let random = places[Math.floor(Math.random() * places.length)]
console.log(random);

//As a user, I want a restaurant to be randomly selected for my day trip.
let restaurant = ["The Spring Oyster", "Skyward", "The Signature Room", "Single Snhot"]
let randomFood = restaurant[Math.floor(Math.random ()* restaurant.length)]
console.log(randomFood);