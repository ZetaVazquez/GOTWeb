//Promesa
//const promesaQueSeVaAResoleDiosSabeCuando =promise("https://thronesapi.com/api/v2/Characters")

//Fetch
const personajes = fetch("https://thronesapi.com/api/v2/Characters").then(
  (respuesta) => console.log(respuesta)
);

console.log("Hola");

//Fetch con response y catch (suelta un error si la url no existe)
const personajesResponse = fetch("https://thronesapi.com/api/v2/Characters") //Devuelve una promesa
  .then((response) => response.json()) //devuelve objeto response en forma de promesa
  .then((json) => console.log(json)) //El objeto response pasa a ser json
  .catch((error) => console.log(error));

//PARA EL GOTWEBSITE
//Api
// const personajesGOT = fetch("https://thronesapi.com/api/v2/Characters")
//   .then((response) => response.json()) //devuelve objeto response en forma de promesa
//   .then((json) => {
//     json.forEach((personaje) => {
//       const image = document.createElement("img");
//       console.log(json[0])
//       image.setAttribute("src", personaje.imageUrl);
//       const contenedor = document.getElementsByClassName("containerGOT")[0];
//       contenedor.appendChild(image);
//     })
   
    
//   })
//   .catch((error) => console.log(error));

/*
  <Img
  src="https://thronesapi.com/assets/images/khal-drogo.jpg"
  class="car-img-top"
  alt="Drogo">*/




//Mejora API
const personajesGOT = fetch("https://thronesapi.com/api/v2/Characters")
.then((response) => response.json())
.then((json) => {
  const contenedor = document.querySelector(".containerGOT");

  json.forEach((personaje) => {
    // Crear una carta para cada personaje
    const carta = document.createElement("div");
    carta.classList.add("card", "personaje-item");

    // Agregar la imagen dentro de la carta
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", personaje.imageUrl);
    carta.appendChild(image);

    // Crear un div para el cuerpo de la carta 
    const cuerpoCarta = document.createElement("div");
    cuerpoCarta.classList.add("card-body");

    // Agregar el nombre del personaje al cuerpo de la carta
    const nombrePersonaje = document.createElement("h5");
    nombrePersonaje.classList.add("card-title");
    nombrePersonaje.innerText = personaje.fullName;
    cuerpoCarta.appendChild(nombrePersonaje);

   // Agregar el nombre del personaje al cuerpo de la carta
   const tituloPersonaje = document.createElement("h5");
   tituloPersonaje.classList.add("card-body");
   tituloPersonaje.innerText = personaje.title;
   cuerpoCarta.appendChild(tituloPersonaje);
    

    // Agregar el cuerpo de la carta a la carta
    carta.appendChild(cuerpoCarta);

    // Agregar la carta al contenedor
    contenedor.appendChild(carta);
  });
})
.catch((error) => console.log(error));