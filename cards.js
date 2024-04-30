/**
 * []Crear tarjeta
 * [x]Crear secciones p/tarjeta
 * []Img
 * []Nombre, desc, edad, lista de lgo
 * []Insertar en la tarjeta
 * []Mostrar dentro de div.container
 */

const CARDS_CONTAINER = document.querySelector("#card-container"); // porque es global?
const USER = {
    id: 1,
    username: 'User Name',
    desc: 'Sobre mi',
    age: 26,
    fav_books: {
        books: [
            'Brida', 'Ensayo sobre la gente', 'Angeles y demonios', 'El Principito',
        ],
    },
    
};

//(puedo no usar getelementbyid y si quiero obtener un dato por su id # , si quiero obtener uno por su clase porngo un .) 

//crear secciones:
const card = document.createElement("div"); // asi creo un div desde java script
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement ("div");
// lista ---------------------------------
const bookList = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(bookList);

//Crear tarjeta:
//Inyectamos información
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
card.append(name_section, desc_section, age_section, book_section);

// Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);