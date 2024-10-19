const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine.question("Qual a sua linguagem preferida?: ", (language) => {

    if (language.toUpperCase() == "JAVA") {
        console.log("Só você gosta de JAVA")
    } else {
        console.log(`A minha linguagem preferida também é ${language}`);
    }
    readLine.close();

});

