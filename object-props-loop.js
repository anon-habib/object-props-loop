/* property, value accessing */
let shoppingCart= {
    mango: '3kg',
    books: 3,
    mobile: 1,
    computer: 1,
    shampoo: 2,
    fish: 'Pangash mach'
}
console.log(shoppingCart);

// accessing all properties in an object, this returns an array
let allProperties = Object.keys(shoppingCart);
console.log(allProperties);

// accessing all values of property in an object, this returns an array
let allValues = Object.values(shoppingCart);
console.log(allValues);

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