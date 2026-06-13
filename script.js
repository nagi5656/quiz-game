const questions = [
{
question:`<ruby>優<rt>ㄧㄡ</rt></ruby><ruby>格<rt>ㄍㄜˊ</rt></ruby>是屬於哪六大類食物呢？`,
options:["五穀雜糧類","油脂與堅果種子類","乳品類","豆魚蛋肉類"],
answer:"乳品類",
explain:"優格是乳品類，有豐富的蛋白質、鈣質和維生素"
},
{
question:`<ruby>小<rt>ㄒㄧㄠˇ</rt></ruby><ruby>黃<rt>ㄏㄨㄤˊ</rt></ruby><ruby>瓜<rt>ㄍㄨㄚ</rt></ruby>是屬於哪六大類食物呢？`,
options:["五穀雜糧類","油脂與堅果種子類","蔬菜類","水果類"],
answer:"蔬菜類",
explain:"小黃瓜是蔬菜類，有豐富維生素"
},
{
question:"哪個不是營養素呢？",
options:["醣類","酒精","蛋白質","脂類"],
answer:"酒精",
explain:"酒精不是營養素"
},
{
question:"每一餐要怎麼吃呢？",
options:["每餐一碗飯","每餐一湯匙的肉","每餐一掌心的蔬菜","每餐兩杯牛奶"],
answer:"每餐一碗飯",
explain:"均衡餐盤要有飯、肉、蔬菜和牛奶"
},
{
question:"哪種食物提供鈣質？",
options:["蔬菜類","乳品類","油脂類","五穀類"],
answer:"乳品類",
explain:"乳品類含鈣質"
},
{
question:"水果每餐吃多少？",
options:["一個拳頭大小","一個掌心大小","一湯匙","不用吃"],
answer:"一個拳頭大小",
explain:"水果建議一個拳頭大小"
},
{
question:"怎樣吃最健康？",
options:["水果不洗","吃加工食品","吃油炸食物","均衡飲食不挑食"],
answer:"均衡飲食不挑食",
explain:"均衡飲食最健康"
},
{
question:"休息時會消耗熱量嗎？",
options:["不會","會","只有睡覺","只有運動"],
answer:"會",
explain:"休息時身體仍消耗熱量"
},
{
question:"吃比消耗多會怎樣？",
options:["體重增加","體重減少","長不高","不變"],
answer:"體重增加",
explain:"多餘熱量會變脂肪"
},
{
question:"哪個活動消耗最多熱量？",
options:["看電視","慢走","快走","慢跑"],
answer:"慢跑",
explain:"慢跑最耗熱量"
},
{
question:"哪種營養幫助長肌肉？",
options:["蛋白質","糖","油","鹽"],
answer:"蛋白質",
explain:"蛋白質幫助長肌肉"
},
{
question:"哪個熱量最高？",
options:["蛋白質","澱粉","脂肪","水"],
answer:"脂肪",
explain:"脂肪熱量最高"
},
{
question:"肌肉多的人通常怎樣？",
options:["容易消耗熱量","不會累","不用吃飯","不流汗"],
answer:"容易消耗熱量",
explain:"肌肉多消耗更多熱量"
},
{
question:"哪個習慣最健康？",
options:["只喝飲料","不運動","適量運動並均衡吃東西","只吃糖果"],
answer:"適量運動並均衡吃東西",
explain:"均衡飲食加運動最健康"
}
];

function loadBingoBoard(){
    let board=document.getElementById("bingoBoard");
    let completed=JSON.parse(localStorage.getItem("done"))||[];

    document.getElementById("completed").innerText=completed.length;

    board.innerHTML="";

    questions.forEach((q,index)=>{
        let btn=document.createElement("button");
        btn.innerText=index+1;
        btn.className="bingo-btn";

        if(completed.includes(index)){
            btn.classList.add("done");
        }

        btn.onclick=()=>{
            localStorage.setItem("currentQuestion",index);
            window.location.href="question.html";
        };

        board.appendChild(btn);
    });
}

function loadQuestion(){
    let index=parseInt(localStorage.getItem("currentQuestion"));
    let q=questions[index];

    document.getElementById("questionBox").innerHTML=`<h2>${q.question}</h2>`;

    let html="";

    q.options.forEach(option=>{
        html+=`<button class="option-btn" onclick="selectAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("optionsBox").innerHTML=html;
}

function selectAnswer(choice){
    localStorage.setItem("selectedAnswer",choice);
    window.location.href="answer.html";
}

function loadAnswer(){
    let index=parseInt(localStorage.getItem("currentQuestion"));
    let q=questions[index];
    let selected=localStorage.getItem("selectedAnswer");

    let completed=JSON.parse(localStorage.getItem("done"))||[];

    if(selected===q.answer && !completed.includes(index)){
        completed.push(index);
        localStorage.setItem("done",JSON.stringify(completed));
    }

    document.getElementById("answerBox").innerHTML=`
    <h2>${selected===q.answer ? "答對了！" : "答錯了！"}</h2>
    <p>正確答案：${q.answer}</p>
    <p>詳解：${q.explain}</p>
    `;
}

function goHome(){
    window.location.href="index.html";
}