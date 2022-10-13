function bucle(){
    var resultado = document.getElementById("resultado1");
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);

    var suma=n1+(n2);
    var resta= n1-n2;
    var multiplicacion=n1*n2;
    var division=n1/n2;
    let modulo= n1%n2;
    alert("La suma de los valores ingresados:"+suma);
    alert("la resta es: "+resta);
    alert("la multiplicacion es: "+multiplicacion);
    alert("la division es: "+division);
    alert("El resto es:"+modulo);
}   
