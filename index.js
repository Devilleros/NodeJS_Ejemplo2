const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());

const fs = require("fs");
fs.writeFile("./texto.txt", "Linea 1", function(err){
    if (err){
        console.log(err);
    }
    console.log("Archivo creado");
});

//El metodo de arriba es asincrono por lo tanto solo da la instruccion al sistema operativo y continua con la siguiente linea mientras que se ejecuta la instruccion en el sistema operativo

console.log("ultima linea");

//esta instruccion demuestra al ejecutarse que el metodo se hace de manera asincrona ya que si se ejecuta el programa se muestra primero este mensaje que el de "archivo creado" o el error

/* const result = fs.writeFile("","");*/

//Esta el mismo metodo aplicado de manera sincrona

/*
query("Selec * FROM user", function (err,users){
    if(err){
        console.log(err);
    }
    if(users){

    }
})
*/

//Otro metodo asincrono 

fs.readFile("./texto.txt", function(err,data){
    if (err){console.log(err);}
    console.log(data.toString());
})

//Metodo asincrono para leer archivos

/*SERVIDOR*/


/*
const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{"content-type" : "text/html"});
    res.write("<h1> Hola mundo desde Nodejs 2.0</h1>");
    res.end();
}).listen(3000);
*/


//Para texto plano se ultiliza "text/plain"
//Y el texto ya no tiene las etiquetas de html como <h1>
//Si ponemos en writeHead (404, ... ) indica que hay un error, la codificacion se encuentra en internet xD

/* const handleServer = function(req, res){
    res.writeHead(200,{"content-type" : "text/html"});
    res.write("<h1> Hola mundo desde Nodejs 2.0</h1>");
    res.end();
}

http.createServer(handleServer).listen(####);
*/

//otra manera de ccrear el mismo server


const http = require("http");
const colors = require("colors");

const handleServer = function (req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hola Mundo</h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log(".....Server on port 3000".yellow);
})