/**시간 실시간으로 보여주는 함수 */
const clock = document.querySelector('h2.clock')

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0') //getHours은 number라서 문자로 변환
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

getClock() // 1초를 기다리지 않고 처음 시작하자마자 즉시 호출함
setInterval(getClock, 1000)