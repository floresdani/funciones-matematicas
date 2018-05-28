/*Crea dos funciones, add y multiply. 
Cada una debe tomar dos argumentos.
La función add debe sumar sus argumentos y devolver el resultado. 
La funcion multiply debe multiplicar sus argumentos.
Usando solamente estas dos funciones,
resuelva este simple problema matemático: 36325 * (9824 + 777).
*/
window.onload = function () {
const add = function(num1, num2) {
    return num1 + num2;
    
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const val = add(9824, 777);

const result = multiply(36325, val);

console.log(result);  
}
/*result = 385081325*/