const questions = [
    {
        question: "台（ㄊㄞˊ）灣（ㄨㄢ）首（ㄕㄡˇ）都（ㄉㄨ）是（ㄕˋ）哪（ㄋㄚˇ）裡（ㄌㄧˇ）？",
        options: [
            "高（ㄍㄠ）雄（ㄒㄩㄥˊ）",
            "台（ㄊㄞˊ）中（ㄓㄨㄥ）",
            "台（ㄊㄞˊ）北（ㄅㄟˇ）",
            "台（ㄊㄞˊ）南（ㄋㄢˊ）"
        ],
        answer: "台（ㄊㄞˊ）北（ㄅㄟˇ）",
        explain: "台（ㄊㄞˊ）北（ㄅㄟˇ）是（ㄕˋ）台（ㄊㄞˊ）灣（ㄨㄢ）的（ㄉㄜ˙）首（ㄕㄡˇ）都（ㄉㄨ）。"
    },
    {
        question: "3 × 3 = ?",
        options: ["6", "7", "8", "9"],
        answer: "9",
        explain: "3乘（ㄔㄥˊ）3等（ㄉㄥˇ）於（ㄩˊ）9。"
    }
];

function startGame() {
    localStorage.setItem("currentQuestion", 0);
    window.location.href = "question.html";
}

function loadQuestion() {
    let index = parseInt(localStorage.getItem("currentQuestion"));
    let q = questions[index];

    if (!q) return;

    document.getElementById("questionBox").innerHTML =
        `<h2>${q.question}</h2>`;

    let optionsHTML = "";

    q.options.forEach(option => {
        optionsHTML += `
            <button class="option-btn"
                onclick="selectAnswer('${option}')">
                ${option}
            </button>
        `;
    });

    document.getElementById("optionsBox").innerHTML = optionsHTML;
}

function selectAnswer(choice) {
    localStorage.setItem("selectedAnswer", choice);
    window.location.href = "answer.html";
}

function loadAnswer() {
    let index = parseInt(localStorage.getItem("currentQuestion"));
    let selected = localStorage.getItem("selectedAnswer");
    let q = questions[index];

    let correct = selected === q.answer;

    document.getElementById("resultBox").innerHTML = `
        <h2>
        ${correct ? "答（ㄉㄚˊ）對（ㄉㄨㄟˋ）了（ㄌㄜ˙）" : "答（ㄉㄚˊ）錯（ㄘㄨㄛˋ）了（ㄌㄜ˙）"}
        </h2>

        <p>
        正（ㄓㄥˋ）確（ㄑㄩㄝˋ）答（ㄉㄚˊ）案（ㄢˋ）：
        ${q.answer}
        </p>

        <p>
        詳（ㄒㄧㄤˊ）解（ㄐㄧㄝˇ）：
        ${q.explain}
        </p>
    `;
}

function nextQuestion() {
    let index = parseInt(localStorage.getItem("currentQuestion"));
    index++;

    if (index >= questions.length) {
        alert("遊（ㄧㄡˊ）戲（ㄒㄧˋ）結（ㄐㄧㄝˊ）束（ㄕㄨˋ）！");
        window.location.href = "index.html";
        return;
    }

    localStorage.setItem("currentQuestion", index);
    window.location.href = "question.html";
}

function goHome() {
    window.location.href = "index.html";
}

if (window.location.pathname.includes("question.html")) {
    loadQuestion();
}

if (window.location.pathname.includes("answer.html")) {
    loadAnswer();
}