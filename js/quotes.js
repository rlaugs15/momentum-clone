const quotes = [
    {
        quote: '적을 알고 나를 알면 백번싸워도 위태롭지 않다.',
        author: '손자병법'
    },
    {
        quote: '실패를 실패로 끝내지 않는 사람만이 마지막에 웃을 수 있다.',
        author: '손자병법'
    },
    {
        quote: '결단을 내리면 즉시 실천하라. 김은 새어나가기 마련이다.',
        author: '손자병법'
    },
    {
        quote: '정직도 지나치면 지혜가 없다는 증거다.',
        author: '손자병법'
    },
    {
        quote: '장수는 엄하면서 부하를 사랑해야 한다.',
        author: '손자병법'
    },
    {
        quote: '속마음을 쉽게 털어놓고나서, 정작 본인은 맨주먹이 되어있지 않은가.',
        author: '손자병법'
    },
    {
        quote: '기선을 제압하면 주도권을 잡는다.',
        author: '손자병법'
    },
    {
        quote: '쓸데없는 이유나 불리한 정보는 알리지 마라.',
        author: '손자병법'
    },
    {
        quote: '사람의 마음을 헤아릴 줄 알아야 사람 위에 설 수 있다.',
        author: '손자병법'
    },
    {
        quote: '정보의 빈곤은 불행을 초래한다, 정보는 활용해야 내 것이 된다.',
        author: '손자병법'
    }
]

const quote = document.querySelector('.quote span:first-child')
const author = document.querySelector('.quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author