const chalk = require("chalk");

const nota = 5


if(nota >= 7){
    console.log(chalk.green('Parabéns! Você está aprovado!'))
}else {
    console.log(chalk.bgRed('Você precisa nfazer a prova de recuperação!'))

}