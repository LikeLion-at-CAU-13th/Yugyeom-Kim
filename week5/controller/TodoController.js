// TodoController.js, 5번째
import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

// 전역으로 completeList DOM을 받아오고 컨트롤러 생성
const completeList = document.getElementById("complete-list");
const completeController = new CompleteController(completeList);

class TodoController {
    constructor(todoText) {
        this.newTodo = new Todo(todoText);

        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();   
        })
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })
    }
    addTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.appendChild(this.newTodo.addRow());
    
        const input = document.querySelector('input');
        input.value = '';
    }
    delTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }
    doneTodo() {
        // 1. completeController를 통해 complete-list에 추가
        completeController.addTask(this.innerNode.innerText);

        // 2. to-do-list에서 제거
        this.delTodo();
    }
}

export default TodoController;