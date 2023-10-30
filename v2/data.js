const CHARACTER_IMAGES = [
    { src: "character-middle" },
    { src: "character-left" },
    { src: "character-right" },
]

const ALL_DATA = [
    CHARACTER_IMAGES
]
var imagesToLoad = 0
var startGame

ALL_DATA.forEach(array => {
    imagesToLoad += array.length
    array.forEach(e => {
        var img = new Image()
        e.img = img
        img.onload = () => {
            imagesToLoad--
            e.width = img.naturalWidth
            e.height = img.naturalHeight
            if (imagesToLoad == 0) {
                startGame()
            }
        }
        img.src = e.src + ".png"
    })
})