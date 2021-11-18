/*/const a = 280;
if ( a => * 0.20 ) {
 console.log( "Os valores são iguais" );
} */


// Estrutura condicional composta, atividade 1
 function aumentoSalario ( Salário = 280, aumento, novoSalario) {
if (Salário <= 280 ) {
    aumento = (Salário * 20 / 100);
} else if ( Salário > 280  && Salário <= 700){
    aumento = ( Salário * 15 / 100);
}  else if ( Salário > 700  && Salário <= 1500){
    aumento = ( Salário * 10 / 100);
}else { aumento = (Salário * 5 / 100)
}
 return (Salário + aumento + novoSalario);
}
 console.log (' O salário novo do colaborador é:');
 console.log (aumentoSalario ());

 // Atividade 2

 function maiorNumero ( num1 = 5 , num2 = 8, num3 = 15){
     if( num1 < num2 && num2 > num3);
     return num2;
 } 




