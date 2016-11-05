var Usuario = require('../models/usuario');

//Funcion Auxiliar para calcular la hora
exports.fechaDeHoy = function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    } 

    today = dd+'/'+mm+'/'+yyyy;
    return today; 
}

exports.getHora = function(){
    var hora = new Date();
    var hh = hora.getHours();
    var mm = hora.getMinutes();
    var ss = hora.getSeconds();

    hora = hh+':'+mm+':'+ss;
    return hora; 
}
