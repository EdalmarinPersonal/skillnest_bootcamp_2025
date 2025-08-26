/// Ejercicio 1: Conversor de temperatura
//Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit. La fórmula para convertir Celsius a Fahrenheit es: Fahreneit = (Celsius * 9 / 5) + 32

const celsiusAFarenheit = (valorCelsius) =>{
    return (valorCelsius * 9 / 5) + 32;
}
/*console.log(celsiusAFarenheit(20));*/

///Ejercicio 2: Generador de mensajes personalizados
///Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje en formato de cadena

const mensajesPersonalizados = (nombre, edad) =>{
    mensaje = `Hola ${nombre}, tienes ${edad} años de edad`;
    return mensaje;
}
//console.log(mensajesPersonalizados("Pedro","25"));

//Ejercicio 3: Convertir de millas a kilómetros
//Crea una función flecha que convierta millas a kilómetros. Considera que: 1 milla = 1.60934 km

const millasaKilometros = (valor) => {
    let resultado = (valor == "") ? 0 : valor * 1.60934;
    return resultado;
}
/*console.log(millasaKilometros(5));*/

//Ejercicio 4: Consejos según el clima
//Crea una función flecha que, según el clima ingresado como argumento, retorne un consejo adecuado.

const consejoClima = (climaActual) => {
    return (climaActual == "lluvioso") ? "Debe llevar un paraguas" : (climaActual == "soleado") ? "Debe llevar un sombrero" : "Opión no válida";  
}
//console.log(consejoClima("soleado"));