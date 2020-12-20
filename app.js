Access-Control-Allow-Origin: https://neha-banana-translator.netlify.app/

var textInput = document.querySelector("#txt-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    var encodedURI = encodeURI(text);
    return `${serverUrl}?text=${encodedURI}`;
}

function errorHandler(error) {
    console.log("an error occurred => "+ error)
}

btnTranslate.addEventListener("click", function clickEventHandler() {

    var inputText = textInput.value;

    //calling server for functioning
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler)
});