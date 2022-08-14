


function renderMemes() {
    openGallery()
    const memes = getMemesToDisplay()
    var strHTML = memes.map(meme => `
    <img src="${meme.previewImg}" onclick="renderSavedMeme(${meme.id})"/>
    `)
    document.querySelector(".image-gallery").innerHTML = strHTML.join('')
}

function renderSavedMeme(id) {
    const meme = gMemes.find(meme => meme.id = id)
    setgMeme(meme)
    initCanvas()
    openMemeEditor()
    renderMeme()
}