let turn='O';
let totalturn=0;
const playerO = document.getElementById('b');   // O image
const playerX = document.getElementById('a');   // X image


let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
// making a fun to check winner we are destrucruin index of winner because winner is 2d array
function checkWinner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]&&board_array[index0]===board_array[index2])
            return 1;
    }
    return 0;
}

// here we are trying to make array and fill 0 and x to that corrosponding array index which is filled in
//  the web which has very cleaverly id given as 0,1,2,3,4,5,6,7,8 at each box in grid
let board_array=new Array(9).fill('E');

// this is the callback function used during addevenetlisteneer we are making in fn so we can use elsewhwer 
const printer=(event)=>{
 
    // this is for which child of board we are clicking on we get the acces and we changed its innerhtml
    const element=event.target ;
  

     if(element.innerHTML !== "") return;   // Prevent overwriting
       totalturn++;
    if(turn==='O'){
        
          element.innerHTML="O";
          board_array[element.id]="O";
          if(checkWinner()){
            document.getElementById('msg').innerHTML="Winner is O";
             // winner decide hone per ab event call nhi hoga
            board.removeEventListener('click',printer);
          }
          turn="X";
        
        //   switch animation 
        playerO.classList.remove("active");
        playerX.classList.add("active");
    }
    else  { element.innerHTML="X";
        board_array[element.id]="X";
         if(checkWinner()){
            document.getElementById('msg').innerHTML="Winner is X";
            // winner decide hone per ab event call nhi hoga
            board.removeEventListener('click',printer);
          }
        turn="O";
         playerX.classList.remove("active");
         playerO.classList.add("active");
    }
    if(totalturn===9){
         document.getElementById('msg').innerHTML="Draw";
    }
}


// /YE ABHI HUM O AND X KO PRINT KR RHE and printer is the callback function
const board=document.querySelector('.board');
board.addEventListener('click',printer)

// no we are going to add functionality to restrt button  

const rstrt=document.getElementById('restrtbutton');
rstrt.addEventListener('click',()=>{

    const cell=document.getElementsByClassName('cell');
    // html collcn me milega so
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    });
    turn='O';
    totalturn=0;
    board_array=new Array(9).fill('E');
// this is for restring from new otherwise it will show winner ,looser etc on the basis of previous stored value

    document.getElementById('msg').innerHTML = "";

    // Reset animation
    playerX.classList.remove("active");
    playerO.classList.remove("active");

    // Re-enable clicking
    board.addEventListener('click', printer);
});

