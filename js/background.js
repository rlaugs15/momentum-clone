const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img') //img를 만들고

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)