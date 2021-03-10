let myCharacter;
function apiRickMorty(character) {
    if(character !== "") {
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(response => response.json())
        // Local Storage que recupera datos con el primer parámetro `busqueda+parametrodebusqueda`, JSON.stringify(data) que es una forma de hacer que se convierta en string el JSON. Se returna data originalmente para poder seguir trabajando con un JSON.
        .then(data => {
            localStorage.setItem(`${character}`, JSON.stringify(data) )
            myCharacter = character;
            return data
        })
        .then(data => {
            cleanArray(box);
            // elem(data)
            data.results.map(character => {
                elem(character)
            })
        })
    }
}


let array = ["hola", "que?", 1, false, "dime"];

function filtrar(array){
let newArray = array.filter(Number,Boolean)
console.log(newArray);
}