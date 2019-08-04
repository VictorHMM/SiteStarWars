//let charactersNames = new Array

function getInfoFilme(numeroDoFilme){
	axios.get(`https://swapi.co/api/films/${numeroDoFilme}/`).then(function(response){
		writeTitle(response.data)
		writeCharactersNames(response.data)
		writePlanetsNames(response.data)
		writeSpecies(response.data)
		writeStarships(response.data)

	})
}

function writeTitle(data){
	let titulo = document.querySelector("#titulo")
	titulo.innerText = data.title
}

function writeCharactersNames(data){
	let personagens = document.querySelector("#personagens")
	for (var i = 0; i < data.characters.length; i++) {
			axios.get(data.characters[i]).then(function(response){
				personagens.innerText += ' ' + response.data.name + ', '
			})		
	}	
}

function writePlanetsNames(data){
	let planetas = document.querySelector("#planetas")
	for (var i = 0; i < data.planets.length; i++) {
			axios.get(data.planets[i]).then(function(response){
				planetas.innerText += ' ' + response.data.name + ', '
			})		
	}	
}

function writeSpecies(data){
	let especies = document.querySelector("#especies")
	for (var i = 0; i < data.species.length; i++) {
			axios.get(data.species[i]).then(function(response){
				especies.innerText += ' ' + response.data.name + ', '
			})		
	}	
}

function writeStarships(data){
	let naves = document.querySelector("#naves")
	for (var i = 0; i < data.starships.length; i++) {
			axios.get(data.starships[i]).then(function(response){
				naves.innerText += ' ' + response.data.name + ', '
			})		
	}	
}


