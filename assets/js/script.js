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

}

function samQuote() {
    samCard.classList.remove('hide')

}

function merryQuote() {
    merryCard.classList.remove('hide')

}

function pippinQuote() {
    pippinCard.classList.remove('hide')

}

function gandalfQuote() {
    gandalfCard.classList.remove('hide')

}

function aragornQuote() {
    aragornCard.classList.remove('hide')

}

function legolasQuote() {
    legolasCard.classList.remove('hide')

}

function gimliQuote() {
    gimliCard.classList.remove('hide')

}

function boromirQuote() {
    boromirCard.classList.remove('hide')

}

