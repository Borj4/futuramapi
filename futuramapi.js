const body = document.getElementsByTagName("body")[0];
// lo de arriba es igual que document.QuerySelector("body")

// CREACIÓN  Y ORDENACIÓN DE COONTENEDORES ESENCIALES //////////////////////////////////
const header = document.createElement("header");
const main = document.createElement("main");
const title = document.createElement("h1");
const form = document.createElement("form");
const label = document.createElement("label");
const select = document.createElement("select");
const submit = document.createElement("input");

// SET TEXT

// SET ATTRIBUTES
header.setAttribute("id", "header");
main.setAttribute("id", "main");
title.textContent = "FuturamAPI";
label.textContent = "Busca aquí a tu personaje favorito >>> ";
title.id = "tt";
form.id = "frm";
label.id = "lbl";
submit.id = "sbmt";
submit.setAttribute("type", "submit");
form.name = "character";

    // PUSH INTO DOM
body.appendChild(header);
body.appendChild(main);
header.appendChild(title);
header.appendChild(form);
form.appendChild(label);
form.appendChild(select);
form.appendChild(submit);


// RELLENAR OPTIONS
function genOptions(data) {
    data.map((character, index) => {
        const option = document.createElement("option")
        select.appendChild(option);
        option.innerText = character.Name;
        option.value = index;
    }) 
}
// TRÁEMELO QUE YO CONTROLO ///////////////////////////////////////////////////////////
fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`)
.then(response => response.json())
.then(data => {
    localStorage.setItem("datos", JSON.stringify(data))
    return data})
.then(data=> {genOptions(data)});
// LOCAL STORAGE
const datos = JSON.parse(localStorage.getItem("datos"));
///////////////////////////////////////////////////////////////////////////////////////
    
    // ESTE ES EL INVENTO PARA REPRIMIR LOS INSTINTOS PRIMARIOS DEL BOTÓN SUBMIT
document.getElementById("sbmt").addEventListener("click", (retiradaEvento) => {retiradaEvento.preventDefault();
        painter(select);
})
    
    // VISTA MAESTRO ////////////////////////////////////////////////////////////////////////7
function painter(select){
    
    localStorage.setItem("selected",select.value);  // SELECTED TE VA A PILLAR EL ID DEL ELEMENTO SELECCIONADO
 
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
    img.setAttribute("src", datos[select.value].PicUrl);
    main.appendChild(section);
    section.appendChild(picture);
    picture.appendChild(img);
    
    let caja = document.createElement("div");
    caja.setAttribute("id", "caja");
    let parrafo = document.createElement("p");
    parrafo.id = "parrafo";
    parrafo.innerText = `Pincha aquí para saber más sobre ${datos[select.value].Name}`;
    section.appendChild(caja);
    caja.appendChild(parrafo);
    
    document.querySelector("div").addEventListener("click", genMaestro);
}
// VISTA DETALLE ///////////////////////////////////////////////////////////////////////////

let selected; // SELECTED TE VA A PILLAR EL ID DEL ELEMENTO SELECCIONADO

function genMaestro() {
    // SET SEARCH
    selected  = JSON.parse(localStorage.getItem("selected"));
    // REMOVE MASTER
    header.remove();
    main.remove();


    // CREATE BACK BUTTON
    let header2 = document.createElement("header");
    body.appendChild(header2);
    let backButton = document.createElement("button");
    header2.appendChild(backButton);
    backButton.innerText = "Volver";
    backButton.value = ()=>{
        genOptions(datos)
        painter(selected)
    }


    // CREATE TODO LO DEMÁS
    let maestro = document.createElement("main");
    maestro.id = "maestro";
    body.appendChild(maestro)
    
    div1 = document.createElement("div");
    div1.setAttribute("id","div1")
    maestro.appendChild(div1);

    div2 = document.createElement("main")
    div2.setAttribute("id","div2")
    maestro.appendChild(div2);

    let keys = Object.keys(datos[selected])
    keys.map((value, index)=>{
    let creadorDivino = document.createElement("p");
    creadorDivino.setAttribute("id",`linea${index}`);
    creadorDivino.innerText = value;
    div1.appendChild(creadorDivino);
    })
    let values = Object.values(datos[selected])
    values.map((value, index)=>{
    let creadorDivino = document.createElement("p");
    creadorDivino.setAttribute("id",`linea${index}`);
    creadorDivino.innerHTML = value; /// ES GUARRO PERO SI NO LA IMAGEN NO ENTRA
    div2.appendChild(creadorDivino);
    })

}




// HAY QUE ALIVIAR LA CACHÉ INTENTANDO MINIMIZAR EL NÚMERO DE LLAMADAS A LA API.
// EL MODO INFIERNO CONSISTE EN AÑADIR EN LA VISTA DETALLE UN BOTÓN DE FAVORITOS,
// QUE GUARDARÁ EL OBJETO ENTERO EN FIREBASE
// ADEMÁS ESOS FAVORITOS DEBERÁN APARECER PRIMERO EN LA BÚSQUEDA, POR DELANTE DE LOS DEMÁS.
// DEL MISMO MODO QUE SE GUARDEN COSAS EN FAVORITOS, PODREMOS DESECHARLAS





// const loGuardado = localStorage.setItem(JSON.stringify(data));

// console.log(loGuardado);

// const loGuardadoIsBack = JSON.parse(localStorage.getItem(data));

// [busqueda1, busqueda2, ...]

// push busqueda1 = []

// document.querySelectorAll("h2").

// // AQUÍ ENTRA DATA, LO TRANSFORMO PARA GUARDARLO, Y RETORNO LO MISMO QUE ENTRÓ
// .then(data)=>
// localStorage.setItem(JSON.stringify(data));
// return data
///////////////////////////////////////////////////////////////////////////