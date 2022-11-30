import stopModule from "/moduleOnn.js";

// Logic function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFood(min, max) {
    let a =  Math.floor(Math.random() * min + max) * box
    return parseInt(a);
}

function css(element, style) {
    for (const property in style)
    element.style[property] = style[property];
}


(() => {
    window.scrollTo({
        top:2000,
        left:0,
        behavior: "smooth"
    })
});
let ask;
let snakeHead = document.getElementById('snakeHead');
let snakeblock = document.createElement('div');

let box = 30;

let food = [
    {
        x:0,
        y:0
    }
];

let snake = [
    {
        x:0,
        y:0,
    }
]

let snakePos = {
    top: 0,
    bot: 0,
    left: 0,
    right: 0,
}

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
        
        if(e.keyCode == 40){

            dotStatus.botM = 1
        }
        if(e.keyCode == 38){
            
            dotStatus.topM = 1
        }

        if(e.keyCode == 37){
           
            dotStatus.leftM = 1   
            }

        if(e.keyCode == 39){
        
            dotStatus.rightM = 1
        }
    })


    addEventListener("keyup",(e)=>{
        if(e.keyCode == 40){
            dotStatus.botM = 0
        }
        if(e.keyCode == 38){
            dotStatus.topM = 0
        }
        if(e.keyCode == 37){
            
            dotStatus.leftM = 0
        }
        if(e.keyCode == 39){
            
            dotStatus.rightM = 0
        }
    });

    

    

let point =  document.createElement("div");
point.innerHTML = "";




   
    css(point, {
        'background-color':"white",
        'position':'absolute',
        'width':'10px',
        'height':'10px',
        'border-radius':'100px',
        'top':`${getRandomInt(2500, 3000)}`,
        'left': `${getRandomInt(1, 500)}`,
    });


document.body.appendChild(point);
let lightPosX = parseInt(point.style.left);
let lightPosY = parseInt(point.style.top);

let allBlocks = document.querySelectorAll(".block")
let stopCordinate = [];


let dotX = ia;
let dotY = ib;

let powerScore = document.getElementById("powerScore");
let tip = document.createElement("div");
tip.cloneNode(true);

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
},200);


function snakeGen(){
    snakeblock = document.createElement('div');
    snakeblock.id = "snakeLenght";
    snakeArea.append(snakeblock);

    css(snakeblock, {
        
        "left":"-500px",
        "position": "absolute",
        "width": "30px",
        "height": "30px",
        "background-color": "black"
    });
    let ii = snake.length;

    snake.push({
    x:snake[ii - 1].x,
    y:snake[ii - 1].y,
});
}

let allPixel;

let snakeArea = document.getElementById("snakeArea");

function foodGen(i) {
    let pixel = document.createElement("div");
    allPixel = document.querySelectorAll("#pixel");
    pixel.id = "pixel";
    let posX = getRandomIntFood(30, 1);
    let posY = getRandomIntFood(30, 1);

    food = [{
        x: posX,
        y: posY,
    }]

    css(pixel, {
        "top": `${posY}`,
        "left":`${posX}`,
        "position": "absolute",
        "width": "30px",
        "height": "30px",
        "border": "1px solid black",
        "background-color": "white"
            
    });

    if(i == 1){
        allPixel[0].remove();
    }

    snakeArea.appendChild(pixel);

}



let serverScore;

(function updateBlocks(){allBlocks.forEach(e => 
        stopCordinate.push({
             borderR :parseInt(window.getComputedStyle(e).left), borderT :parseInt(window.getComputedStyle(e).top)

         })
 
    )}());

         let rowPos = 0;
         let mass = ["🍏 ","🍎 ","🍐 ","🍊 ","🍋 ","🍉 ","🍇 ","🍓 ","🥑 ","🍍 ","🥝 "];
         let i = 0;
         ask = +prompt("1", 1);
         let id = ask;
         let count = 0;
         let snakeTriger = 0;
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
            if(result != 1&& result != 2){
                clearInterval(render);
                
                }
            });
       
        // CathPoint
        if(ia <= lightPosX + 30 && ia >= lightPosX - 30 && ib <= lightPosY + 30 && ib >= lightPosY - 30) {
            i++
            
            score.innerHTML = `<h1> ${i}</h1>`
            point.style.left = getRandomInt(1, 1000);
            point.style.top = getRandomInt(2500, 3000);
            lightPosX = parseInt(point.style.left);
            lightPosY = parseInt(point.style.top);
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
                    snakeTriger = 1;
                
                    new Promise((resolve) => {
                        // flag
                        if(count == 1){
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


    // Snake control
    addEventListener('keydown', (e) => {
    if(e.keyCode == 83 && snakePos.top != 1) {
        for(i in snakePos){
            snakePos[i] = 0;
            
        }
        snakePos.bot = 1;
        
    }

    if(e.keyCode == 87 && snakePos.bot != 1) {
        for(i in snakePos){
            snakePos[i] = 0;
            
        }
        snakePos.top = 1;
        
    }

    if(e.keyCode == 65 && snakePos.right != 1) {
        for(i in snakePos){
            snakePos[i] = 0;
            
        }
        snakePos.left = 1;
        
        
    }

    if(e.keyCode == 68 && snakePos.left != 1) {
        for(i in snakePos){
            snakePos[i] = 0;
            
        }

        snakePos.right = 1;
    
       
    }


});

        //snake start
        if(ib <= viewT && snakeTriger == 1) {
            snakeTriger -= 1;
            
            foodGen();
            let allSnakeBlocks;
            function generation() {
                let render = setInterval(() => {
                   
            if(snake[0].x >= 990) {
                snake[0].x = 0;
            }
            if(snake[0].x < 0) {
                snake[0].x = 960
            }
            if(snake[0].y >= 990) {
                snake[0].y = 0
            }
            if(snake[0].y < 0) {
                snake[0].y = 990
            }
                        
                    let snakeX = snake[0].x;
                    let snakeY = snake[0].y;
                
                    let mssi = snake.reduce((mass, e) => {
                    
                    mass.push({x:e.x, y:e.y});
                    return mass;
                    }, []);
                
                
                    snakeHead.style.left = snakeX + "px";
                    snakeHead.style.top = snakeY + "px";
                
                
                    allSnakeBlocks = document.querySelectorAll('#snakeLenght');
                
                    snake.forEach((e, index) => {
                    
                        if(index < snake.length - 1){
                            
                                allSnakeBlocks[index].style.left = snake[index + 1].x + "px"
                                allSnakeBlocks[index].style.top = snake[index + 1].y + "px"
                
                                snake[index + 1 ].x = mssi[index].x;
                                snake[index + 1].y = mssi[index].y;
                
                        }
                    });
                
                
                
                    if(snakePos.top == 1) {
                        snake[0].y -= box;
                
                    }
                
                    if(snakePos.bot == 1) {
                        snake[0].y +=box;
                        
                    }
                
                    if(snakePos.left == 1) {
                        snake[0].x -= box;
                    }
                
                    if(snakePos.right == 1) {
                        snake[0].x += box
                        
                    }
                
                
                
                    snake.forEach((e, i) => {
                        if(i > 0){
                        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                            
                            clearInterval(render);
                            new Promise((resolve, reject) => {
                                resolve(10)
                            }).then(result => {generation(); snake.splice(1, snake.length - 1);  allSnakeBlocks.forEach((e) => e.remove());
                            
                        })
                        }}
                    })
                    new Promise((resolve) => {
                        if(snake[0].x == food[0].x && snake[0].y == food[0].y) {
                          
                            setTimeout(() => resolve(), 100);
                        }
                    }).then(() => {foodGen(1); snakeGen()})
                }, 110)
                }
                
                generation();
                
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

setInterval(() => {
    (async() => {
        let response = await fetch("/user/pos", {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },//flag1
        body: JSON.stringify({posX: snake[0].x, posY: snake[0].y, id:ask, score:score.innerHTML})
    });
    
    console.log(await response.json())
    })()}, 1000)