/* *********
property, value accessing
********* */
let shoppingCart= {
    mango: '3kg',
    books: 3,
    mobile: 1,
    computer: 1,
    shampoo: 2,
    fish: 'Pangash mach',
    shirt: 5
}
console.log(shoppingCart);

// accessing an object property/key's value by dot notation
let booksCount = shoppingCart.books
console.log(booksCount);

// accessing an object property/key's value in alternative 
let computerCount = shoppingCart['computer'];
console.log(computerCount);

// accessing an object property/key's value by a variable
let whichFish = 'fish'
let myFish = shoppingCart[whichFish]; // this is the same as above but with variables instead of strings
console.log(myFish);

/* set property values  */
shoppingCart.shampoo = 5;
shoppingCart['books'] = 10;
shoppingCart[whichFish] = 'Ilish mach';
console.log(shoppingCart);

// accessing all properties in an object, this returns an array
let allProperties = Object.keys(shoppingCart);
console.log(allProperties);

// accessing all values of property in an object, this returns an array
let allValues = Object.values(shoppingCart);
console.log(allValues);

/* *********
looping through objects to find properties and values. (long method)
********* */
// to access all single property/keys, first, access all property/keys by Object.keys (check line no 35), this returns an array, then loop the array. here allProperties is an array.
for (let i = 0; i < allProperties.length; i++){
    let singleProperty = allProperties[i];
    console.log(singleProperty);
}

// to access all single values, first, access all values by Object.values (check line no 39), this returns an array, then loop the array. here allProperties is an array.
for (let i = 0; i < allValues.length; i++){
    console.log(allValues[i]);
}
