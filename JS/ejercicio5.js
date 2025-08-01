trampa = 1;
vacio = 0;
var cofres = ["tesoro", "vacío", "trampa", "tesoro", "vacío", "tesoro", "trampa", "vacío", "tesoro", "vacío"];
var nuevosCofres = [];
tesoros = 0;
vacios = 0;
for(var i = 0; i < cofres.length; i++ ){
    if(cofres[i] == "trampa"){
        nuevosCofres[i] = trampa;
    } else {
        nuevosCofres[i] = vacio;
        if(cofres[i] == "tesoro"){
            tesoros++;
        } else{
            vacios++;
        }
    }
}

console.log(nuevosCofres);
console.log(`Hay ${tesoros} tesoros, y ${vacios} vacíos.`);