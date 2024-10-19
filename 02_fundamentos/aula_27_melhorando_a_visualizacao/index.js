const chalk = require("chalk");

const nota = 3;

if (nota >= 6) {
    console.log(chalk.green("Parabéns! Você está aprovado!"));
} else if (nota >= 5 && nota < 6) {
    console.log(chalk.blue("Ainda não! Você esta de recuperação!"));
} else {
    console.log(chalk.bgRed("Que pena! Você está reprovado!"));
}
