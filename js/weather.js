const API_KEY = '9b0d8bb64aea922f1e9b279351f5e21d'

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log('당신의 현재 위치입니다.', lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`//&units=metric 화씨를 섭씨로 바꿈
    //따옴표가 아니라 백틱으로 감쌈 ``
    console.log(url)
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector('.weather span:first-child')
            const city = document.querySelector('.weather span:last-child')
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        })
}
function onGeoError() {
    alert('날짜를 수신할 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)