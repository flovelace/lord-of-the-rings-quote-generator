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

