// CREACIÓN  Y ORDENACIÓN DE COONTENEDORES ESENCIALES
const body = document.getElementsByTagName("body")[0];
// lo de arriba es igual que document.QuerySelector("body")
const header = document.createElement("header");
    header.setAttribute("id", "header");
const main = document.createElement("main");
    main.setAttribute("id", "main");
body.appendChild(header);
body.appendChild(main);

// ELEMENTS
const title = document.createElement("h1");
const form = document.createElement("form");
const label = document.createElement("label");
const select = document.createElement("select");
const submit = document.createElement("input");

// SET TEXT
title.textContent = "FuturamAPI";
label.textContent = "Busca aquí a tu personaje favorito, gaznápiro >>> ";

// SET ATTRIBUTES
title.id = "tt";
form.id = "frm";
label.id = "lbl";
// select.id = "slct";
// select.setAttribute("name","character")
submit.id = "sbmt";
submit.setAttribute("type", "submit");
// submit.setAttribute("name","content");
form.name = "character";

// PUSH INTO DOM
header.appendChild(title);
header.appendChild(form);
form.appendChild(label);
form.appendChild(select);
form.appendChild(submit);

// RELLENAR OPTIONS
function genOptions(data) {
    data.map((character, index) => {
        const option = document.createElement("option")
        option.innerText = character.Name;
        option.id = index;
        select.id = index;//////////////////////////////////////////////////////////
        select.appendChild(option);
        option.value = character.PicUrl;//////////////////////////////////////
    }) 
}

// TRÁEMELO QUE YO CONTROLO
fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`)
.then(response => response.json())
.then(data=> {
    genOptions(data);
    console.log(data);
});

// ESTE ES EL INVENTO PARA REPRIMIR LOS INSTINTOS PRIMARIOS DEL BOTÓN SUBMIT
document.getElementById("sbmt").addEventListener("click", (retiradaEvento) => {
    retiradaEvento.preventDefault();
    painter(select);
})

// ESTE ES EL CURRITO QUE PINTA LAS COSAS EN EL MAIN

function painter(select){

    let substituter = document.getElementById("section"); 
    if(document.contains(substituter) != false){  
    document.getElementById("section").remove();
    } // ESTO EVALÚA SI YA HAY UNA IMAGEN EN DOM

// CREA LOS ELEMENTOS RESULTANTES DE LA BÚSQUEDA
let section = document.createElement("section");
section.setAttribute("id","section");
let picture = document.createElement("picture");
picture.setAttribute("id","picture");
let img = document.createElement("img");
img.setAttribute("id","img");
img.setAttribute("src", select.value);/////////////////////////////////////////////

console.log(select);

main.appendChild(section);
section.append(picture);
picture.append(img);
}


// HAY QUE ALIVIAR LA CACHÉ INTENTANDO MINIMIZAR EL NÚMERO DE LLAMADAS A LA API.
// EL MODO INFIERNO CONSISTE EN AÑADIR EN LA VISTA DETALLE UN BOTÓN DE FAVORITOS,
// QUE LO GUARDARÁ EL OBJETO ENTERO EN FIREBASE
// ADEMÁS ESOS FAVORITOS DEBERÁN APARECER PRIMERO EN LA BÚSQUEDA, POR DELANTE DE LOS DEMÁS.
// DEL MISMO MODO QUE SE GUARDEN COSAS EN FAVORITOS, PODREMOS DESECHARLAS.

