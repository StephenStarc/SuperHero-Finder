
const token = 985719075861457
const baseapi = `https://superheroapi.com/api.php/${token}`

heroname = document.getElementById('heroname')
// maincontent = document.querySelector('main_content')
heroimg = document.getElementById('heroimg')
herostatus = document.getElementById('herostatus')
randomherobutton = document.getElementById('randomherobutton')
hearsearch = document.getElementById('hearsearch')
herosearchbtn = document.getElementById('herosearchbtn')


const heroidsearch = (id) => {
    fetch(`${baseapi}/${id}`)
    .then(respond => respond.json())
    .then(json => {
        heroproperties(json)
    })
}
//ADD HERO STATUS PROPERTIES
const heroproperties = (json) =>{

    heroimg.innerHTML = `<img src="${json.image.url}" heigth=100% width=100%/>`
    heroname.innerHTML = `${json.name}`

    let prop = Object.keys(json.powerstats).map(value => {
       return `<p>${(value).toUpperCase()}-${json.powerstats[value]}</p>`
    }).join('')
    console.log(prop)
    herostatus.innerHTML = prop
}

const herosearch = (value) => {
    fetch(`${baseapi}/search/${value}`)
    .then(respond => respond.json())
    .then(json => {heroidsearch(json.results[0].id)})
}

randomherobutton.onclick = () => {
    randomidgenertor()
}
let randomidgenertor = () => {
    let ranid = (Math.floor(Math.random()*731))*1
    console.log(ranid)
    heroidsearch(ranid)
}

herosearchbtn.onclick = () => { let hero = hearsearch.value
    console.log('HELLOP')
    herosearch(hero)
}
