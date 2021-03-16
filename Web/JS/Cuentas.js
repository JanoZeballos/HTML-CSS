function Sumar() {
    let n1 = document.getElementById('txtN1').value;
    let n2 = document.getElementById('txtN2').value;
    let suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma)
}
function Restar() {
    let n3 = document.getElementById('txtN3').value;
    let n4 = document.getElementById('txtN4').value;
    let resta = parseInt(n3) - parseInt(n4);
    alert("La resta es: "+resta)
}
function Radio() {
    let n5 = document.getElementById('txtN5').value;
    let multiplicacion = parseInt(n5) * parseInt(n5);
    let multi = 3.14 * multiplicacion;
    alert("El radio es: "+multi)
}
function Pares() {
    let n6 = document.getElementById('txtN6').value;
    let suma = parseInt(n6) + parseInt(n6);
    let suma1 = suma + n6;
    let suma2 = suma1 + n6;
    let suma3 = suma2 + n6;
    let suma4 = suma3 + n6;
    let suma5 = suma4 + n6;
    let suma6 = suma5 + n6;
    let suma7 = suma6 + n6;
    let suma8 = suma7 + n6;
    alert("Los pares es: "+suma + suma1 + suma2 + suma3 + suma4 + suma5 + suma6 + suma7 + suma8)
}