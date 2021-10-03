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


frodoButton.addEventListener('click', frodoQuote)
samButton.addEventListener('click', samQuote)
merryButton.addEventListener('click', merryQuote)
pippinButton.addEventListener('click', pippinQuote)
gandalfButton.addEventListener('click', gandalfQuote)
aragornButton.addEventListener('click', aragornQuote)
legolasButton.addEventListener('click', legolasQuote)
gimliButton.addEventListener('click', gimliQuote)
boromirButton.addEventListener('click', boromirQuote)



function frodoQuote() {
    frodoCard.classList.remove('hide')
    fetchCharacterInfo("Frodo Baggins")
}

function samQuote() {
    samCard.classList.remove('hide')
    fetchCharacterInfo("Samwise Gamgee")
}

function merryQuote() {
    merryCard.classList.remove('hide')
    fetchCharacterInfo("Merry Gamgee")
}

function pippinQuote() {
    pippinCard.classList.remove('hide')
    fetchCharacterInfo("Pippin Gamgee")

}

function gandalfQuote() {
    gandalfCard.classList.remove('hide')
    fetchCharacterInfo("Gandalf")
}

function aragornQuote() {
    aragornCard.classList.remove('hide')
    fetchCharacterInfo("Aragorn II Elessar")
}

function legolasQuote() {
    legolasCard.classList.remove('hide')
    fetchCharacterInfo("Legolas")
}

function gimliQuote() {
    gimliCard.classList.remove('hide')
    fetchCharacterInfo("Gimli")
}

function boromirQuote() {
    boromirCard.classList.remove('hide')
    fetchCharacterInfo("Boromir")
}

var oneApiBaseUrl = "https://the-one-api.dev/v2/"
var token = "Bearer ron5yZwz6rc4dCM-T5Z9"

var characterId = ""

var fetchCharacterInfo = function (name) {

    fetch(oneApiBaseUrl + "character?name=" + name, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                characterId = data.docs[0]._id

                console.log(name + ": " + characterId)
            })
        }
    })
}

