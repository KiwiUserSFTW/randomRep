import stopModule from "/moduleOnn.js";


setTimeout(() => {
    window.scrollTo({
        top:2000,
        left:0,
        behavior: "smooth"
    })
})
let interval = 500;

let raymbow = ['rad', 'yellow','green', 'blue', 'violet'];
let score = document.getElementById("score");
let dot = document.getElementById("dot");
let dotStatus = {
    rightM:0,
    leftM:0,
    topM:0,
    botM:0,

    stopT:0,
    stopB:0,
    stopR:0,
    stopL:0,
}

let viewT = 2000;


//position left
let ia = 500;

//position top
let ib = 2800;


// movement triger
    addEventListener("keydown", (e)=> {
        
        if(e.code == "KeyS"){

            dotStatus.botM = 1
        }
        if(e.code == "KeyW"){
            
            dotStatus.topM = 1
        }

        if(e.code == "KeyA"){
           
            dotStatus.leftM = 1   
            }

        if(e.code == "KeyD"){
        
            dotStatus.rightM = 1
        }
    })


    addEventListener("keyup",(e)=>{
        if(e.code == "KeyS"){
            dotStatus.botM = 0
        }
        if(e.code == "KeyW"){
            dotStatus.topM = 0
        }
        if(e.code == "KeyA"){
            
            dotStatus.leftM = 0
        }
        if(e.code == "KeyD"){
            
            dotStatus.rightM = 0
        }
    });

    

    

let test =  document.createElement("div");
test.innerHTML = "";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }



    function css(element, style) {
        for (const property in style)
        element.style[property] = style[property];
    }

    css(test, {
        'background-color':"white",
        'position':'absolute',
        'width':'10px',
        'height':'10px',
        'border-radius':'100px',
        'top':`${getRandomInt(2500, 3000)}`,
        'left': `${getRandomInt(1, 500)}`,
    });


document.body.appendChild(test);
let lightPosX = parseInt(test.style.left);
let lightPosY = parseInt(test.style.top);

let allBlocks = document.querySelectorAll(".block")
let stopCordinate = [];


let dotX = ia;
let dotY = ib;

let powerScore = document.getElementById("powerScore");
let tip = document.createElement("div");
tip.cloneNode(true)
css(tip, {
    "position": "relative",
    "width": "1000px",
    "height": "100px",
});
let rowsZone = document.getElementById("rowsZone");

let tags = [];
function generatorElem() {
    let counter = 0;

    return function (i) { 
        counter++;
        tags.push({tag: "div", id: i});
        
        let name;
        let number;
        let computedRows = tags.forEach((e) => {
            let {tag, id} = e;
            name = tag;
            number = id;
        });
            let a = document.createElement(`${name}`);
            a.classList = number;
            a.innerHTML = "";
            rowsZone.appendChild(a);

        return a;
    }
}
let gen = generatorElem();

let generation = setInterval(() => {
let a = generatorElem();

css((a('row')), {
    'transition':"0,3s",
    'position': 'absolute',
    'width': "5px",
    'height': "5px",
    'top':`0px`,
    'left': `${getRandomInt(0, 1000)}px`,
    'border': "5px, solid, red",
    'background-color':"red",
    'border-radius':"100%"
})
},interval);


(function updateBlocks(){allBlocks.forEach(e => 
        stopCordinate.push({
             borderR :parseInt(window.getComputedStyle(e).left), borderT :parseInt(window.getComputedStyle(e).top)

         })
 
    )}());

         let rowPos = 0;
         let mass = ["🍏 ","🍎 ","🍐 ","🍊 ","🍋 ","🍉 ","🍇 ","🍓 ","🥑 ","🍍 ","🥝 "];
         let i = 0;
         let ask = +prompt("1", 1);
         let count = 0;
         let eq;
    let render = setInterval(() => {
        
        let rows = document.querySelectorAll('.row');
        rowPos++;
        rows.forEach((e, index) => {
                e.style.top = parseInt(e.style.top) + 1 + "px";
                e.style['background-color'] = raymbow[index];
                let rowX = parseInt(e.style.left);
                let rowY = parseInt(e.style.top) + 2210;
                if(e.style.top == "780px") e.remove();
                let testa = tip.innerText.split(" ");
                eq = testa.reduce((inmass, e) => {
                    inmass.push(e + " ");
                    return inmass;
                }, []);
                
                if(ia <= rowX + 15 && ia >= rowX - 15 && ib <= rowY + 15 && ib >= rowY - 15) {
                    score.innerHTML = `<h1> ${0}</h1>`;
                    tip.innerHTML = ``
                    i = 0;
                    
                }
        
        });
            new Promise((resovle) => {
                if( ask == 1){
                    resovle(1)
                }else {
                    resovle(2)
                }

            }).then(result => {
            if(result != 1){
                clearInterval(render);
                
                }
            });
       
        // CathPoint
        if(ia <= lightPosX + 30 && ia >= lightPosX - 30 && ib <= lightPosY + 30 && ib >= lightPosY - 30) {
            i++
            
            score.innerHTML = `<h1> ${i}</h1>`
            test.style.left = getRandomInt(1, 1000);
            test.style.top = getRandomInt(2500, 3000);
            lightPosX = parseInt(test.style.left);
            lightPosY = parseInt(test.style.top);
            powerScore.appendChild(tip);
            new Promise((resolve, reject) => {
                if(i >= 1 && i <= 11){
                    
                    resolve(10)
                }
            }).then((result) => {
                tip.innerHTML += `${mass[i - 1]}`;
                 
                
            });

                if(eq[count] == mass[count]){
                    count++
                    console.log(count)
                    new Promise((resolve) => {
                        if(count == 10){
                             resolve();
                        }
                    }).then(() =>{
                        console.log(stopCordinate[4] = {borderR: -10, borderT: 0});
                        clearInterval(generation);
                        css(tip, {
                            "width": "280px",
                            "height": "23px",
                            "background-color":"white",
                            "border-radius": "20px"

                        })
                        
                    });
                }
            
        }

        // ViewPosition
        if(ib <= viewT){
            window.scrollTo({
                top: viewT - 1000,
                left: 1,
              });

              if(ib <= viewT - 1000) {
                window.scrollTo(0, viewT - 2000)
              }
        } else {
            window.scrollTo(0, viewT + 1000)
        }


        // Movevmant
        if(dotStatus.topM == 1 && dotStatus.stopT == 0) {
            dot.style.top = ib + "px";
            ib -= 3;
        }

        if(dotStatus.botM == 1 && dotStatus.stopB == 0) {
            dot.style.top = ib + "px"
            ib += 3;
        }

        if(dotStatus.rightM == 1 && dotStatus.stopR == 0) {
           
            dot.style.left = ia +"px";
            ia += 3;
        }

        if(dotStatus.leftM == 1 && dotStatus.stopL == 0) {
         
            dot.style.left = ia + "px"
            ia -= 3;
        }

        // Stopers
        let stopers = stopModule(ia, ib, stopCordinate, dotStatus.stopL, dotStatus.stopR, dotStatus.stopT, dotStatus.stopB);
        dotStatus.stopL = stopers.stopL;
        dotStatus.stopR = stopers.stopR;
        dotStatus.stopT = stopers.stopT;
        dotStatus.stopB = stopers.stopB;
        
    }, 1);


    // Background animation
    let hexId;
    async function GetColors() {
        const response = await fetch("/backGroundColors", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
            const users = await response.json();
            let q = 0
            setInterval(()=> {
                q += 1;
                console.log(q)
                if(q % 2 == 0){
                    document.getElementById("body").style.background = "black"
                }   else{
                        hexId = users[q].hex;
                        document.getElementById("body").style.background = hexId 
                    }
            }, 5000);
           
    
        }

    GetColors();



