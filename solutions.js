// Suma de dos números
function sum(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

// Factorial of a Number
function factorial(n) {
  if (Number.isInteger(n)) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let a = 1;
      for (let i = n; i > 1; i--) {
        a *= i;
      }
      return a;
    }
  } else {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  // Add your code here
}

// Find the Largest Number
function findLargest(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
  }
  return Math.max(...arr);
}

function countVowels(str) {
  if (typeof str === "string") {
    let palabra = str.toLowerCase();
    let vocales = palabra.match(/[aeiou]/g);
    let total= voacles.size();
    return total;
  } else {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (Number.isInteger(n)) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  } else {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
