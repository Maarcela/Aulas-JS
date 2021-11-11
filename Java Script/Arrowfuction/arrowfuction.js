/*/ Funções (simples)
//var num3 = 3
function addNums(num1 = 2, num2 = 5) {
    return num1 + num2;
}
console.log(addNums());
console.log(addNums());
/*Criação da variável, com um novo número 
let x = addNums(10, 8);
console.log(x);

function válida(x) {
    console.log(x);
    if (x > 25) {
        return 'É maior';
    } else {
        return 'É menor';
    }
}
console.log(x);*/

//Atividade 1, functiom com objetos
let z = 'notebook';
const notebook = {
    type: 'Motion',
    model: 'Q464C',
    color: 'Red',
    memória: '4GB',
    processador: 'Intel Atom Quad-core',
};
console.log(notebook);

//Atividade 2
console.clear();

let y = myfunc(365, 2);
console.log(y)

function myfunc(num3, num4) {
    return num3 * num4;
} 

// Atividade 3 Arrow 
console.clear();
function boasVindas() {
    alert('Mensagem gerada com sucesso! -.-');
    console.log('Mensagem gerada com sucesso! -.-');
}
const evenClique = () => {
    alert('Você clicou no botão, seja feliz!');
    console.log('Você clicou no botão, seja feliz!');
};
