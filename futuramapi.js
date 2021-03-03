// CREACIÓN DE COONTENEDORES ESENCIALES
const body = document.getElementsByTagName("body")[0];
// lo de arriba es igual que document.QuerySelector("body")
const header = document.createElement("header");
    header.setAttribute("id", "header");
const main = document.createElement("main");
    main.setAttribute("id", "main");

body.appendChild(header);
body.appendChild(main);

// ELEMENTS BIG BANG
const title = document.createElement("h1");
const form = document.createElement("form");
const label = document.createElement("label");
const select = document.createElement("select");
const submit = document.createElement("input"); //submit

// SET TEXT
title.textContent = "FuturamAPI";
label.textContent = "Busca aquí a tu personaje favorito, gaznápiro >>> ";

// SET ATTRIBUTES
title.id = "tt";
form.id = "frm";
label.id = "lbl";
select.id = "slct";
select.setAttribute("name","character")
submit.id = "sbmt";///no se


submit.setAttribute("type", "submit");
submit.setAttribute("name","content");


form.name = "character";




//TENGO QUE HACER QUE EL FORMULARIO RETORNE EL VALOR DEL ELEMENTO SELECCIONADO Y QUE LO COJA UN LISTENER PARA IMPRIMIR EL CONTENIDO.

// PUSH INTO DOM
header.appendChild(title);
header.appendChild(form);

form.appendChild(label);
form.appendChild(select);
form.appendChild(submit);

// RELLENAR OPTION

function genOptions(data) {

    data.map((character, index) => {
        const option = document.createElement("option")
        option.innerText = character.Name;
        option.id = index;
        select.appendChild(option);
        
        option.value = character.PicUrl;
        submit.value

    })
    
}


fetch(`https://futuramaapi.herokuapp.com/api/v2/characters`)
.then(response => response.json())
.then(data=> {
    genOptions(data);
console.log(data);
})
// submit.addEventListener("click", painter)
// console.log(submit);
document.getElementById("sbmt").addEventListener("click", (retiradaEvento) => {

    if (document.body.contains("section"))

    
    retiradaEvento.preventDefault();

painter(select)

}) ///// ??????

function painter(select){
    let section = document.createElement("section")
    section.setAttribute("id","section");
    let picture = document.createElement("picture")
    picture.setAttribute("id","picture");
    let img = document.createElement("img")
    img.setAttribute("id","img");

    console.log(select.value);
    img.setAttribute("src", select.value);
    
    img.addEventListener("click",)

    main.appendChild(section);
    section.append(picture);
    picture.append(img);
}


// document.querySelector("body").innerHTML()

// document.getElementBy(selector).addEventListener("click",(()=>
//     document.querySelector("body").innerHTML += this.value;
//     console.log(this.value)
// ))

    // document.
    // addEventListener("click",((character) => 
    // document.querySelector("body").innerHTML += character.PicUrl))
  

    

// document.addEventListener(select, showResults(() => 
// document.createElement() ))





// function fetchToFuturama(character) {
//     if(character !== "") {
//       fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}`)
//         .then(response => response.json())
//         .then(data => {
//           data.map(quote =>
//             document.querySelector('body').innerHTML +=
//             `<p>${quote.quote}</p><img src="${quote.image}"><br />` );

// array.forEach((element)=>
//      document
//      .createElement("option")
//      .setAttribute("id",`${element}`)
//      .appendChild(select)
// )




// .appendChild(form);
// form.appendChild(label).appendChild(imput).appendChild(submit);
