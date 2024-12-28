let boxes=document.querySelectorAll(".box");
let reset = document.querySelector(".rtb1");
let newbt1 = document.querySelector(".nbt1");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let har = document.querySelector(".har");
let winner = document.querySelector(".winner");
let t1 =true;
let count=0;

const winpat=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(t1){
            box.innerText="O"
            t1=false;
        }
        else{
            box.innerText="X"
            t1=true;
        }
        box.disabled=true;
        count++;
        
        checkwinner();
        if (count===9 && !checkwinner()){
            har.innerText="game drawn"
                winner.classList.remove("hide");

        }
    }

    )
})
const checkwinner= ()=> {
    for (a of winpat)
        {
        if (((boxes[a[0]]).innerText!="")&&
        ((boxes[a[1]]).innerText!="")&&
        ((boxes[a[2]]).innerText!=""))
        {

        

            if (((boxes[a[0]]).innerText==(boxes[a[1]]).innerText)&&
            ((boxes[a[0]]).innerText==(boxes[a[2]]).innerText)&&
            ((boxes[a[1]]).innerText==(boxes[a[2]]).innerText))
            {
                console.log("you are the winner", (boxes[a[0]]).innerText);
                boxes.forEach((box)=>{
                            box.disabled=true;
                            
                        });
                har.innerText="you are the winner"+ "  " + (boxes[a[0]]).innerText
                winner.classList.remove("hide");
                

            }



            }
        }
        
        }
    ;
reset.addEventListener("click",()=>{
    console.log("reset presed")
    winner.classList.add("hide");
    t1=true
    count=0;
    for (box of boxes){
        box.innerText=" ";
        box.disabled=false;
    };       
})

newbt1.addEventListener("click",()=>{
    console.log("new game")
    t1=true
    count=0
    winner.classList.add("hide");
    for (box of boxes){
        box.innerText=" ";
        box.disabled=false;
    };       
})
// player1.addEventListener("click",()=>{
//     t1=true
//     player1.disabled=true
// }
// )