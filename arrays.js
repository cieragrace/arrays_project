// Pop Method-removes last element of array:
var favFood = ["fruit", "candy", "salmon", "fries", "cheeseIts"];
favFood.pop();

console.log(favFood);

// Push method-adds new items at end of array:
var streetNumber = [347, 1519, 2660, 336];
streetNumber.push(5467, 243);

console.log(streetNumber);

// Shift Method-removes the first item of array
var iLike = [true, true, true, false];
iLike.shift();

console.log(iLike);

// index- The thing to remember with index positions is they will always begin
// with 0 and then work up from there. So 2660 in streetNumber is actually 2
// rather than 3. Even if the elements are our of order numerically like in
// the streetName variable,the search will run left to right, rather than
// numberically.
