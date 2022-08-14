
var gImgs = [
    { id: 1, url: '././imgs/1.jpg', keywords: ['funny', 'usa'] },
    { id: 2, url: './imgs/2.jpg', keywords: ['funny', 'dogs'] },
    { id: 3, url: './imgs/3.jpg', keywords: ['funny', 'baby', 'sleep'] },
    { id: 4, url: './imgs/4.jpg', keywords: ['funny', 'cat', 'sleep','cats'] },
    { id: 5, url: './imgs/5.jpg', keywords: ['funny', 'baby', 'yes','win'] },
    { id: 6, url: './imgs/6.jpg', keywords: ['funny', 'hchannel', 'historychannel'] },
    { id: 7, url: './imgs/7.jpg', keywords: ['funny', 'baby', 'no way'] },
    { id: 8, url: './imgs/8.jpg', keywords: ['funny', 'when you', 'that face'] },
    { id: 9, url: './imgs/9.jpg', keywords: ['funny', 'hehe', 'baby'] },
    { id: 10, url: './imgs/10.jpg', keywords: ['funny', 'usa', 'smile'] },
    { id: 12, url: './imgs/12.jpg', keywords: ['funny', 'surprised', 'i got you'] },
    { id: 13, url: './imgs/13.jpg', keywords: ['funny', 'cheer', 'movie','movies'] },
    { id: 14, url: './imgs/14.jpg', keywords: ['funny', 'callous', 'movie','movies'] },
    { id: 15, url: './imgs/15.jpg', keywords: ['funny', 'exactly', 'movie','movies'] },
    { id: 16, url: './imgs/16.jpg', keywords: ['funny', 'oops', 'that face'] },
    { id: 17, url: './imgs/17.jpg', keywords: ['funny', 'russia', 'that face'] },
    { id: 18, url: './imgs/18.jpg', keywords: ['funny', 'kids show', 'kids memes'] }
]

var filteredImgs = []

function getImgsToShow() {

    let imgs = (filteredImgs.length > 0) ? filteredImgs : gImgs

    
    return imgs.map(img => img);

}

function setFilterImgs(value=''){
    let filtered = gImgs.filter(img => img.keywords.includes(value.toLowerCase()))
    filteredImgs = filtered
    getImgsToShow()
}