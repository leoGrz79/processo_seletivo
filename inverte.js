function inverter(texto) {
  let textoFinal = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    textoFinal += texto[i];
  }
  return textoFinal;
}

const textoExemplo = 'Leonardo';
console.log(inverter(textoExemplo));
