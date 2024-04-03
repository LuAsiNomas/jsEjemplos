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
    var estring = oracion.trim;
    var comparacion = estring.toLowerCase;
    var comparacion2 = estring.toUpperCase;
    var contmay = 0;
    var contmin = 0;
    var may = Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Ñ,Z,X,C,V,B,N,M;
    var min = q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,ñ,z,x,c,v,b,n,m;


    for(x = 0; x <= oracion.length; x++){
        if (estring[x] === comparacion[x]) {
            contmin++;
        }
        if (estring[x] === comparacion2[x]) {
            contmay++;
        }
    }
    if(contmin)
    
}