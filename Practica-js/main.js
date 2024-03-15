let mianTitle = document.querySelector("h1");

console.log(mianTitle);

let body = document.querySelector("body");

console.log(body);

mianTitle.innerHTML = "Bienvenidos al Kiosco del DOM";

let h2 = document.getElementsByTagName("h2");

console.log(h2);

let primerh2 = document.querySelector("h2");

primerh2.innerHTML = "Gracias por venir";

let h2ConQuery = document.querySelectorAll("h2");

console.log(h2ConQuery);

let h2WithId = document.getElementById("subtitulo");

h2WithId.innerText = "Conozca nuestros Alfajores";

let div1 = document.getElementById("contenido");

let div2 = document.querySelector("div");

console.log(div1);
console.log(div2);

//  creamos un ul con sus items

div1.innerHTML = `
<ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
</ul>
`;

// DATO: ESTO NO SE PUEDE HACER CON INNERTEXT PORQUE CON INNERTEXT LO UNICO QUE PODEMOS HACER ES GENERAR TEXTO,EN CAMBIO CON INNTERHTML PODEMOS GENERAR CODIGO HTML, TKANK FOR YOUR TIME.

// seleccionamos los items

// console.log(div1);

// recorremos y cargamos cada item

let li = document.querySelectorAll("li");
console.log(li);
for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = "Alfajor " + (i + 1);
}

let helado = document.querySelector("#helado");

let sabor = prompt(`Cual es su sabor de helado favorito?`);

if (sabor === "super gridito") {
  helado.innerHTML = `<h2>Su sabor de helado favorito es: ${sabor}</h2>
    <h2>Se lleva el helado gratis</h2>`;
} else {
  helado.innerHTML = `<h2>Su sabor de helado favorito es: ${sabor}</h2>
        <h2>Retirese del lugar por favor, sino le combramos el doble</h2>`;
}
