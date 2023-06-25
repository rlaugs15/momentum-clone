const toDoForm = document.querySelector('.todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('.todo-li')

const TODOS_KEY = 'todos'

let toDos = []//새로 입력된 todo유지: const->let으로 바꿔 업데이트가 가능하도록 변경

/**toDos array를 localStorage에 집어넣는 함수 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement//이벤트가 발생했들때.해당객체를 지정하여.그것의 부모태그를 지정
    console.log(typeof li.id)
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id))//클릭했던 li의 id를 갖고 있는 toDo를 삭제
    saveToDos()
}

function paintTodo(newTodo) {
    const li = document.createElement('li')
    li.id = newTodo.id //아이디 부여ㅎㅎ
    const span = document.createElement('span')//삭제버튼 만들기 위해 span사용
    span.innerText = newTodo.text //.text를 추가하므로써 랜덤아이디를 부여하고 화면에 [object Object]가 뜨는 상황 해결
    const button = document.createElement('button')
    button.innerText = ('❌')
    button.addEventListener('click', deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value //초기화 전에 값을 따로 저장
    toDoInput.value = '' //input에 값을 입력 후 엔터를 치면 빈창으로 초기화 됨
    const newTodoObj = { //값에 아이디를 주기 위해 텍스트가 아닌 오브젝트를 푸쉬
        text: newTodo,
        id: Date.now()//랜덤 아이디를 위해 삽입
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos() //실수- 연결을 안 해서 작동이 안 됐음
}

toDoForm.addEventListener('submit', handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos //새로 입력된 todo유지2: localStorage에 toDo 들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    parsedToDos.forEach(paintTodo) //Arrow function: parsedToDos 배열의 요소마다 실행(중요)
}