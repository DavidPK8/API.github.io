// Consultar la API
const consultarPokemon = (id, number) =>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // Fetch me permite consumir API ya sea publica o privada
    
    .then(response=>{
        return response.json()
    })

    .then(data=>{
        pintarPokemon(data, number)
    })

    .catch(error=>{
        console.log(error);
    })

} 

// Generar los Pokemones de forma random
const btnSeleccionar = () =>{

    let primerPokemon = Math.round(Math.random()*150) // Nos va arrojar un numero del 1 al 150
    let segundoPokemon = Math.round(Math.random()*150) // Nos va arrojar un numero del 1 al 150
    consultarPokemon(primerPokemon, 1)
    consultarPokemon(segundoPokemon, 2)
    
}

// Invocar la funcion
btnSeleccionar()

// Obtener la referencia del div donde se va a pintar 
// Los Pokemones
const lista = document.getElementById("listarpokemon")

// Presentar los Pokemones
const pintarPokemon = (data, id) =>{

    let item = lista.querySelector(`#pok-${id}`)

    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default)
    item.getElementsByTagName("p")[0].innerHTML = data.name

}