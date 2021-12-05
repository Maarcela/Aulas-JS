/*/const a = 280;
if ( a => * 0.20 ) {
 console.log( "Os valores são iguais" );
} */

// Estrutura condicional composta, atividade 1
function aumentoSalario(Salário = 280, aumento, novoSalario) {
    if (Salário <= 280) {
        aumento = (Salário * 20) / 100;
    } else if (Salário > 280 && Salário <= 700) {
        aumento = (Salário * 15) / 100;
    } else if (Salário > 700 && Salário <= 1500) {
        aumento = (Salário * 10) / 100;
    } else {
        aumento = (Salário * 5) / 100;
    }
    return (novoSalario = Salário + aumento)
}
console.log(aumentoSalario());
 
// Atividade 2
console.clear()
function maiorNumero(num1 = 5, num2 = 8, num3 = 15) {
    if (num2 > num1 && num2 > num3) {
        return `Número ${num2} é maior`;
    } else if (num2 > num1 && num2 > num3) {
        return ` Número ${num3} é maior`;
    } else if (num3 > num1) {
        return `Número ${num3} é maior`;
    }
}
console.log(maiorNumero());
