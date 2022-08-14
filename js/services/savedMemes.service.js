

var gMemes = loadFromStorage('memesDB') || []

function getMemesToDisplay() {
    return gMemes
}


function saveMeme(data) {
    gMemes.push(data)
    saveToStorage('memesDB', gMemes)
}































function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}