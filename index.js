
const moduloImportadoNameGenerator = require('./lib/nameGenerator.js');

const moduloImportadoSalutation = require('./lib/salutation.js');


let nombreAleatorio = moduloImportadoNameGenerator.nameGenerator();

moduloImportadoSalutation.saludo(nombreAleatorio);