// DOM/Complete.js
class Complete {
    constructor(completeText) {
        this.row = document.createElement("div");
        this.row.className = "row";

        // 텍스트 박스
        this.innerText = document.createElement("div");
        this.innerText.className = "text-box done-text";
        this.innerText.innerText = completeText;

        // 복원 버튼을 아이콘으로 변경
        this.restoreBtn = document.createElement("button");
        const restoreIcon = new Image();
        restoreIcon.src = "./asset/return.png";
        restoreIcon.alt = "복원";
        restoreIcon.className = "icon-button";
        this.restoreBtn.appendChild(restoreIcon);
        this.restoreBtn.className = "restore-btn";

        // 삭제 버튼을 아이콘으로 변경
        this.delBtn = document.createElement("button");
        const deleteIcon = new Image();
        deleteIcon.src = "./asset/trash.png";
        deleteIcon.alt = "삭제";
        deleteIcon.className = "icon-button";
        this.delBtn.appendChild(deleteIcon);
        this.delBtn.className = "del-btn";
    }

    addRow() {
        [this.innerText, this.restoreBtn, this.delBtn].forEach((el) => {
            this.row.appendChild(el);
        });
        return this.row;
    }

    getRow() {
        return this.row;
    }

    getRestoreBtn() {
        return this.restoreBtn;
    }

    getDelBtn() {
        return this.delBtn;
    }

    getInnerText() {
        return this.innerText;
    }
}

export default Complete;
