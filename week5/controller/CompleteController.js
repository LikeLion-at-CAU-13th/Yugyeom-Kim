// controller/CompleteController.js
import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(target) {
        // complete-list DOM
        this.target = target;
    }

    addTask(text) {
        const newComplete = new Complete(text);
        const row = newComplete.addRow();

        // 삭제 버튼
        newComplete.getDelBtn().addEventListener("click", () => {
            this.target.removeChild(row);
        });

        // 복원 버튼 → 다시 TodoController를 이용해 To-Do로 이동
        newComplete.getRestoreBtn().addEventListener("click", () => {
            this.target.removeChild(row);
            const restored = new TodoController(text);
            restored.addTodo();
        });

        this.target.appendChild(row);
    }
}

export default CompleteController;
