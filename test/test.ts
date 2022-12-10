import all_possible_nums from "./../index";

let allCombitions = all_possible_nums({
    "one": [1],
    "two": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "three": [1]
})

console.log(allCombitions)