const readline = require('readline-sync');

function inverter(texto) {
  let textoFinal = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    textoFinal += texto[i];
  }
  return textoFinal;
}

const textoExemplo = readline.question('Digite a string a ser invertida: ');

console.log(inverter(textoExemplo));






