#!/usr/bin/env node

const { program } = require('commander');
const { stringify, parse } = require('../index.js');

const options = program.opts();

// -------------------- CLI ----------------------------------------------------------------------
program
  .command('parse')
  .argument('<first>','integer argument')
  .description('Recibe un String como único argumento y retorna un número (Number) en caso que sea un número romano válido, en caso contrario arrojará un error especificando la causa.')
  .action(async (first) => {
    try {
      const response =  parse(first)
      console.log(response); 
    } catch (error) {
      console.log(error)
    }
  })

program
  .command('stringify')
  .argument('[second]', 'integer argument')
  .description('Recibe un número (Number) y retorna un String con la representación del número recibido como número romano. En caso de que el número esté fuera de rango (1 <= num <= 3999).')
  .action(async (second) => {
    try {
      const response =  stringify(+second)
      console.log(response);
    } catch (error) {
      console.log(error)
    }

  });

  program
  .description('roman-numerals by Nancy Bautista')
  .option('-h, --help', 'I need help')
  .action(() => {
  if (options.help) {
      console.log(`
      ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋
      ╋╋╋                                                                           ╋╋╋      
      ╋╋╋  Usage: roman-numerals [options] <command> [<input>]                      ╋╋╋
      ╋╋╋  Commands:                                                                ╋╋╋
      ╋╋╋  parse <input>      Parse a roman numeral string into an integer.         ╋╋╋
      ╋╋╋  stringify <input>  Takes an integer and converts it to a roman numeral.  ╋╋╋
      ╋╋╋  Options:                                                                 ╋╋╋
      ╋╋╋  -h,--help     Show this help.                                            ╋╋╋
      ╋╋╋  -v,--version  Show version number.                                       ╋╋╋
      ╋╋╋                                                                           ╋╋╋
      ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋
      `);
    }
    if(JSON.stringify(options)=='{}'){
    console.log(`
    ✄┏━━━┓╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏━┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓
    ✄┃┏━┓┃╋╋╋╋╋╋╋╋╋╋╋╋╋╋┃┃┗┓┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┃
    ✄┃┗━┛┣━━┳┓┏┳━━┳━┓╋╋╋┃┏┓┗┛┣┓┏┳┓┏┳━━┳━┳━━┫┃┏━━┓
    ✄┃┏┓┏┫┏┓┃┗┛┃┏┓┃┏┓┳━━┫┃┗┓┃┃┃┃┃┗┛┃┃━┫┏┫┏┓┃┃┃━━┫
    ✄┃┃┃┗┫┗┛┃┃┃┃┏┓┃┃┃┣━━┫┃╋┃┃┃┗┛┃┃┃┃┃━┫┃┃┏┓┃┗╋━━┃
    ✄┗┛┗━┻━━┻┻┻┻┛┗┻┛┗┛╋╋┗┛╋┗━┻━━┻┻┻┻━━┻┛┗┛┗┻━┻━━┛
    `)
  }
  })
  .parse(process.argv);
