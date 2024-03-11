function fibonacci(num) {
  let a = 0;
  let b = 1;
  
  while (a <= num) {
    if (a === num) {
      return true;
    }
    let temp = a + b;
    a = b;
    b = temp;
  }
  return false;
}

let numeroInformado = 26;
if (fibonacci(numeroInformado)) {
  console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
