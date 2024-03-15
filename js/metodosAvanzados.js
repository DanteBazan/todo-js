// METODOS AVANZADOS

//-----------------------------------------------------------------------

// forEach() es un metodo de los arrays que recibe por parametro una funcion de callback. Este metodo se encarga de ejecutar la funcion de callback por cada iteracion, sin retornar ningun valor.

// este metodo recibe tres parametros:

// elemento: valor del array que se esta recorriendo en la iteracion actual.

// index(opcional): El calor del indice en dicha iteracion (arranca de 0 porque es un array).

// array(opcional): Toma el valor del array original. Es muy poco usual su uso.

// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach((numero) => {
//   console.log(`Hi, soy el numero ${numero}`);
// });

// const autos = ["ford", "hyundai", "mercedes", "bmw"];

// autos.forEach((auto) => {
//   console.log(`soy el modelo: ${auto}`);
// });

//---------------------------------------------------------------------------

// map()
//-  no deifne variable de control
// - no establece prueba logica, automaticamente recorre todo el array
// - no debo incrementar ninguna variable
// - devuelve un array con el resultado

// const autos = ["ford", "hyundai", "mercedes", "bmw"];

// const autosColor = autos.map((auto) => {
//   return `el color del auto ${auto} es rojo`;
// });
// console.log(autosColor);

//--------------------------------------------------------------------------

// foreach() vs map()

// si bien el metodo foreach() y el map() pueden parecer bastante similares a primera vista cuando estan aprendiendo, tienen una diferencia fundamental:

// El metodo map() RETORNA un nuevo array en base al array sobre el que se uso el metodo, modificando segun lo pedido en la funcion de callback.

// El metodo forEach() NO RETORNA NADA. Ejecuta las acciones que se pasan en la funcion de callback y nada mas.

// Es importante que recordemos esta diferencua para saber cual de los dos conviene utilizar en cada situacion particular.

//--------------------------------------------------------------------------

// filter() recibe por parametro una funcion de callback que debe retornar un booleano (o en su defecto. falsy/truthy).
//se utiliza, como su nombre lo indica, para filtrar elementos de un array segun una condicion.

// el resultado de este metodo es un nuevo array, con los valores del array original que hayan retornado un valor truthy. La funcion de callback recibe tres parametros

// elemento: valor de array que se esta recorriendo en la iteracion actual.

//index(opcional): el valor del indice en dicha iteracion (arranca de 0 porque es un array)

//array(opcional): toma el valor del array original. es muy poco usual su uso.

// const numeros = [1, 2, 3, 4, 5];

// const numerosPares = numeros.filter((numero) => {
//   return numero % 2 === 0;
// });

// console.log(numeros);
// console.log(numerosPares);

// let autosColor = ["renault", "ford", "fiat", "lamborgini"];

// let autosCortos = autosColor.filter((auto) => {
//   return auto.length <= 4;
// });

// console.log(autosCortos);

//--------------------------------------------------------------------------

// find()

// El metodo find() es un metodo de los arrays que recibe por parametro una funcion de callback que debe retornar un booleano( o en su defecto, fasly/truty). Este metodo retornara el primer elemento de array dado que cumpla con la condicion pasada en la funcion de callback, o en su defecto, undefinded.

// la funcion de callback recibe tres parametros:

// Elemento: Valor del array que se esta recorriendo en la iteracion actual.

// Index(opcional): El valor del indice en dicha iteracion (arranca de 0 porque es un array)

// Array(opcional): Toma el valor del array original. es muy poco usual su uso.

// let numeros = [1, 2, 3, 30000, 1500, 100, 200, 300, 400, 500];

// let numerosMuyAltos = numeros.find((numero) => {
//   return numero > 500;
// });

// console.log(numerosMuyAltos);

//--------------------------------------------------------------------------

// every()

// El metodo every() recibe una funcion de callback cuyo valor de retorno sera interpretado como un valor booleano. Si todos los elementos de array retornan "true", el metodo retornara true. En cambio, si alguno de esos elementos retorna false, el metodo retornara false.

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numeroAlto = numeros.every((numero) => {
//   return numero < 11;
// });

// console.log(numeroAlto); // el resultado de este console.log es true

// some()

// El metodo some() recibe una funcion de callback cuyo valor de retorno sera interpretado como un valor booleano, Si al menos un elemento del array retorna true, el metodo retornara true. En cambio, si todos retornan false, retornara false

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numerosMenores = numeros.some((numero) => {
//   return numero < 7;
// });

// console.log(numerosMenores);

// let numerosMayores = numeros.some((numero) => {
//   return numero > 10;
// });

// console.log(numerosMayores);

