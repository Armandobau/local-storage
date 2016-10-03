///////////sesionStorage es igual que el localStorage, 
//pero solo dura lo que esta abierta esa pestaña del navegador

//crear item en localStorage
localStorage.setItem('quien', 'mundo');

//obtener item de localStorage y guardarlo en variable
var x = localStorage.getItem('quien');

//seleccionar elemento html
var el = document.querySelector("span");

//insertar en el elemento html el valor del item de localStorage
el.innerHTML = x;

console.log(x);


//guardar objetos
//stringify pasa el objeto javascript a cadena
localStorage.setItem('settings', JSON.stringify({lang : 'es'}));

var setting = localStorage.getItem('settings');

// setting seria igual a "{'lang' : 'es'}"
//parse pasa la cadena a objeto
var language = JSON.parse(setting).lang;

//language seria igual a "es"


//ver cuantas claves hay guardadas en localStorage
localStorage.length;

//ver la clave 5 
localStorage.key(5);
