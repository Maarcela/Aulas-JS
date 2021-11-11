const funcionarias = [
    {
        id: 1,
        nome: 'Juliana',
        salário: 4400,
    },
    {
        id: 2,
        nome: 'Jade',
        salário: 4000,
    },
    {
        id: 3,
        nome: 'Julia',
        salário: 4500,
    },
    {
        id: 1,
        nome: 'Jessica',
        salário: 4800,
    },
    {
        id: 2,
        nome: 'Wally',
        salário: 4800,
    },


];
funcionarias.forEach((funcSalario) => console.log (`funcionarias(os): ${funcSalario.nome} tem o salário $${funcSalario.salário} Reais`));
console.log('') 
/*Reajuste */

let salarioNovo = funcionarias.map((novoSalario) => {
    let aumento = novoSalario.salário * 0.05;
    return aumento + novoSalario.salário;
}); 
console.log(`O novo salário: ${salarioNovo}`);
console.log('')

//Recebem mais de 5mil
let filtro = salarioNovo.filter((salario)=>{
    return salario >= 5000;
})
console.log(`Salário maior é:${filtro}`);
console.log('')

//funcionario Wally
console.log(funcionarias.find((funcionaria)=>{
    console.log(`funcionario:`)
    return funcionaria.nome === 'Wally';
}));


