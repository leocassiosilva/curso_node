const fs = require("fs")

console.log('Inicio')

fs.writeFileSync('arquivo.txt', 'oi')

console.log('Fim')