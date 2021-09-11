#!/usr/bin/env node

const { program } = require('commander');
const { stringify, parse } = require('../index.js');


// -------------------- CLI ----------------------------------------------------------------------
program
  .command('parse')
  .argument('<first>','integer argument')
  .description('Recibe un String como único argumento y retorna un número (Number) en caso que sea un número romano válido, en caso contrario arrojará un error especificando la causa.')
  .action((first) => {
    console.log(parse(first));
  });

program
  .command('stringify')
  .argument('[second]', 'integer argument')
  .description('Recibe un número (Number) y retorna un String con la representación del número recibido como número romano. En caso de que el número esté fuera de rango (1 <= num <= 3999).')
  .action((second) => {
    console.log(stringify(+second));
  });

  program
  .description('MdLinks by Nancy Bautista')
  .option('-v, --version', 'version')
  .option('-h, --help', 'I need help')
  .action(() => {
    if (options.help) {
      console.log('1.0.0');
    } if (options.version) {
      console.log(`
      Usage: roman-numerals [opttions] <command> [<input>]
      Commands:
        parse <input>      Parse a roman numeral string into an integer.
        stringify <input>  Takes an integer and converts it to a roman numeral.
      Options:
        -h,--help     Show this help.
        -v,--version  Show version number.
      `);
    }
  })


program.parse(process.argv);


// Example program using the command configuration option isDefault to specify the default command.
//
// $ node defaultCommand.js build
// build
// $ node defaultCommand.js serve -p 8080
// server on port 8080
// $ node defaultCommand.js -p 443
// server on port 443