/* esboço do excercicio, pois assim , só mostra a contagem do contador
let i = 1;
do {
    console.log('tabuada:', i);
    i = i + 1;
} while (i <= 10);
*/

//Tabuada do 2

/*let y = 0;
while (y <= 10) {
    console.log('Tabuada :', y + 'x' + 2 + '=' + y * 2);
    y = y + 1;
}*/

/*/Evento
console.clear();
const boasVindas = () => {
    alertCookies('gerando cookies');
    console.log('gerando cookies');
};

const eventClique = () => {
    console.log('Você clicou no botão');
};
const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
};

//Aula 26 strings, Objetos e arrays
/*Objetos
let pessoa = {
    firstName: 'Irmão do',
    lastName: 'Jorel',
    idade: 10,
    corDosOlhos: 'preto',
    hobbies: ['música', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bobos',
        numero: 55,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};
/*Objeto dentro de objeto
console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);*/

// Atribuição via desestruturação
/*Variável dentro de Variável, como se fosse o código resumido 
console.clear();
const {
    firstName,
    lastName,
    endereco: { cidade },
} = pessoa;
console.log(`${firstName} ${lastName} é de ${cidade}`);*/

console.clear();
let x = {
    firstName: 'juliana',
    lastName: 'Silva',
    idade: 18,
    corDosOlhos: 'verde',
    hobbies: ['música', 'filmes', 'livros'],
    endereco: {
        rua: 'Rua rosalina',
        numero: 55,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};
console.log(x);
console.log(x.firstName.lastName);
console.log(x.idade.lastName, x.firstName.idade);
console.log(x.corDosOlhos.hobbies[2]);
console.log(x.endereco.x.cidade);

console.clear();

let y = {
    firstName: 'joana',
    lastName: 'Silvana',
    idade: 17,
    corDosOlhos: 'castanho',
    hobbies: ['música', 'filmes', 'estudar'],
    endereco: {
        rua: 'Rua rosalina',
        numero: 55,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

console.log(y);
console.log(y.firstName.lastName);
console.log(y.idade.lastName, x.firstName.idade);
console.log(y.corDosOlhos.hobbies[2]);
console.log(y.endereco.endereco.cidade);

console.clear();
let z = {
    firstName: 'josilene',
    lastName: 'Xavier',
    idade: 16,
    c: 'castanho claro',
    hobbies: ['dormir', 'filmes', 'comer'],
    endereco: {
        rua: 'Rua rosalina',
        numero: 55,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

console.log(z);
console.log(z.firstName.lastName);
console.log(z.idade.lastName, pessoa.idade);
console.log(z.corDosOlhos.hobbies[1]);
console.log(z.endereco.endereco.cidade);
