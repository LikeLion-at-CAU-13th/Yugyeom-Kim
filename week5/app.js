// 6번째
import TodoController from "./controller/TodoController.js";
import CompleteController from "./controller/CompleteController.js";

const addBtn = document.getElementById('input-button');
const input = document.querySelector('input');

const todoList = document.getElementById("to-do-list");
const completeList = document.getElementById("complete-list");
const completeAllBtn = document.getElementById("complete-all-button");

// 완료 컨트롤러 인스턴스 생성
const completeController = new CompleteController(completeList);

addBtn.addEventListener("click", () => {
    // 앞뒤 공백 제거
    const text = input.value.trim(); 
    
    // 공백 입력 막기
    if (text !== "") {               
      const todo = new TodoController(text);
      todo.addTodo();
    }
  });
  
// 엔터키로도 추가 가능
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

// 전체 완료 버튼 클릭 시 할 일 전체 이동
completeAllBtn.addEventListener("click", () => {
    const todoItems = [...todoList.children];
  
    todoItems.forEach((item) => {
      const textBox = item.querySelector(".text-box");
      if (textBox) {
        const text = textBox.innerText;
        completeController.addTask(text);
        todoList.removeChild(item);
      }
    });
  });

