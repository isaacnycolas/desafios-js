//VERIFICAR SE É PAR 
const numeros = [5, 50, 80, 1, 2, 4, 5, 7, 11, 15, 22, 27]
function retornarPares(numeros){
    const num2 = numeros.filter((valor) => {
    return valor % 2 === 0;
})
return num2;
}
const numbers = retornarPares(numeros)
console.log(numbers)