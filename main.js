const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

/* 

MENOR QUE 
ENTRE 18,5 E 24,9	
ENTRE 25,0 E 29,9	
ENTRE 30,0 E 39,9	
MAIOR QUE 40,0

*/
function getNivelImc(imc) {
    const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade`, `Obesidade grave`,];
    if (imc >= 40.0) {
        return nivel[4]
    }
    if (imc >= 30.0) {
        return nivel[3]
    }
    if (imc >= 25.0) {
        return nivel[2]
    }
    if (imc >= 18.5) {
        return nivel[1]
    }
    if (imc < 18.5) {
        return nivel[0]
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('not');
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}