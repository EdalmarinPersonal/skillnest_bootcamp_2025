////1///
const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};
const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);//30
console.log(salario);///no está definido

///2///
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);/// a: 1, b: 4, c: 5, d: 6 //aquí se reemplazan las keys b y c

///3////
const verificar = () => {
    if (true) {
        const a = 2;///Funciona con ambilo local dentro del if
        let b = 3;///Funciona con ambilo local dentro del if
        var c = 4;///única que se puede leer
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();///solo se podría leer el valor de c, pero tendríamos error con los otros
            ///dos console.log, porque serían variables no definidas.

///4///
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);///Imprime 29 porque freeze congeló la variable y no permite modificar

///5///
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);///concat agrega 4 al final del arreglo [1,2,3,4]

///6///
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);///Destructura e imprime la primera opción del arreglo: manzana
console.log(segunda);///Destructura e imprime la segunda opción del arreglo: naranja

///7///
for (let i = 0; i < 3; i++) {//Funciona en este for, no se reasignar en el for interno
    for (let i = 0; i < 2; i++) {///La variable i aquí solo funciona en este for
        console.log(i);//imprime 0,1 en cada interaccion del primer for. Queda así: 0,1,0,1,0,1
    }
}

///8///
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];///a la variable combinados los valores de numeros1 y numeros2
console.log(combinados);///1, 2, 3, 3, 4, 5

///9///
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);///está variable se reasigna porque es var queda: Luis
    console.log(edad);///No se puede reasignar por ser Let, da: 25
}
demostracion(); /// Luis 25
