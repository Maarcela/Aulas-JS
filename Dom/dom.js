document.body.style.margin('1rem');
document.button.style.backgroundColor('#c4c4c4');
function button() {
    let estaçao = window.prompt('Informe o mês do ano');
    let h3 = document.createElement('h3');
    document.body.appendChild(h3);

    if (estaçao == 'Janeiro' || estaçao == 'Fevereiro' || estaçao == 'Março') {
        h3.innerHTML = `O mês escolhido seria ${estaçao},estação do ano é Inverno `;
        h3.style.backgroundColor = '#DDA0DD';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#c4c4c4';
    } else if (estaçao == 'Abril' || estaçao == 'Maio' || estaçao == 'Junho') {
        h3.innerHTML = `O mês escolhido seria ${estaçao},estação do ano é Primavera`;
        h3.style.backgroundColor = '#DDA0DD';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#c4c4c4';
    } else if (
        estaçao == 'Julho' ||
        estaçao == 'Agosto' ||
        estaçao == 'Setembro'
    ) {
        h3.innerHTML = `O mês escolhido seria ${estaçao},estação do ano é Verão`;
        h3.style.backgroundColor = '#DDA0DD';
        h3.style.borderBottom = ' 2px solid #000';
        h3.style.color = '#c4c4c4';
    } else if (
        estaçao == 'Outubro' ||
        estaçao == 'Novembro' ||
        estaçao == 'Dezembro'
    ) {
        h3.innerHTML = `O mês escolhido seria ${estaçao},estação do ano é Outono`;
        h3.style.backgroundColor = '#DDA0DD';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#c4c4c4';
    }
}
