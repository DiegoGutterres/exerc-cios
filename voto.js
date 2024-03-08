const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é a sua idade: ', (idade) => {
    idade = parseInt(idade);

    function votar(idade) {
        if (idade < 16) {
            return 'nao tem idade pra votar';
        } else if (idade >= 16 && idade < 18) {
            return 'voto facultativo';
        } else if (idade >= 18) {
            return 'voto obrigatório';
        }
    }

    console.log(votar(idade));

    rl.close();
});

