// Todo.js, 4번째
import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');

        // 완료 버튼을 아이콘으로 변경
        this.completeBtn = document.createElement("button");
        const checkIcon = new Image();
        checkIcon.src = "./asset/complete.png";
        checkIcon.alt = "완료";
        checkIcon.className = "icon-button";
        this.completeBtn.appendChild(checkIcon);
        this.completeBtn.className = "complete-btn";

        // 삭제 버튼을 아이콘으로 변경
        this.delBtn = document.createElement("button");
        const deleteIcon = new Image();
        deleteIcon.src = "./asset/trash.png";
        deleteIcon.alt = "삭제";
        deleteIcon.className = "icon-button";
        this.delBtn.appendChild(deleteIcon);
        this.delBtn.className = "del-btn";
    }

    // 만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환 / forEach의 개념..
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom) => {
            if (dom.node) {
                this.row.appendChild(dom.node);
            } else {
                this.row.appendChild(dom);
            }
        });

        return this.row;
    }

    // 각 요소의 getter 메서드들
    getRow() {
        return this.row;
    }
    getCompleteBtn() {
        return this.completeBtn;
    }
    getDelBtn() {
        return this.delBtn;
    }
    getInnerText() {
        return this.innerText.node;
    }
}

export default Todo;