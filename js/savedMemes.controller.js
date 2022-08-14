


function renderMemes() {
    const memes = getMemesToDisplay()
    console.log(memes);

    var strHTML = memes.map(meme => `
        <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
            AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
            9TXL0Y4OHwAAAABJRU5ErkJggg=="/> 
    `)

    // console.log(strHTML);
    // document.querySelector(".image-gallery").innerHTML = strHTML.join('')
}