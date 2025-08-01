var pociones = [
  { nombre: "Poción de fuerza", precio: 50, poder: 80 },
  { nombre: "Poción de curación", precio: 30, poder: 40 },
  { nombre: "Poción de invisibilidad", precio: 100, poder: 90 },
  { nombre: "Poción débil", precio: 10, poder: 10 },
];

for (var i = 0; i < pociones.length; i++) {
  if (pociones[i].precio > 35 && pociones[i].poder > 50) {
    console.log(`la Poción Mayor es: ${pociones[i].nombre}`);
  }
}
