//global character variables
var frodoButton = document.getElementById('frodo-button')
var frodoCard = document.getElementById('frodo-card')

var samButton = document.getElementById('sam-button')
var samCard = document.getElementById('sam-card')

var merryButton = document.getElementById('merry-button')
var merryCard = document.getElementById('merry-card')

var pippinButton = document.getElementById('pippin-button')
var pippinCard = document.getElementById('pippin-card')

var gandalfButton = document.getElementById('gandalf-button')
var gandalfCard = document.getElementById('gandalf-card')

var aragornButton = document.getElementById('aragorn-button')
var aragornCard = document.getElementById('aragorn-card')

var legolasButton = document.getElementById('legolas-button')
var legolasCard = document.getElementById('legolas-card')

var gimliButton = document.getElementById('gimli-button')
var gimliCard = document.getElementById('gimli-card')

var boromirButton = document.getElementById('boromir-button')
var boromirCard = document.getElementById('boromir-card')

//variables for close button
var closeButtonFrodo = document.getElementById('close-button-frodo')
var closeButtonSam = document.getElementById('close-button-sam')
var closeButtonMerry = document.getElementById('close-button-merry')
var closeButtonPippin = document.getElementById('close-button-pippin')
var closeButtonGandalf = document.getElementById('close-button-gandalf')
var closeButtonAragorn = document.getElementById('close-button-aragorn')
var closeButtonLegolas = document.getElementById('close-button-legolas')
var closeButtonGimli = document.getElementById('close-button-gimli')
var closeButtonBoromir = document.getElementById('close-button-boromir')

//event listener for close button
closeButtonFrodo.addEventListener('click', closeWindowFrodo);
closeButtonSam.addEventListener('click', closeWindowSam);
closeButtonMerry.addEventListener('click', closeMerryWindow);
closeButtonPippin.addEventListener('click', closePippinwindow);
closeButtonGandalf.addEventListener('click', closeGandalfwindow);
closeButtonAragorn.addEventListener('click', closeAragornWindow);
closeButtonLegolas.addEventListener('click', closeLegolaswindow);
closeButtonGimli.addEventListener('click', closeGimliWindow);
closeButtonBoromir.addEventListener('click', closeBoromirWindow);

//function to close the character window
function closeWindowFrodo() {
    frodoCard.classList.add('hide')   
}

function closeWindowSam() {
    samCard.classList.add('hide')
}

function closeMerryWindow() {
    merryCard.classList.add('hide')
}

function closePippinwindow() {
    pippinCard.classList.add('hide')
}

function closeGandalfwindow() {
    gandalfCard.classList.add('hide')
}

function closeAragornWindow() {
    aragornCard.classList.add('hide')
}

function closeLegolaswindow() {
    legolasCard.classList.add('hide')
}

function closeGimliWindow() {
    gimliCard.classList.add('hide')
}

function closeBoromirWindow() {
    boromirCard.classList.add('hide')
}

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
    frodoCard.classList.remove('hide')
    fetchQuoteForCharacter("Frodo Baggins")
}

function samQuote() {
    samCard.classList.remove('hide')
    fetchQuoteForCharacter("Samwise Gamgee")
}

function merryQuote() {
    merryCard.classList.remove('hide')
    fetchQuoteForCharacter("Merry Gamgee")
}

function pippinQuote() {
    pippinCard.classList.remove('hide')
    fetchQuoteForCharacter("Pippin Gamgee")

}

function gandalfQuote() {
    gandalfCard.classList.remove('hide')
    fetchQuoteForCharacter("Gandalf")
}

function aragornQuote() {
    aragornCard.classList.remove('hide')
    fetchQuoteForCharacter("Aragorn II Elessar")
}

function legolasQuote() {
    legolasCard.classList.remove('hide')
    fetchQuoteForCharacter("Legolas")
}

function gimliQuote() {
    gimliCard.classList.remove('hide')
    fetchQuoteForCharacter("Gimli")
}

function boromirQuote() {
    boromirCard.classList.remove('hide')
    fetchQuoteForCharacter("Boromir")
}

/* Global variables for fetching URL */
var oneApiBaseUrl = "https://the-one-api.dev/v2/"
var token = "Bearer ron5yZwz6rc4dCM-T5Z9"

var randomQuote = ""

var fetchQuoteForCharacter = function (name) {

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
                console.log(name + ": " + data.docs[0]._id)
                fetchCharacterQuotes(data.docs[0]._id)
            })
        }
    })
}

/* Fetch quote for a character */
var fetchCharacterQuotes = function (characterId) {
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
            })
        }
    })
}

/* Get a random quote from all quotes of a character */
var getRandomQuote = function (allCharacterQuotes) {
    var numQuotes = allCharacterQuotes.length
    var randomIndex = Math.floor(Math.random() * numQuotes)

    console.log("Quote at index ", randomIndex, " is ", allCharacterQuotes[randomIndex].dialog)
    return allCharacterQuotes[randomIndex].dialog
}
