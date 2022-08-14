
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 38,
            align: 'center',
            strokeColor: 'black',
            color: 'white',
            isDrag: false,
            pos: { x: 250, y: 35 }
        }
    ]
}
function getMeme(id) {
    gMeme.selectedImgId = id
    return gMeme
}
function setLineTxt(value) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if(line){
        gMeme.lines[gMeme.selectedLineIdx].txt = value
    }
}
function setNewLine(txt, pos, size) {
    gMeme.lines.push({
        txt,
        size,
        align: 'center',
        strokeColor: 'black',
        color: 'white',
        isDrag: false,
        pos,
    })
}
function deleteLine() {
    const deletedIdx = gMeme.selectedLineIdx
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function setStrokeColor(value) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = value
}
function setFillColor(value) {
    gMeme.lines[gMeme.selectedLineIdx].color = value
}
function setAlign(value) {
    gMeme.lines[gMeme.selectedLineIdx].align = value
}
function changeSelectedLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}
function icreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}
function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
}

function setgMeme(meme){
    gMeme.selectedImgId = meme.selectedImgId,
    gMeme.selectedLineIdx = meme.selectedLineIdx,
    gMeme.lines = meme.lines
}