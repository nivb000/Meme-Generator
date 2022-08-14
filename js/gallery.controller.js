
let elGallery
let elMemeEditor
let elSearch


function onInit() {
    elMemeEditor = document.querySelector(".meme-editor")
    elSearch = document.querySelector(".search-container")
    elGallery = document.querySelector(".image-gallery")
    renderGallery()
}

function renderGallery() {


    const imgs = getImgsToShow()

    var strHTML = imgs.map((img) => 
    `
    <img src="imgs/${img.id}.jpg" onclick="onGetMeme(${img.id})">
    `
    ) 

    elGallery.innerHTML = strHTML.join('')
}


function onFilterImgs(value){
    setFilterImgs(value)
    renderGallery()
}

function onGetMeme(id) {
    getMeme(id)
    initCanvas()
    renderMeme()
}

function openNav() {
    document.querySelector('ul').classList.add('open-menu')
}
function closeNav() {
    document.querySelector('ul').classList.remove('open-menu')
}

function openMemeEditor() {
    elGallery.style.display = 'none'
    elSearch.classList.remove('flex')
    elSearch.classList.add('none')
    elMemeEditor.style.display = 'flex'
}

function openGallery() {
    elGallery.style.display = 'grid'
    elSearch.classList.remove('none')
    elSearch.classList.add('flex')
    elMemeEditor.style.display = 'none'
}

function onSetLang(value) {
    setLang(value)
    if(value === 'he') {
        document.body.classList.add('rtl')
        document.querySelector('input[name="input-search"]').style.backgroundPosition = 'left'
    } else {
        document.body.classList.remove('rtl')
        document.querySelector('input[name="input-search"]').style.backgroundPosition = 'right'

    } 
    renderTranslate()
    renderGallery()
}