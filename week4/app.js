// 1. js파일에서 접근해야하는 html dom요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

// 3. displayMyChoice 함수 작성
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;
    
    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);
}

// 7. 승패 판단 + 점수 추가
const myScoreEl = document.querySelector(".my-score");
const comScoreEl = document.querySelector(".computer-score");

// 변수 선언 및 초기화
let myScore = 0;
let comScore = 0;

function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);

    // 승패 판정 및 점수 증가
    const winner = getWinner(myChoice, comChoice);
    const resultDisplay = document.getElementById("display-result");

    if (winner === "draw") {
        resultDisplay.innerText = "DRAW!";
    } else if (winner === "me") {
        resultDisplay.innerText = "WIN!";
        myScore++;
    } else {
        resultDisplay.innerText = "LOSE!";
        comScore++;
    }

    // 점수 표시
    myScoreEl.innerText = myScore;
    comScoreEl.innerText = comScore;
}

// 승리 조건
function getWinner(me, com) {
    if (me === com) return "draw";
    if (
        (me === "rock" && com === "scissors") ||
        (me === "scissors" && com === "paper") ||
        (me === "paper" && com === "rock")
    ) {
        return "me";
    }
    return "com";
}

// 8. 리셋 기능
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    myScore = 0;
    comScore = 0;
    myScoreEl.innerText = "0";
    comScoreEl.innerText = "0";
    myHandText.innerText = "";
    myHandIcon.className = "";
    computerText.innerText = "";
    computerIcon.className = "";
    document.getElementById("display-result").innerText = "";
}

// 9. 다크모드 추가
const darkToggleBtn = document.getElementById("darkmode-toggle");

darkToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // 버튼 텍스트 바꾸기
  if (document.body.classList.contains("dark-mode")) {
    darkToggleBtn.innerText = "☀️ 라이트모드";
  } else {
    darkToggleBtn.innerText = "🌙 다크모드";
  }
});