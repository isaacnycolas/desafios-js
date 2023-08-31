function numeralToRoman(numero) {
    const romanos = [
        {algarismo: 'M', value: 1000},
        {algarismo: 'CM', value: 900},
        {algarismo: 'D', value: 500},
        {algarismo: 'CD', value: 400},
        {algarismo: 'C', value: 100},
        {algarismo: 'XC', value: 90},
        {algarismo: 'L', value: 50},
        {algarismo: 'XL', value: 40},
        {algarismo: 'X', value: 10},
        {algarismo: 'IX', value: 9},
        {algarismo: 'V', value: 5},
        {algarismo: 'IV', value: 4},
        {algarismo: 'I', value: 1}
    ];
    if(numero <= 0 || numero > 3999){
        return "Número inválido em romano"; //nota do cabecafria: O maior número que se pode declarar em romano é 3999 (mais que isso, o programa vai acabar imprimindo um número errado). 
    } 
    let resultado = '';
    for (let i = 0; i < romanos.length; i++) {
        while (numero >= romanos[i].value) {
            resultado += romanos[i].algarismo;
            numero -= romanos[i].value;
        }
    }
    return resultado;
}
console.log(numeralToRoman(1)); 