const stringify = (num) => {

    // Es un número
    if (typeof num !== 'number') {
        throw new Error('Not a number');
    }
    
    // No es un número negativo,  ni es mayor a 4000
    if (Math.sign(num) == -1 || num >= 4000){ 
        throw new Error('out of range');
    }
    
    // El numero es 0
    if (num === 0) return "N";


    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    let i;


    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;

}


const parse = (argument) => {

    // No es un string
    if (typeof argument !== "string") {
      throw new Error('Not a string');
    }

    const string = argument.toUpperCase();

    // Cuando no es un carácter de número romano
    const letterNumeralsRoman = ["M", "D", "C", "L", "X", "V", "I"]
    const array = string.split("")
    array.forEach(element => {
      if(!letterNumeralsRoman.some(el => element.includes(el))){
        throw new Error('Unknown roman numeral');
      }
    });

    // Cuando se repite V:5 L:50 D:500
    const look = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    const number = (n) => look[string[n]]
    if(string[1] && number(0).toString().charAt(0) === "5" && number(1).toString().charAt(0) === "5"){
          throw new Error(`Invalid repetition of number starting with 5: ${string[0]} (${number(0)})`);
    }

    // Muchas repeticiones
    // Las letras M, C, X, I se pueden repetir y colocar hasta tres veces seguidas.
    // Las letras D, L, V no se pueden repetir.
    const find = (arrayLetter, letter) => arrayLetter.findIndex(el => letter.indexOf(el) !== -1);

    const repeat = [ "MMMM", "CCCC", "XXXX", "IIII"]
    const noRepeat = [ "DD", "LL", "VV"]

    if(find(repeat, string) !== -1){
      throw new Error(`Too many repetitions of roman numeral ${repeat[find(repeat, string)].charAt(0)}`);
    } else if (find(noRepeat, string)!== -1){
      throw new Error(`Too many repetitions of roman numeral ${noRepeat[find(noRepeat, string)].charAt(0)}`);
    }

    // Substracción no valida
    const allowedCases = ['VX', 'VL', 'VC', 'VD', 'VM','LC', 'LD', 'LM', 'DM']
    if (find(allowedCases, string) !== -1) {
      throw new Error(`Invalid substraction prefix ${allowedCases[find(allowedCases, string)].charAt(0)}`);
    }

    // Cuando el pedido es incorrecto
    const rexRomanNumerals = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gm
    if (!rexRomanNumerals.test(string)) {
      throw new Error('Invalid order');
    }
    
    // Cuando el string es vacio
    if(string == null) return -1;

    // Función para la conversión de números romanos a algebraicos
    var num = lookup(string.charAt(0));
    var pre, curr;
      
    for(var i = 1; i < string.length; i++){
      curr = lookup(string.charAt(i));
      pre = lookup(string.charAt(i-1));
      if(curr <= pre){
      num += curr;
      } else {
        num = num - pre*2 + curr;
      }
    }
      
    return num;
    }
      
      function lookup(c){
      switch (c){
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
      }
}


module.exports = {
    stringify,
    parse,
  };

