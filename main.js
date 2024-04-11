const pokeCard = document.querySelector("#data-poke-card");
const pokeName = document.querySelector("#data-poke-name");
const pokeImg = document.querySelector("#data-poke-img");
const pokeImgContainer = document.querySelector("#data-poke-img-container");
const pokeNumber = document.querySelector("#data-poke-id");
const pokeTypes = document.querySelector("#data-poke-types");
const pokeStats = document.querySelector("#data-poke-stats");


const typeColors = {
    electric: '#FFFF35',
    normal: '#FFE9FF',
    fire: '#F80909',
    water: '#0A40E9',
    ice: '#10FFED',
    rock: '#EEEBD1',
    flying: '#AFFFA4',
    grass: '#57FF00',
    psychic: '#FF28B4',
    ghost: '#59007B',
    bug: '#BDDA33',
    poison: '#FF09CB',
    ground: '#5C2020',
    dragon: '#0B2EFF',
    steel: '#3D3F64',
    fighting: '#ED0015',
    default: '#2A1A1F',
};

const searchPokemon = event =>{
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}




const renderPokemonData = data => {
    const sprite =  data.sprites.front_shiny;
    const { stats, types } = data;
    console.log(data);
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeNumber.textContent = `Nº ${data.id}`;
    pokemonTypes(types);
    pokemonStats(stats);
}

const pokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const pokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'unknowPokemon2.jpg');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeNumber.textContent = '';
}

/*
const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_shiny;
    const { stats, types } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeNumber.textContent = `Nº ${data.id}`;

    renderPokemonTypes(types);
    renderPokemonStats(stats);
}




const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'unknowPokemon2.jpg');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeNumber.textContent = '';
}*/