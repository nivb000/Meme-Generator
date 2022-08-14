

var gCanvas
var gCtx
var currFont = 'Impact'
var gStartPos
const gTouchEvents = ['touchstart', 'touchmove', 'touchend']



function initCanvas() {
    gCanvas = document.querySelector("canvas")
    gCtx = gCanvas.getContext("2d")
    addEventsListeners()
}

function renderMeme() {
    //switch to Editor Mode
    openMemeEditor()

    //Find The Image From The Images Array
    var meme = gImgs.find(img => img.id === gMeme.selectedImgId)
    //Render The Img on the canvas
    var img = new Image()
    img.src = meme.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(line => {
            drawText(line.txt, line.pos.x, line.pos.y, line.size, line.color, line.strokeColor)
        })
    }
}

function resizeCanvas() {
    if (window.innerWidth >= 500) return
    var elEditor = document.querySelector('.meme-editor');
    gCanvas.width = elEditor.offsetWidth - 10;
    renderMeme()

}

function onSetLineTxt(value) {
    setLineTxt(value)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onAddLine(txt = "NEW LINE", pos = { x: 250, y: 365 }, size = 30) {
    setNewLine(txt, pos, size)
    onChangeLine()
}
function onChangeLine() {
    changeSelectedLine()
    document.querySelector("input[name='input']").value = gMeme.lines[gMeme.selectedLineIdx].txt
    renderMeme()
}

function onFontChange(value) {
    currFont = value
    renderMeme()
}
function onIncreaseFont() {
    icreaseFont()
    renderMeme()
}
function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onStrokeColor(value) {
    setStrokeColor(value)
    renderMeme()
}
function onFillColor(value) {
    setFillColor(value)
    renderMeme()
}
function onSetAlign(value) {
    setAlign(value)
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas.jpg'
}

function addEventsListeners() {
    gCanvas.addEventListener('mousedown', checkIsText)
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mouseup', stopDrag)
    gCanvas.addEventListener('touchstart', checkIsText)
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchend', stopDrag)
    window.addEventListener('resize', resizeCanvas)
}

function checkIsText(ev) {
    gStartPos = gMeme.lines[gMeme.selectedLineIdx].pos
    let stringLength = gMeme.lines[gMeme.selectedLineIdx].txt.length
    let checkArea = stringLength * 10
    let clickedText = null
    clickedText = gMeme.lines.find(line => {
        return ev.offsetX < line.pos.x + checkArea && ev.offsetX > line.pos.x - checkArea
    })
    if (clickedText) gMeme.lines[gMeme.selectedLineIdx].isDrag = true
}

function onMove(ev) {
    if (!gMeme.lines[gMeme.selectedLineIdx].isDrag) return
    gCanvas.style.cursor = "grab"
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()
}
function stopDrag() {
    setLineDrag(false)
}

function getEvPos(ev) {
    let pos
    pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvents.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}




function drawText(txt, x, y, fontSize, fillColor, strokeColor) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align;
    gCtx.lineWidth = 2;
    gCtx.font = `${fontSize}px ${currFont}`;
    gCtx.fillStyle = fillColor;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = strokeColor;
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

const shareButton = document.querySelector('.share-btn');

shareButton.addEventListener("click", async () => {
    const data = gCanvas.toDataURL('image/jpeg')
    const file = new File([data], "my-canvas.jpg", { type: "image/jpeg" });
    try {
        await navigator.share({
            title: "My Canvas",
            files: [file]
        });
    } catch (err) {
        console.error("Share failed:", err.message);
    }
});
