// 1. Opzetten van de webserver

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal alle stories uit de directus API op
const stories = await fetchJson('https://fdnd-agency.directus.app/items/tm_story')

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Zet een array klaar, 
// const ...  = []

// 2. Routes die HTTP Request and Responses afhandelen

// Maak een GET route voor de homepage
app.get('/', function(request, response) {

  // Haal alle stories uit de directus API op
  fetchJson('https://fdnd-agency.directus.app/items/tm_story').then((stories) => {

    // stories bevat gegevens van alle stories
    // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view

    // Render homepage.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd stories
    response.render('homepage', {
    })
  })
})

// Maak een GET route voor de lessons page
app.get('/lessons', function(request, response) {

// Haal alle stories uit de directus API op
fetchJson('https://fdnd-agency.directus.app/items/tm_playlist').then((playlist) => {

// stories bevat gegevens van alle stories

// Render homepage.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd stories
response.render('lessons', {
  playlist: playlist})
})
})


// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})