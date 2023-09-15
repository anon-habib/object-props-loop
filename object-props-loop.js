/* property, value accessing */
let shoppingCart= {
    mango: '3kg',
    books: 3,
    mobile: 1,
    computer: 1,
    shampoo: 2,
    fish: 'ilish mach'
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