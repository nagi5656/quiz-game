const questions = [

{
question:"優(ㄧㄡ)格(ㄍㄜˊ)是(ㄕˋ)屬(ㄕㄨˇ)於(ㄩˊ)哪(ㄋㄚˇ)六(ㄌㄧㄡˋ)大(ㄉㄚˋ)類(ㄌㄟˋ)食(ㄕˊ)物(ㄨˋ)呢(ㄋㄜ)？",
options:[
"五(ㄨˇ)穀(ㄍㄨˇ)雜(ㄗㄚˊ)糧(ㄌㄧㄤˊ)類(ㄌㄟˋ)",
"油(ㄧㄡˊ)脂(ㄓ)與(ㄩˇ)堅(ㄐㄧㄢ)果(ㄍㄨㄛˇ)種(ㄓㄨㄥˇ)子(ㄗˇ)類(ㄌㄟˋ)",
"乳(ㄖㄨˇ)品(ㄆㄧㄣˇ)類(ㄌㄟˋ)",
"豆(ㄉㄡˋ)魚(ㄩˊ)蛋(ㄉㄢˋ)肉(ㄖㄡˋ)類(ㄌㄟˋ)"
],
answer:"乳(ㄖㄨˇ)品(ㄆㄧㄣˇ)類(ㄌㄟˋ)",
explain:"優(ㄧㄡ)格(ㄍㄜˊ)是(ㄕˋ)乳(ㄖㄨˇ)品(ㄆㄧㄣˇ)類(ㄌㄟˋ)，有(ㄧㄡˇ)豐(ㄈㄥ)富(ㄈㄨˋ)蛋(ㄉㄢˋ)白(ㄅㄞˊ)質(ㄓˊ)、鈣(ㄍㄞˋ)質(ㄓˊ)和(ㄏㄜˊ)維(ㄨㄟˊ)生(ㄕㄥ)素(ㄙㄨˋ)"
},

{
question:"小(ㄒㄧㄠˇ)黃(ㄏㄨㄤˊ)瓜(ㄍㄨㄚ)是(ㄕˋ)屬(ㄕㄨˇ)於(ㄩˊ)哪(ㄋㄚˇ)類(ㄌㄟˋ)食(ㄕˊ)物(ㄨˋ)呢(ㄋㄜ)？",
options:["五(ㄨˇ)穀(ㄍㄨˇ)類(ㄌㄟˋ)","油(ㄧㄡˊ)脂(ㄓ)類(ㄌㄟˋ)","蔬(ㄕㄨ)菜(ㄘㄞˋ)類(ㄌㄟˋ)","水(ㄕㄨㄟˇ)果(ㄍㄨㄛˇ)類(ㄌㄟˋ)"],
answer:"蔬(ㄕㄨ)菜(ㄘㄞˋ)類(ㄌㄟˋ)",
explain:"小(ㄒㄧㄠˇ)黃(ㄏㄨㄤˊ)瓜(ㄍㄨㄚ)是(ㄕˋ)蔬(ㄕㄨ)菜(ㄘㄞˋ)類(ㄌㄟˋ)"
},

{
question:"哪(ㄋㄚˇ)個(ㄍㄜˋ)不(ㄅㄨˋ)是(ㄕˋ)營(ㄧㄥˊ)養(ㄧㄤˇ)素(ㄙㄨˋ)呢(ㄋㄜ)？",
options:["醣(ㄊㄤˊ)類(ㄌㄟˋ)","酒(ㄐㄧㄡˇ)精(ㄐㄧㄥ)","蛋(ㄉㄢˋ)白(ㄅㄞˊ)質(ㄓˊ)","脂(ㄓ)類(ㄌㄟˋ)"],
answer:"酒(ㄐㄧㄡˇ)精(ㄐㄧㄥ)",
explain:"酒(ㄐㄧㄡˇ)精(ㄐㄧㄥ)不(ㄅㄨˋ)是(ㄕˋ)營(ㄧㄥˊ)養(ㄧㄤˇ)素(ㄙㄨˋ)"
},

{
question:"每(ㄇㄟˇ)一(ㄧ)餐(ㄘㄢ)要(ㄧㄠˋ)怎(ㄗㄣˇ)麼(ㄇㄜ)吃(ㄔ)呢(ㄋㄜ)？",
options:["每(ㄇㄟˇ)餐(ㄘㄢ)一(ㄧ)碗(ㄨㄢˇ)飯(ㄈㄢˋ)","每(ㄇㄟˇ)餐(ㄘㄢ)一(ㄧ)湯(ㄊㄤ)匙(ㄔˊ)肉(ㄖㄡˋ)","每(ㄇㄟˇ)餐(ㄘㄢ)一(ㄧ)掌(ㄓㄤˇ)心(ㄒㄧㄣ)蔬(ㄕㄨ)菜(ㄘㄞˋ)","每(ㄇㄟˇ)餐(ㄘㄢ)兩(ㄌㄧㄤˇ)杯(ㄅㄟ)牛(ㄋㄧㄡˊ)奶(ㄋㄞˇ)"],
answer:"每(ㄇㄟˇ)餐(ㄘㄢ)一(ㄧ)碗(ㄨㄢˇ)飯(ㄈㄢˋ)",
explain:"均(ㄐㄩㄣ)衡(ㄏㄥˊ)餐(ㄘㄢ)盤(ㄆㄢˊ)要(ㄧㄠˋ)有(ㄧㄡˇ)飯(ㄈㄢˋ)、肉(ㄖㄡˋ)、蔬(ㄕㄨ)菜(ㄘㄞˋ)和(ㄏㄜˊ)牛(ㄋㄧㄡˊ)奶(ㄋㄞˇ)"
},

{
question:"哪(ㄋㄚˇ)種(ㄓㄨㄥˇ)食(ㄕˊ)物(ㄨˋ)可(ㄎㄜˇ)以(ㄧˇ)提(ㄊㄧˊ)供(ㄍㄨㄥ)鈣(ㄍㄞˋ)質(ㄓˊ)？",
options:["蔬菜類","乳品類","油脂類","五穀類"],
answer:"乳品類",
explain:"乳品類有豐富鈣質"
},

{
question:"水(ㄕㄨㄟˇ)果(ㄍㄨㄛˇ)每(ㄇㄟˇ)餐(ㄘㄢ)吃(ㄔ)多(ㄉㄨㄛ)少(ㄕㄠˇ)？",
options:["一個拳頭大小","一個掌心大小","一湯匙","不用吃"],
answer:"一個拳頭大小",
explain:"水果建議一個拳頭大小"
},

{
question:"怎(ㄗㄣˇ)麼(ㄇㄜ)吃(ㄔ)最(ㄗㄨㄟˋ)健(ㄐㄧㄢˋ)康(ㄎㄤ)？",
options:["水(ㄕㄨㄟˇ)果(ㄍㄨㄛˇ)不洗","吃加工食品","吃油炸食物","均衡飲食不挑食"],
answer:"均衡飲食不挑食",
explain:"均衡飲食最健康"
},

{
question:"休(ㄒㄧㄡ)息(ㄒㄧˊ)時(ㄕˊ)會(ㄏㄨㄟˋ)消(ㄒㄧㄠ)耗(ㄏㄠˋ)熱(ㄖㄜˋ)量(ㄌㄧㄤˋ)嗎(ㄇㄚ)？",
options:["不會","會","只有睡覺","只有運動"],
answer:"會",
explain:"休息時身體也會消耗熱量"
},

{
question:"吃(ㄔ)比(ㄅㄧˇ)消(ㄒㄧㄠ)耗(ㄏㄠˋ)多(ㄉㄨㄛ)會(ㄏㄨㄟˋ)怎(ㄗㄣˇ)樣(ㄧㄤˋ)？",
options:["體重增加","體重減少","長不高","不變"],
answer:"體重增加",
explain:"多餘熱量會變脂肪"
},

{
question:"哪(ㄋㄚˇ)個(ㄍㄜˋ)活(ㄏㄨㄛˊ)動(ㄉㄨㄥˋ)消(ㄒㄧㄠ)耗(ㄏㄠˋ)最(ㄗㄨㄟˋ)多(ㄉㄨㄛ)熱(ㄖㄜˋ)量(ㄌㄧㄤˋ)？",
options:["看電視","慢走","快走","慢跑"],
answer:"慢跑",
explain:"慢跑最耗熱量"
},

{
question:"哪(ㄋㄚˇ)種(ㄓㄨㄥˇ)營(ㄧㄥˊ)養(ㄧㄤˇ)幫(ㄅㄤ)助(ㄓㄨˋ)長(ㄓㄤˇ)肌(ㄐㄧ)肉(ㄖㄡˋ)？",
options:["蛋白質","糖","油","鹽巴"],
answer:"蛋白質",
explain:"蛋白質可以幫助長肌肉"
},

{
question:"哪(ㄋㄚˇ)個(ㄍㄜˋ)熱(ㄖㄜˋ)量(ㄌㄧㄤˋ)最(ㄗㄨㄟˋ)高(ㄍㄠ)？",
options:["蛋白質","澱粉","脂肪","水"],
answer:"脂肪",
explain:"脂肪熱量最高"
},

{
question:"肌(ㄐㄧ)肉(ㄖㄡˋ)多(ㄉㄨㄛ)的(ㄉㄜ)人(ㄖㄣˊ)會(ㄏㄨㄟˋ)怎(ㄗㄣˇ)樣(ㄧㄤˋ)？",
options:["容易消耗熱量","不會累","不用吃飯","不流汗"],
answer:"容易消耗熱量",
explain:"肌肉多會消耗更多熱量"
},

{
question:"哪(ㄋㄚˇ)個(ㄍㄜˋ)習(ㄒㄧˊ)慣(ㄍㄨㄢˋ)最(ㄗㄨㄟˋ)健(ㄐㄧㄢˋ)康(ㄎㄤ)？",
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
    <h2>${selected===q.answer ? "答(ㄉㄚˊ)對(ㄉㄨㄟˋ)了(ㄌㄜ)" : "答(ㄉㄚˊ)錯(ㄘㄨㄛˋ)了(ㄌㄜ)"}</h2>
    <p>正(ㄓㄥˋ)確(ㄑㄩㄝˋ)答(ㄉㄚˊ)案(ㄢˋ)：${q.answer}</p>
    <p>詳(ㄒㄧㄤˊ)解(ㄐㄧㄝˇ)：${q.explain}</p>
    `;
}

function goHome(){
    window.location.href="index.html";
}