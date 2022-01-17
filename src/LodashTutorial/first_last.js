const _ = require("lodash");

let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

let fElement = _.first(words);
let lElement = _.last(words);

console.log(`First element: ${fElement}`);
console.log(`Last element: ${lElement}`);