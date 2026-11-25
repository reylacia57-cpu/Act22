// Requirement 4: Arrow function 1
const isEven = (n) => n % 2 === 0;
// Requirement 4: Arrow function 2
const isPositive = (n) => n > 0;

const arr1 = [-2, 1, 2, 3];
const arr2 = [4, -5, 6, 7];

// Requirement 1: Array using .filter() (Array 1)
const filtered1 = arr1.filter((n) => isEven(n));
// Requirement 1: Array using .filter() (Array 2)
const filtered2 = arr2.filter((n) => isPositive(n));

// Requirement 3: Spread operator on arrays
const combinedFiltered = [...filtered1, ...filtered2];
console.log(combinedFiltered);
