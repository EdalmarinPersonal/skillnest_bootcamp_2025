var edadUsuario = 35;
function puedeObtenerLicencia(edadUsuario){
    if(edadUsuario > 17){
        console.log("¡Listo para obtener la licencia de  conducir!");
    } else {
        console.log("“Disculpa, debes esperar más años para conseguir tu licencia");
    }
}

puedeObtenerLicencia(edadUsuario);