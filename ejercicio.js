function ejercicio1(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

//2
function ejercicio2(){
var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length > valores[4].length){
console.log("hola es mayor que adios");
console.log(valores[2])
}else{
console.log("adios es mayor que hola");
console.log(valores[0])
}

console.log(valores[1] + valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] / valores[5]);
console.log(valores[5] / valores[1]);
console.log(valores[5] - valores[1]);



}
//3
function ejercicio3(){
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
    console.log("numero2 es positivo");
}

if(numero1 < 0) {
    console.log("numero1 es negativo o distinto de cero");
}

if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

}
//4
function ejercicio4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

 let aux = prompt("inserte su número del 0 al 24");
let num = aux%23;
console.log(num);
if(num<0){
    console.log("El número es invalido");
}else if(num>24){
    console.log("El número es invalido");
}else{
    var letra = letras[num];
    console.log(letra);
}
}
//5

function ejercicio5(){
    let n = prompt("elija su número:");
    let resultado = 1;

    for(x = 1; x >= n; x++){
        resultado = resultado*x;
    }
    console.log("El factorial de " + n + " es " + resultado);
}
//6

function ejercicio6(){
    let entero = prompt("elija su número:");
    let resto = entero % 2;
    if(resto == 0){
        console.log("Su número es par.");
    }else if(resto == 1){
        console.log("Su número es impar.");
    }else{
        console.loog("Algo anda mal.");
    }
}
//7

function ejercicio7(){
    var oracion = prompt("Escriba su oración:");
    let estring = oracion.trim();
    console.log(estring);
    var comparacion = estring.toLowerCase();
    var comparacion2 = estring.toUpperCase();
    console.log(comparacion);
    console.log(comparacion2);
    var contmay = 0;
    var contmin = 0;


    for(x = 0; x < oracion.length; x++){
        if (estring.charAt(x) === comparacion.charAt(x)) {
            contmin++;
        }else if (estring.charAt(x) === comparacion2.charAt(x)) {
            contmay++;
        }
    }
    if(contmin < contmay && contmin == 0){
        console.log("La oración está formada por solo letras mayusculas.");
        console.log(contmin);
        console.log(contmay);
    }else if(contmay < contmin && contmay == 0){
        console.log("La oración está compuesta por solo letras minusculas.");
        console.log(contmin);
        console.log(contmay);
    }else if (contmay >= 1 && contmin >= 1){
        console.log("La oración está compuesta por mayusculas y minusculas.")
        console.log(contmin);
        console.log(contmay);
    }
    
}
function ejercicio8(){
    var texto = prompt("Ingre su palindromo:");
    var compara = texto.replace(/ /g, "").toLowerCase();
    var coin = 0;
    let y = compara.length-1;
    for(x = 0; x < compara.length; x++){
            if(compara.charAt(x) === compara.charAt(y)){
                coin++;
            }
        y--;
    }
    if(coin == compara.length){
        console.log(coin);
        console.log("El texto ingresado es palindromo");
    }else{
        console.log(coin);
        console.log("El texto no es palindromo");
    }
}
function ejercicio10(){
    cont1 = 0;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;
    cont5 = 0;
    cont6 = 0;

    dados = 0;

    for(x = 0; x < 36000; x++){
    dad1 = Math.random() * (6 - 1) + 1;
    dad2 = Math.random() * (6 - 1) + 1;
    dado1 = Math.round(dad1);
    dado2 = Math.round(dad2);
    dados = dado1+dado2;
    if(dados == 1){
        cont1 = cont1++;
    }else if(dados == 2){
        cont2 = cont2++;
    }else if(dados == 3){
        cont3 = cont3++;
    }else if(dados == 4){
        cont4 = cont4++;
    }else if(dados == 5){
        cont5 = cont5++;
    }else if(dados == 6){
        cont6 = cont6++;
    }
}
    console.log(cont1,cont2,cont3,cont4,cont5,cont6);
}