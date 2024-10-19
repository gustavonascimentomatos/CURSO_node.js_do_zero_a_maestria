const inquirer = require("inquirer")

inquirer.prompt([
    {
        name: "Nota_1",
        message: "Qual é a primeira nota: "
    },
    {
        name: "Nota_2",
        message: "Qual é a segunda nota: "
    },
])
.then((answers) => {
    const media = ((parseInt(answers.Nota_1) + parseInt(answers.Nota_2)) / 2 );

    console.log(`A primeira nota foi: ${answers.Nota_1}`);
    console.log(`A primeira nota foi: ${answers.Nota_2}`);
    console.log(`A média das nota é: ${media}`);
})
.catch(err => console.log(err));
