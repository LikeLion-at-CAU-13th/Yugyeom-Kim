// DOM.js, 모든 것의 뼈대가 되는 js
class DOM {
    constructor(tagName, innerText, className){
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className);    

    }
}

export default DOM;