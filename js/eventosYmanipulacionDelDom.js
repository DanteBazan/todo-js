// EVENTOS Y MANIPULACION DEL DOM

// EVENTOS:

// CONTROLAN ACCIONES

// DEFINEN COMPORTAMIENTOS

// EJEMPLO: CLICK

// FUNCIONAMIENTO:

// JS ASIGNA UNA FUNCION A CADA EVENTO

// SE LAS DENOMINA "EVENT HANDLERS"

// LOS EVENTOS SE ASOCIAN A CADA ELEMENTO QUE SE QUIERA ESCUCHAR

// SINTAXIS:

// ATRIBUTO EN EL ELEMENTO

// SEGUIDO DE LA ACCION ASOCIADA AL EVENTO

/* <input type="button" value="Clicke en el boton" oneclick="alert(`Mensaje en el click`);"></input> */

// ESTA MANERA NO SE RECOMIENDA PORQUE HACE QUE PODAMOS TRABAJAR CON EVENTOS DESDE EL HTML, COMO DICE EL PROFE MARTIN, NO ESTA BUENO ESTO, PORQUE NO ESTAMOS DIVIDIENDO NUESTRO CODIGO.

// SINTAXIS

// PODEMOS ASIGNARLO DESDE JS

// BUSCANDO UN ELEMENTO Y ASIGNANDOSELO

const boton = document.querySelector("body");

boton.addEventListener("keypress", () => {
  alert(`Loco deja de presionar el teclado`);
});
