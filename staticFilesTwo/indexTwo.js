let dot = document.getElementById("dot");
let hexId;
let rightM = 0;
let leftM = 0;
let topM = 0;
let botM = 0;
let stopT = 0;
let stopB = 0;
let stopL = 0;
let stopR = 0;

//position left
let ia = 500;
//position top
let ib = 500;


// movement
    addEventListener("keydown", (e)=> {
        
        if(e.code == "KeyS"){

            botM = 1
        }
        if(e.code == "KeyW"){
            
            topM = 1
        }

        if(e.code == "KeyA"){
           
            leftM = 1   
            }

        if(e.code == "KeyD"){
        
            rightM = 1
        }
    })


    addEventListener("keyup",(e)=>{
        if(e.code == "KeyS"){

            botM = 0
        }
        if(e.code == "KeyW"){
            
            topM = 0
        }
        if(e.code == "KeyA"){
            
            leftM = 0
        }
        if(e.code == "KeyD"){
            
            rightM = 0
        }
    })

    
//move controll


let block = document.getElementById("testBlock");
let blockStop = block.style.left
    blockPosition = window.getComputedStyle(dot);
let stopBorderLeft = parseInt(blockPosition.left);
let newrsmass = [];
//updateStopPosition
let allBlocks = document.querySelectorAll(".block")
let stopCordinate = []

//automatization
function updateBlocks(){allBlocks.forEach(e => stopCordinate.push({borderR :parseInt(window.getComputedStyle(e).left), borderT :parseInt(window.getComputedStyle(e).top)}))};
updateBlocks()




let stopCordinatelvl1 = [{borderR : 400, borderL: 290},{borderR: 800, borderL : 690}]
    //world render 
    setInterval(() => {
        
        if(topM == 1 && stopT == 0) {
        dot.style.top = ib + "px";
        ib -= 3;
        }

        if(botM == 1 && stopB == 0)  {
        dot.style.top = ib + "px"
        ib += 3;
        }

        if(rightM == 1 && stopR == 0) {
           
            dot.style.left = ia +"px";
            ia += 3;
        }

        if(leftM == 1 && stopL == 0) {
         
            dot.style.left = ia + "px"
            ia -= 3;
        }
        (ia <= stopCordinate[0].borderR + 108 && ia >= stopCordinate[0].borderR - 10 && ib <= stopCordinate[0].borderT + 100 && ib >=stopCordinate[0].borderT - 18 ||
             ia <= stopCordinate[2].borderR + 100 && ia >= stopCordinate[2].borderR && ib <= stopCordinate[2].borderT + 100 && ib >=stopCordinate[2].borderT - 18 
             )? stopL = 1 : stopL = 0;  
        (ia >= stopCordinate[0].borderR - 10 && ia <= stopCordinate[0].borderR + 100 && ib <= stopCordinate[0].borderT + 100 && ib >=stopCordinate[0].borderT - 18 ||
             ia >= stopCordinate[2].borderR - 20 && ia <= stopCordinate[2].borderR + 100 && ib <= stopCordinate[2].borderT + 100 && ib >=stopCordinate[2].borderT - 18
            )? stopR = 1  : stopR = 0;

        
        (ib <= stopCordinate[1].borderT + 110 && ib >= stopCordinate[1].borderT && ia <= stopCordinate[1].borderR + 100 && ia >= stopCordinate[1].borderR)? stopT = 1 : stopT = 0;
        
        (ib >= stopCordinate[1].borderT - 18 && ib <= stopCordinate[1].borderT + 100 && ia <= stopCordinate[1].borderR + 100 && ia >= stopCordinate[1].borderR)? stopB = 1 : stopB = 0;
     

    }, 1);


    console.log(stopCordinate[0].borderR - 10)
    //background animation
    async function GetColors() {
        const response = await fetch("/backGroundColors", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
            const users = await response.json();
            let q = 0
            setInterval(()=> {
                q += 1;
                hexId = users[q].hex;
            document.getElementById("body").style.background = hexId 
            }, 3000)
           
    
        }

    GetColors();

