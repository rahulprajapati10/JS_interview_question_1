//Q1.  diffrence between "==" and "===" operators ?

// "==" operator is used for comparison and it checks the value whereas "===" operator checks the value as well as the data types.
// result we get only in boolean like true or false.

// use of "=="


let c = 8;
let d = 8;

console.log(c == d);   // true


let e = 7;
let f = "7"

console.log(e == f);  // true    // "==" only checks the value of the variable  it does not checks the data types




// use of "==="

let num1 = 10
let num2 = 10

console.log(num1 === num2); // true

let num4 = 34;
let num5 = 34;

console.log(num4 === num5);








// Q2 . What is the diffrence between the var, let , and const?

// var , let and const all these are used to create the variable but  var is a global scope and let and const are the block scope .
// variable created with var can be reassigned the value and can be redeclared .
// variable created with let can be reassign the value but can not be redeclared.
// variable created with const can not be reassign the value not redeclared.  const is a constant value that can not be changed. 







// Q3. What is execution context ?

//  An execution context in JavaScript is a crucial concept that defines the environment in which JavaScript code is executed.
//  It encompasses various elements that determine how variables, functions, and objects are accessed and manipulated during runtime.






// Q4. what is the creation  phase and what is the execution phase ?

//  creation phase is that when we create the variabe by declaring and assigning the value of the variable before the code execution .

// execution phase is that when our iterpreter checks the code and the JavaScript engine executes the code line by line 
// then it sends for the execution of the code so in this phase is called execution phase.







// Q5. Diffrence between the undefined , not defined and NaN ?

// undefined means the variable is declared but value is not assigned to that variable so in this case we get the undefined

// not defined means if the variable is not declared then it will throw the error not defined.

// NaN This represents a value that is not a valid number. It is a special value used to denote that 
// an arithmetic operation resulted in something that cannot be represented as a number.







// Q6. how many operators do we have in javascript ?

// 1. Arithmetic Operators

// Used for performing mathematical calculations.

// + , - , * , / , % , ** , ++ , -- 


// 2. Assignment Operators

// Used to assign values to variables.

// = , += , -= , *= , /= , %=  , **= 



// 3. Comparison Operators

// Used to compare values.

// ==  , ===  , != , !==  , > , <  , >= , <= 

// 4. Logical Operators

// Used for logical operations.

// && , || , ! 


// 5. Bitwise Operators

// Used for performing bit-level operations.

// & , | ^ , ~  , << ,  >> , >>> 


// 6. String Operators

// Used for string manipulation.

// + , += 



// 7. Ternary (Conditional) Operator

// The only ternary operator in JavaScript, used as a shorthand for if-else.

// condition ? expressionIfTrue : expressionIfFalse


// 8. Type Operators

// Used to check the type or instance of an object.

// typeof  , instanceof 



// 9. Comma Operator

// ,




// Q7 . Explain the local scope , block scope , functional scope and scope chain in javascript ?

// 1. Local Scope

// Local Scope: Variables declared within a function and only accessible within that function.

//                                              OR

// Local scope refers to variables that are defined within a function. Variables in the local scope can only be 
// accessed within the function in which they are declared.
// Variables declared with var, let, or const inside a function are in the local scope.
// These variables are not accessible outside of the function.


// 2. Block Scope

// Block Scope: Variables declared within a block ({}) and only accessible inside the block (let, const).

//                                              OR

// Block scope refers to variables declared inside a block, such as inside {}. In JavaScript, only variables declared 
// with let and const are block-scoped. This means these variables are only available within the block where they are defined.
// Variables declared with let and const inside a block are block-scoped.
// Variables declared with var are not block-scoped but are function-scoped.



// 3. Function Scope (Functional Scope)

// Function Scope: Variables declared with var are function-scoped, meaning they are accessible anywhere in the function,
// regardless of block boundaries.

//                                              OR

// Function scope refers to variables declared inside a function. Variables declared with var (as opposed to let or const)
//  are function-scoped, meaning they are accessible throughout the entire function, regardless of where they are declared within the function.
// Variables declared with var are function-scoped, meaning their scope is tied to the function in which they are declared.
// Even if var is declared inside a block like if, for, or while, it will still be accessible throughout the function.




// 4. Scope Chain

// Scope Chain: The mechanism JavaScript uses to resolve variable references, starting from the current scope and
// moving outward to the parent scopes, up to the global scope.

//                                               OR

// The scope chain refers to the mechanism by which JavaScript resolves variable access. When a variable is used, JavaScript first looks
//  at the current scope to find the variable. If it is not found, it looks at the outer scope, continuing until it reaches the global scope.
// This chain of scopes is known as the scope chain.
// Each function creates a new scope, and each scope has access to its own variables as well as variables in its outer (parent) scope.
// The scope chain is used to resolve variable references, starting from the innermost scope and moving outward.



