const fs = require("fs")

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', function(err){
    setTimeout(() => {
        console.log("Arquivo criado!")
    }, 1000);
})

console.log('Fim')