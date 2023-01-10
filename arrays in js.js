
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

// console.log(s);
// console.log(un);

// console.log(num);


// using delete function 

// console.log(num.length);

// delete num[0]; // the delete funtion doesnt affects on the arrays length the leaves it blank and the length of an array remains same.

// console.log(num);


// concatenating the two arrays 

let num_more = [72, 55, 26, 66, 14, 25, 48];

let newArray = num.concat(num_more); // by using this we can cancatenate multiple arrays and it does not changes the existence of an ld array.

// console.log(newArray);


// sorting the arrays 

let sorted_array = newArray.sort();

// console.log(sorted_array);

// this sorts an array and changes the original array. Sort method sorts all elements alphabetically. Sort have a compare function also.


// reversing an array 

let reverse_array = newArray.reverse();

// console.log(reverse_array); // this will change the original array.
console.log(newArray);


// splice

// syntax |> array.splice(start_index, number of elements, values)

// newArray.splice(2, 4, 1024, 1025, 1026, 1027);
// console.log(newArray);

// slice

// syntax |> array.slice(start_index, end_index{ last index is not included})

let sliced_array = newArray.slice(6);
let new_sliced_array = newArray.slice(2, 7);

console.log(sliced_array);
console.log(new_sliced_array);
