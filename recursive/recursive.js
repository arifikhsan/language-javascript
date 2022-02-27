// 4! = 4 x 3 x 2 x 1 = 24
const factorial = (number) => {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1)
  }
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
