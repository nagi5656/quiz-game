const questions = [
{
question: `
<ruby>優<rt>ㄧㄡ</rt></ruby>
<ruby>格<rt>ㄍㄜˊ</rt></ruby>
<ruby>是<rt>ㄕˋ</rt></ruby>
<ruby>屬<rt>ㄕㄨˇ</rt></ruby>
<ruby>於<rt>ㄩˊ</rt></ruby>
<ruby>哪<rt>ㄋㄚˇ</rt></ruby>
<ruby>六<rt>ㄌㄧㄡˋ</rt></ruby>
<ruby>大<rt>ㄉㄚˋ</rt></ruby>
<ruby>類<rt>ㄌㄟˋ</rt></ruby>
<ruby>食<rt>ㄕˊ</rt></ruby>
<ruby>物<rt>ㄨˋ</rt></ruby>
<ruby>呢<rt>ㄋㄜ</rt></ruby>？
`,
options:["五穀雜糧類","油脂與堅果種子類","乳品類","豆魚蛋肉類"],
answer:"乳品類",
explain:"優格是乳品類，有豐富蛋白質、鈣質和維生素"
},

{
question:"小黃瓜是屬於哪六大類食物呢？",
options:["五穀雜糧類","油脂與堅果種子類","蔬菜類","水果類"],
answer:"蔬菜類",
explain:"小黃瓜是蔬菜類，有豐富維生素"
},

{
question:"哪個不是營養素呢？",
options:["醣類","酒精","蛋白質","脂類"],
answer:"酒精",
explain:"酒精不是營養素"
}
];

function loadBingoBoard() {
    let board = document.getElementById("bingoBoard");
    let completed = JSON.parse(localStorage.getItem("done")) || [];

    document.getElementById("completed").innerText = completed.length;
    board.innerHTML = "";

    questions.forEach((q, index) => {
        let btn = document.createElement("button");
        btn.innerText = index + 1;
        btn.className = "bingo-btn";

        if (completed.includes(index)) {
            btn.classList.add("done");
        }

        btn.onclick = () => {
            localStorage.setItem("currentQuestion", index);
            window.location.href = "question.html";
        };

        board.appendChild(btn);
    });
}

function loadQuestion() {
    let index = parseInt(localStorage.getItem("currentQuestion"));
    let q = questions[index];

    document.getElementById("questionBox").innerHTML = q.question;

    let html = "";

    q.options.forEach(option => {
        html += `
        <button class="option-btn" onclick="selectAnswer('${option}')">
        ${option}
        </button>`;
    });

    document.getElementById("optionsBox").innerHTML = html;
}

function selectAnswer(choice) {
    localStorage.setItem("selectedAnswer", choice);
    window.location.href = "answer.html";
}

function loadAnswer() {
    let index = parseInt(localStorage.getItem("currentQuestion"));
    let q = questions[index];
    let selected = localStorage.getItem("selectedAnswer");

    let completed = JSON.parse(localStorage.getItem("done")) || [];

    if (selected === q.answer && !completed.includes(index)) {
        completed.push(index);
        localStorage.setItem("done", JSON.stringify(completed));
    }

    document.getElementById("answerBox").innerHTML = `
    <h2>${selected === q.answer ? "答對了！" : "答錯了！"}</h2>
    <p>正確答案：${q.answer}</p>
    <p>詳解：${q.explain}</p>
    `;
}

function goHome() {
    window.location.href = "index.html";
}