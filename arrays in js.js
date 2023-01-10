
// This file contains array and array methods

let a = [1, 2, "Not Given", 3, 4, 5];

// console.log(a);

// |> accessing values from arrays

// console.log(a[0]); //  this will only prnt the value of a[0's_element]. this can be used for all indexes. the index always starts from the 0.

// console.log(a[7]); // this will print undefined because the index 7 isn't present in the array a.

// printing the list of a list 

// console.log(a.length); // this is print the total numbers of items present in list.

// adding a new value to the array

a[8] = 45;

// console.log(a[8]);
// also using this way we can change the values of a list.

a[2] = "Given";

// console.log(a[2]);




// Array methods 

let num = [21, 92, 53, 47, 45]

// converting arrays to string


let b = num.toString()

// console.log(b);
// console.log(typeof b);


// join method joins the method all elements of an array using a seprator 

let c = num.join("-");

// console.log(c);
// console.log(typeof c);

// pop methods are used to pop out the last element of an array 

let r = num.pop()

// console.log(r);
// console.log(typeof r);


// push add a new element in the end of an array

let m = num.push(55);

// console.log(m);
// console.log(typeof m);


// shift is used for removing the first element of an array and unshift is used to add a new element at first position

let s = num.shift();

let un = num.unshift(35);

console.log(s);
console.log(un);


console.log(num);