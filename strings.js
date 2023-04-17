const texto = 'testando as limitações';

console.log(texto.charAt(0));
console.log(texto.charAt(texto.length-1));
console.log(texto.substring(1,4));
console.log(texto.slice(1,4));
console.log(texto.slice(-3));
console.log(texto.indexOf('t'));
console.log(texto.lastIndexOf('t'));
console.log(texto.split(', '));
console.log(texto.replace('t', 'T'));
console.log(texto.toUpperCase());