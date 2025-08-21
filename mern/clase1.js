/*var usuario2 = {
  nombre: "Carla",
  edad: 28,
  ciudad: "Lima",
  redes: {
    twitter: "@carla",
    instagram: "@carlagram",
  },
  gustos: ["leer", "viajar", "correr"],
};

var nuevoUsuario = {
  ...usuario2,
  edad: 30,
  profesion: "Diseñadora",
};

var {
  nombre,
  redes: { twitter },
  ...restoDatos
} = nuevoUsuario;

var [primerGusto, ...otrosGustos] = nuevoUsuario.gustos;

console.log(nombre);//carla
console.log(twitter);//@carla
console.log(restoDatos);// edad: 30,ciudad: 'Lima',ciudad: 'Lima',profesion: 'Diseñadora'
console.log(primerGusto);//leer
console.log(otrosGustos);//viajar, correr
*/
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();