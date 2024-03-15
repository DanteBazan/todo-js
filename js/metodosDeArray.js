//METODOS DE ARRAYS

// length // nos permite saber el largo de un array

// const array = ["anashe", 1, 5, "Messi", "genio", true];
// console.log(array.length);

// imprime un 3

// indexOf // es un metodo de strings y arrays que nos devuelve el indice del elemento en el cual esta el valor que buscamos(el que pasamos por parametro)

// let animales = ["gato", "perro", "tortuga"];
// console.log(animales.indexOf("gato"));
// console.log(animales.indexOf("perro"));
// console.log(animales.indexOf("tortuga"));
// console.log(animales.indexOf("leon")); // este nos imprime menos uno porque no existe, siempre que pasemos por parametro algo que no existe nos devuelve -1

// to string // convierte un array en un string, compuesto por cada uno de los elementos del array separados por comas

// let animales = ["gato", "perro", "tortuga", 4, false];
// console.log(animales.toString()); //nos imprime (gato,perro,tortuga,4,false)

// concat // mediante el metodo concat podemos combinar dos arrats en un unico array

// let animales = ["gato", "perro", "tortuga"];
// let masAnimales = ["pez", "serpiente", "caballo"];
// console.log(animales.concat(masAnimales)); // nos imprime en consola (gato,perro,tortuga,pez,serpiente,caballo)

// push // para sumar un elemento a un Array ya existente, se utiliza el metodo push, pasando como parametro el valor(o variable) a agregar.

// let animales = ["perro", "gato", "tortuga"];
// let caballo = "caballo";
// animales.push(caballo);
// console.log(animales);
// esto nos imprime en consola ["perro","gato","tortuga","caballo"]
// animales.push("serpiente");
// console.log(animales);
// esto nos imprime enconsola ["perro","gato","tortuga","caballo","serpiente"]

// unshift // es un metodo de los arrays que agrega como primer valor el mismo elemento recibido por parametro, este metodo modifica el array original, no crea uno nuevo.

// let animales = ["perro", "gato", "tortuga"];
// let caballo = "caballo";
// animales.unshift(caballo);
// console.log(animales);
// // esto imprime ["caballo","perro","gato","tortuga"]
// animales.unshift("serpiente");
// console.log(animales);
// esto imprime ["serpiente","caballo","perro","gato","tortuga"]

// pop //  elimina (y retorna) el ultimo valor del mismo, esto nos permite guardar el resultado en una variable

// let animales = ["perro", "gato", "tortuga"];
// let animalEliminado = animales.pop();
// console.log(animales);
// console.log(animalEliminado);

// shift // elimina el primero valor del array, lo contrario de unshift

// let helados = ["chocolate", "super gridito", "brownie"];
// let heladoEliminado = helados.shift();
// console.log(helados);
// console.log(heladoEliminado);

// join // podemos juntar todos los elementos de Array en una cadena String, indicando como parametro el separador para esos elementos

// let animales = ["gato", "perro", "tortuga"];
// console.log(animales.join(" / "));

// reverse // retorna el mismo array pero con los elementos invertidos

// let animales = ["gato", "perro", "tortuga"];
// console.log(animales.reverse());

// slice // devuelve una copia de una parte del array dentro de un nuevo array, empezando por el inicio hasta el fin(fin no incluido). El array original no se modificara

// let animales = ["gato", "perro", "tortuga", "caballo", "serpiente"];

// console.log(animales.slice(1, 3));
// console.log(animales.slice(2));
// console.log(animales.slice(-2));
// console.log(animales.slice(1, -2));
// console.log(animales.slice(-2, -1));
