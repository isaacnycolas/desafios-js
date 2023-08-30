const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const total = numeros.reduce(function(acumulador, valor){
  acumulador += valor;
  return acumulador;
}, 0
);
console.log(total);