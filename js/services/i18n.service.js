var gCurrLang = 'en'

var gTranslator = {
    title: {
        en: 'Ultimate Meme Generator',
        he: 'עורך הממים'
    },
    'nav-gallery': {
        en: 'Gallery',
        he: 'גלריה'
    },
    'nav-memes': {
        en: 'Memes',
        he: 'ממים'
    },
    'nav-about': {
        en: 'About',
        he: 'אודות'
    },
    'search-ph': {
        en: 'Type To Search',
        he: 'הקלד כדי לחפש'
    },
    'btn-download': {
        en: 'Download',
        he: 'הורד'
    },
    'btn-share': {
        en: 'Share',
        he: 'שתף'
    },
    'btn-save': {
        en: 'Save',
        he: 'שמור'
    }
}



function getTranslate(transKey) {
    const key = gTranslator[transKey]
    let translateValue = key[gCurrLang]
    if (!translateValue) translateValue = key['en']
    return translateValue
}

function renderTranslate() {

    const words = document.querySelectorAll('[data-translate]')

    words.forEach(word => {
        const translateKey = word.dataset.translate
        const translateValue = getTranslate(translateKey)
        word.innerText = translateValue
        if (word.placeholder) word.placeholder = translateValue
    })
}

function setLang(lang) {
    gCurrLang = lang
}