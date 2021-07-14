
const baseUrl = "https://superheroapi.com/api.php/4396455373707480/"

function testFetch() {
    fetch()
}

const button = document.getElementById('getHero')
button.addEventListener('click', displayTeam)
const teamName = document.getElementById('teamName')

const cardholder = document.getElementById('cardholder')
const col1 = document.getElementById('col1')
const col2 = document.getElementById('col2')
const col3 = document.getElementById('col3')

let fastAgile = [620, 265, 536, 490, 209, 371, 491, 201, 75, 340,]

let strong = [644, 332, 658, 720, 659, 177, 185, 476, 583, 524]

let tech = [268, 8, 210, 422, 346, 87, 228, 697, 627, 47]

let magic = [156, 730, 226, 224, 246, 322, 542, 418, 310, 280]

let grit = [714, 717, 723, 373, 107, 703, 530, 145, 541, 687]

let comicRelief = [213, 125, 473, 510, 450, 354, 535, 520, 555, 614]

let badAss = [19, 70, 352, 334, 341, 298, 313, 462, 568, 587]

let leader = [196, 149, 353, 151, 404, 630, 557, 638, 489, 456]

let cosmic = [14, 306, 598, 258, 517, 502, 496, 287, 296, 613]

let alien = [2, 432, 455, 78, 79, 233, 487, 18, 289, 566]

let nemesis = [414, 208, 574, 232, 204, 423, 401, 655, 680, 136]

let sidekick = [488, 454, 372, 351, 330, 563, 616, 618, 633, 718]

let organization = ['League','Legion','Guild','Crusaders','Alliance','Force','Friends','Battalion','Pack','Squad' ]

let locations = ['New York','America','Europe','Russia','Midwest','the World','Britain','South America','the Multiverse','the Universe']

let virtues = ['Justice','Fortitude','Iron','Savage','Alpha','Omega','Infinity','Global','Future','Badass']

let single = ['Defenders', 'Guardians', 'Protectors', 'Avengers', 'Titans','Champions', 'Sentinals','Paladins','Knights','Invaders' ]

let descriptors = ['Fantastic','Incredible','Invincible','Amazing','Savage','Wonderful','Super','Secret','Uncanny','Terrific' ]

function randomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min
    return result
}

function CreateTeamName(){
    let teamNum = randomNumber(0,4)
    while (teamName.firstChild) {
        teamName.removeChild(teamName.firstChild);
    }
 let name = document.createElement('h1') 

    if(teamNum === 0){
        console.log('The ' + virtues[randomNumber(0,9)] + ' ' + organization[randomNumber(0,9)])
        name.innerText = `The ${virtues[randomNumber(0,9)]} ${organization[randomNumber(0,9)]}`
    } else if (teamNum === 1){
        console.log('The ' + single[randomNumber(0,9)] + ' of' + locations[randomNumber(0,9)])
        name.innerText = `The ${single[randomNumber(0,9)]} of ${locations[randomNumber(0,9)]}`
    } else if(teamNum === 2){
        console.log('The ' + descriptors[randomNumber(0,9)] + ' ' + single[randomNumber(0,9)] )
        name.innerText = `The ${descriptors[randomNumber(0,9)]} ${single[randomNumber(0,9)]}`
    } else if(teamNum === 3){
        console.log('The ' + descriptors[randomNumber(0,9)] + ' ' + organization[randomNumber(0,9)])
        name.innerText = `The ${descriptors[randomNumber(0,9)]} ${organization[randomNumber(0,9)]}`
    } else if (teamNum === 4){
        console.log("the " + virtues[randomNumber(0,9)] + ' ' + single[randomNumber(0,9)])
        name.innerText = `The ${virtues[randomNumber(0,9)]} ${single[randomNumber(0,9)]}`
    } else {
        console.log('no name for you!')
    }
teamName.appendChild(name)





} 
function displayTeam(e) {
    while (col1.firstChild) {
        col1.removeChild(col1.firstChild);
    }

    while (col2.firstChild) {
        col2.removeChild(col2.firstChild);
    }

    while (col3.firstChild) {
        col3.removeChild(col3.firstChild);
    }

    CreateTeamName()

    fetchFastAgile()

    fetchstrong()

    fetchTech()

    fetchMagic()

    fetchGrit()

    fetchComic()

    fetchBad()

    fetchLeader()

    fetchCosmic()

    fetchAlien()

    fetchNemesis()

    fetchsideKick()
}

function fetchFastAgile(e) {

    url = baseUrl + fastAgile[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayFast(hero)
        })
}

function displayFast(hero) {
    console.log(hero)
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Quick Hero`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col1.appendChild(card)
}


function fetchstrong(hero) {

    url = baseUrl + strong[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayStrong(hero)
        })
}

function displayStrong(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Strong Hero`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col1.appendChild(card)
}


function fetchTech(hero) {

    url = baseUrl + tech[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayTech(hero)
        })
}

function displayTech(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Tech Hero`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col2.appendChild(card)
}


function fetchMagic(hero) {

    url = baseUrl + magic[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayMagic(hero)
        })
}

function displayMagic(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Magic Hero`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col2.appendChild(card)
}

function fetchGrit(hero) {

    url = baseUrl + grit[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayGrit(hero)
        })
}

function displayGrit(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Gritty Hero`
    let images = document.createElement('img')
    hero.image.url !== undefined ? images.src = hero.image.url : ''
    images.className = 'card-img-top'


    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col2.appendChild(card)
}

function fetchComic(hero) {

    url = baseUrl + comicRelief[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayComic(hero)
        })
}

function displayComic(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Comic Relief`
    let images = document.createElement('img')
    hero.image.url !== undefined ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col3.appendChild(card)
}


function fetchBad(hero) {

    url = baseUrl + badAss[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayBad(hero)
        })
}


function displayBad(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Badass Normal`
    let images = document.createElement('img')
    hero.image.url !== undefined ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col1.appendChild(card)
}

function fetchLeader(hero) {

    url = baseUrl + leader[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayLeader(hero)
        })
}

function displayLeader(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Team Leader`
    let images = document.createElement('img')
    hero.image.url !== undefined ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col1.appendChild(card)
}

function fetchCosmic(hero) {

    url = baseUrl + cosmic[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayCosmic(hero)
        })
}

function displayCosmic(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Cosmic Hero`
    let images = document.createElement('img')
    hero.image.url !== undefined ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col2.appendChild(card)
}

function fetchAlien(hero) {

    url = baseUrl + alien[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayAlien(hero)
        })
}

function displayAlien(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Alien Hero`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col3.appendChild(card)
}

function fetchNemesis(hero) {

    url = baseUrl + nemesis[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displayNemesis(hero)
        })
}

function displayNemesis(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Team Arch Enemy`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col3.appendChild(card)
}

function fetchsideKick(hero) {

    url = baseUrl + sidekick[randomNumber(0, 9)]
    console.log(url)
    fetch(url, {
        method: "GET"
    })
        .then(function (results) {
            console.log(results)
            return results.json()
        })
        .then(function (hero) {
            console.log(hero)
            displaySidekick(hero)
        })
}

function displaySidekick(hero) {
    let card = document.createElement('div')
    card.className = 'card'
    let heroType = document.createElement('h1')
    heroType.innerText = `Team Sidekick`
    let images = document.createElement('img')
    hero.image.url !== null ? images.src = hero.image.url : ''
    images.className = 'card-img-top'
    let name = document.createElement('h2')
    name.innerText = hero.name
    let secretIdentity = document.createElement('h3')
    hero.biography['full-name'] !== undefined ? secretIdentity.innerText = `Secret Identity: ${hero.biography['full-name']}` : ''
    let powerstats = document.createElement('p')
    powerstats.innerHTML = `<b>Hero Stats</b> <br> Intellegence: ${hero.powerstats.intelligence} <br> Strength: ${hero.powerstats.strength} <br>Speed: ${hero.powerstats.speed}<br>Durability: ${hero.powerstats.durability}<br>Power: ${hero.powerstats.power}<br>Power: ${hero.powerstats.power}<br>Combat: ${hero.powerstats.combat}`

    card.appendChild(heroType)
    card.appendChild(name)
    card.appendChild(images)
    card.appendChild(secretIdentity)
    card.appendChild(powerstats)
    col3.appendChild(card)
}


