const readline = require('readline-sync');

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

const resposta = readline.questionInt('Digite um número: ');
  if (resposta < 0) {
    console.log('Por favor, digite um número válido.');
  } else {
      if (fibonacci(resposta)) {
        console.log(resposta + " pertence à sequência de Fibonacci.");
      } else {
        console.log(resposta + " não pertence à sequência de Fibonacci.");
      }
  };
