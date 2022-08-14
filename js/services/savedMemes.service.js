var gMemes = loadFromStorage('memesDB') || []

function getMemesToDisplay() {
    return gMemes
}


function createSavedMeme(previewImg, meme) {
    gMemes.push({
        id: meme.selectedImgId,
        previewImg,
        selectedImgId: meme.selectedImgId,
        selectedLineIdx: meme.selectedLineIdx,
        lines: meme.lines,
    })
    saveToStorage('memesDB', gMemes)
}






























function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}