const questions = [

{
question: `
<ruby>優<rt>ㄧㄡ</rt></ruby><ruby>格<rt>ㄍㄜˊ</rt></ruby>
<ruby>是<rt>ㄕˋ</rt></ruby><ruby>屬<rt>ㄕㄨˇ</rt></ruby>
<ruby>於<rt>ㄩˊ</rt></ruby><ruby>哪<rt>ㄋㄚˇ</rt></ruby>
<ruby>六<rt>ㄌㄧㄡˋ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby>
<ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby>
<ruby>物<rt>ㄨˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？
`,
options:[
"五穀雜糧類",
"油脂與堅果種子類",
"乳品類",
"豆魚蛋肉類"
],
answer:"乳品類",
explain:"優格是乳品類，有豐富的蛋白質、鈣質和維生素"
},

{
question:"小黃瓜是屬於哪六大類食物呢？",
options:["五穀雜糧類","油脂與堅果種子類","蔬菜類","水果類"],
answer:"蔬菜類",
explain:"小黃瓜是蔬菜類，有豐富的醣類和維生素"
},

{
question:"哪個不是營養素呢？",
options:["醣類","酒精","蛋白質","脂類"],
answer:"酒精",
explain:"營養素主要有醣類、蛋白質、脂肪、維生素，而酒精不是營養素"
},

{
question:"每一餐要怎麼吃呢？",
options:[
"每餐一碗飯",
"每餐一湯匙的肉",
"每餐一掌心的蔬菜",
"每餐兩杯牛奶"
],
answer:"每餐一碗飯",
explain:"每餐須吃一碗飯、一掌心的肉、半碗到一碗的蔬菜和一杯牛奶"
},

{
question:"吃哪種六大類食物可以提供身體鈣質呢？",
options:["蔬菜類","乳品類","油脂與堅果種子類","五穀雜糧類"],
answer:"乳品類",
explain:"乳品類像牛奶和起司有豐富的鈣質"
},

{
question:"水果類每餐要吃多少份量呢？",
options:[
"一個拳頭大小",
"一個掌心大小",
"一湯匙",
"不用吃水果"
],
answer:"一個拳頭大小",
explain:"水果類要吃一個拳頭大小才能得到充足維生素"
},

{
question:"要怎麼樣吃才最健康呢？",
options:[
"吃水果前沒有洗水果",
"吃加工食物像香腸",
"吃油炸食物像炸雞薯條",
"均衡飲食而且不挑食"
],
answer:"均衡飲食而且不挑食",
explain:"均衡飲食而且不挑食才最健康"
},

{
question:"人在休息時身體還會消耗熱量嗎？",
options:["不會","會","只有睡覺才會","只有運動才會"],
answer:"會",
explain:"休息時身體還需要熱量維持呼吸和心跳"
},

{
question:"每天吃進去熱量比消耗多會怎樣？",
options:["體重增加","體重減少","長不高","不會改變"],
answer:"體重增加",
explain:"多餘熱量會存起來變成脂肪"
},

{
question:"哪一個活動消耗熱量最多？",
options:["坐著看電視","慢慢走路","快走","慢跑"],
answer:"慢跑",
explain:"慢跑比快走和慢走消耗更多熱量"
},

{
question:"哪一種營養最能幫助長肌肉？",
options:["蛋白質","糖","油","鹽巴"],
answer:"蛋白質",
explain:"蛋白質可以幫助身體修復和長肌肉"
},

{
question:"哪一個東西熱量最高？",
options:["蛋白質","澱粉","脂肪","水"],
answer:"脂肪",
explain:"脂肪熱量比蛋白質和澱粉高"
},

{
question:"肌肉比較多的人通常會怎樣？",
options:[
"比較容易消耗熱量",
"完全不會累",
"不需要吃飯",
"不會流汗"
],
answer:"比較容易消耗熱量",
explain:"肌肉越多消耗能量越多"
},

{
question:"哪一個習慣最健康？",
options:[
"每天只喝飲料",
"都不運動",
"適量運動並均衡吃東西",
"每天只吃糖果"
],
answer:"適量運動並均衡吃東西",
explain:"健康生活需要運動、睡眠和均衡飲食"
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
        html+=`
        <button class="option-btn" onclick="selectAnswer('${option}')">
        ${option}
        </button>`;
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