// VARIABLES
// For the navigator (person giving instructions),
// Define three variables: `name`, `numberOfSiblings`, and `isBilingual`. Determine which should be constants and which may change.
let name = "Oscar"
let numberOfSiblings = 5
let isBilingual = false
// Assign corresponding values with the most appropriate types for each



// Print these variables to the console.
console.log(name)
console.log(numberOfSiblings)
console.log(isBilingual)

// RE-ASSIGNMENT
// Create a variable `counter` and initialize it with 0.
let counter = 0
// Set it to a larger value
counter = 1
// Increment the `counter` by 1 without specifying the number!
counter = counter + 1
// Print the updated value of `counter`.
console.log(counter)

// DATA TYPES
// Create variables for various primitive data types: `number`, `string`, `boolean`, and `null`.
let number = 1
let string = "Idk" 
let boolean = true
let zero = null


// Print the values and confirm their type using typeof
console.log(number)
console.log(string)
console.log(boolean)
console.log(zero)



// Create a variable that has an undefined type 
let array = []
// Print the variable and confirm its type
console.log(array)


// EXTRA CREDIT (Google these!)
// Make an array of siblings/languages that you speak
let siblings = ["O.A","A.A","M.A"]
let languages = ["Spanish", "English"]

// Make an object with your name, siblings, and languages
let object = {
  name: name,
  siblings: siblings,
  languages: languages
}


// Try printing the number of siblings you have using ONLY the object (Hint: look up how to find the length of an array)
console.log(object.name)
console.log(object.siblings)
console.log(object.languages)
