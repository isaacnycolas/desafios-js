const pessoas = [
    {name: "João",  city: "Rio Branco", age: 19}, 
    {name: "Maria",  city: "Porto Velho", age: 15}
]
function idadeLegal(pessoas){
    const demaiores = pessoas.map(function(pessoa){
    const maioridade = pessoa.age >= 18
    return {...pessoa, legalAge: maioridade};
    })
    return demaiores;
}

const demaiores = idadeLegal(pessoas);
console.log(demaiores)