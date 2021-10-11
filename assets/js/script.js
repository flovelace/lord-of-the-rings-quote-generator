//global character variables
var frodoButton = document.getElementById('frodo-button')

var samButton = document.getElementById('sam-button')

var merryButton = document.getElementById('merry-button')

var pippinButton = document.getElementById('pippin-button')

var gandalfButton = document.getElementById('gandalf-button')

var aragornButton = document.getElementById('aragorn-button')

var legolasButton = document.getElementById('legolas-button')

var gimliButton = document.getElementById('gimli-button')

var boromirButton = document.getElementById('boromir-button')


//event listeners for character page
frodoButton.addEventListener('click', frodoQuote);
samButton.addEventListener('click', samQuote);
merryButton.addEventListener('click', merryQuote);
pippinButton.addEventListener('click', pippinQuote);
gandalfButton.addEventListener('click', gandalfQuote);
aragornButton.addEventListener('click', aragornQuote);
legolasButton.addEventListener('click', legolasQuote);
gimliButton.addEventListener('click', gimliQuote);
boromirButton.addEventListener('click', boromirQuote);

//functions to reveal each character
function frodoQuote() {
    fetchQuoteForCharacter("Frodo Baggins", document.getElementById("frodo"))
    document.getElementById("main-image-card").src = ("./assets/img/frodo.jpg")

}

function samQuote() {
    fetchQuoteForCharacter("Samwise Gamgee", document.getElementById("sam"))
    document.getElementById("main-image-card").src = ("./assets/img/sam.jpg")
}

function merryQuote() {
    fetchQuoteForCharacter("Merry Gamgee", document.getElementById("merry"))
    document.getElementById("main-image-card").src = ("./assets/img/merry.jpeg")
}

function pippinQuote() {
    fetchQuoteForCharacter("Pippin Gamgee", document.getElementById("pippin"))
    document.getElementById("main-image-card").src = ("./assets/img/pippin.png")
}

function gandalfQuote() {
    fetchQuoteForCharacter("Gandalf", document.getElementById("gandalf"))
    document.getElementById("main-image-card").src = ("./assets/img/gandalf.jpg")
}

function aragornQuote() {
    fetchQuoteForCharacter("Aragorn II Elessar", document.getElementById("aragorn"))
    document.getElementById("main-image-card").src = ("./assets/img/aragorn.jpg")
}

function legolasQuote() {
    fetchQuoteForCharacter("Legolas", document.getElementById("legolas"))
    document.getElementById("main-image-card").src = ("./assets/img/legolas.jpg")
}

function gimliQuote() {
    fetchQuoteForCharacter("Gimli", document.getElementById("gimli"))
    document.getElementById("main-image-card").src = ("./assets/img/gimli.png")
}

function boromirQuote() {
    fetchQuoteForCharacter("Boromir", document.getElementById("boromir"))
    document.getElementById("main-image-card").src = ("./assets/img/boromir.jpg")
}

/* Global variables for fetching URL */
var oneApiBaseUrl = "https://the-one-api.dev/v2/"
var token = "Bearer ron5yZwz6rc4dCM-T5Z9"

var randomQuote = ""
var data = []

var fetchQuoteForCharacter = function (name, element) {


    /* Fetch character information */
    fetch(oneApiBaseUrl + "character?name=" + name, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                displayCharacterInfo(data)
                localStorage.setItem("characterData", JSON.stringify(data))
                console.log(name + ": " + data.docs[0]._id)
                fetchCharacterQuotes(data.docs[0]._id, element)

            })
        }
    })
}


/* Fetch quote for a character */
var fetchCharacterQuotes = function (characterId, element) {
    console.log("fetchCharacterQuotes called with characterId=", characterId)
    fetch(oneApiBaseUrl + "character/" + characterId + "/quote", {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {

                console.log(data)
                randomQuote = getRandomQuote(data.docs)
                document.getElementById("main-quote-card").innerHTML = randomQuote
            })
        }
    })
}

function displayCharacterInfo(data) {
    var infoEl = document.getElementById("info-card")
    infoEl.innerHTML = ""
    var InfoData = data.docs[0]

    var heading = document.createElement("h1")
    heading.innerHTML = InfoData.name
    infoEl.appendChild(heading);

    var wikiUrlEl = document.createElement("a")
    wikiUrlEl.textContent = InfoData.wikiUrl
    wikiUrlEl.title = "Link to LOTR wiki"
    wikiUrlEl.href = InfoData.wikiUrl
    infoEl.appendChild(wikiUrlEl)

    var heightEl = document.createElement("p")
    heightEl.innerHTML = "Height:" + InfoData.height
    infoEl.appendChild(heightEl)

    var raceEl = document.createElement("p")
    raceEl.innerHTML = "Race: " + InfoData.race
    infoEl.appendChild(raceEl)
}

/* Get a random quote from all quotes of a character */
var getRandomQuote = function (allCharacterQuotes) {
    var numQuotes = allCharacterQuotes.length
    var randomIndex = Math.floor(Math.random() * numQuotes)

    if (numQuotes == 0) {
        return "No Quote"
    }

    console.log("Quote at index ", randomIndex, " is ", allCharacterQuotes[randomIndex].dialog)
    return allCharacterQuotes[randomIndex].dialog
}
