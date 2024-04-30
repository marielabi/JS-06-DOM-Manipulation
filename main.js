/// DOM API
// OBTENER ELEMENTOS POR ID

const div1 = document.getElementById("div-1");
console.log(div1); 

const divCollection = document.getElementsByTagName("div") //tomar elementos por nombre de etiqueta ¿cual etiqueta solicito? pues un div
console.log(divCollection);

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName("username");
const usernameInput = usernameInputs[0];

console.log(p, usernameInput);

// EVENTOS (cualquier interacción es un evento)
usernameInput.addEventListener("input", (event) => {
    console.log(event.target.value)
    p.innerText = event.target.value;
}); // target es nuestro objetivo del evento. Value es el string que pueda contener ese input.

