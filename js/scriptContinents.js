const continentesGOT = fetch("https://thronesapi.com/api/v2/Continents")
.then((response) => response.json())
.then((json) => {
  const contenedor = document.querySelector(".containerContinents");
  contenedor.innerHTML = json
  .map(
    (continent) =>
    `
    <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
      <img class="card-img-top" style="margin-left:100px; width: 20rem;" src="img/continent${continent.id}.jpg" alt="${continent.name}">
      <div class="card-body">
        <h5 class="card-title" style="margin-left:100px;">${continent.name}</h5>
      </div>
    </div>
  `
  )
  .join("");
})
.catch((error) => console.log(error));