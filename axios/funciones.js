function CargarDatos(url){
axios
.get(url)
.then((result) => {
    //result es un objeto
    console.log(result.data);
  })
  .catch((error) => {//error
    console.log(error);
  });
}

function CargarDatos() {
  axios
    .get("https://randomuser.me/api/")//llamada a la api
    .then((result) => { //resultado ok
      //result es un objeto
      console.log(result.data.results[0]);
    })
    .catch((error) => {//error
      console.log(error);
    });
}

function CargarPokemones() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((result) => {
      const pokemones = result.data.results;

      pokemones.map((pokemon) => {
        const { name, url } = pokemon;

        document.querySelector("#listado").innerHTML += `<li><a href="javascript:CargarDatos('${url}')">${name} </a></li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
