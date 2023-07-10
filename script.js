const lower = document.querySelector('.lower');
const reset = document.querySelector('.reset');




const gameBoard = (()=>{
    let gamearray = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    const display = (lower)=>{
        gamearray = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
        lower.innerHTML = "";
        
        for(let  i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let card = document.createElement('div');
            card.classList.add('card');
                
                card.setAttribute("i",i);
                card.setAttribute("j",j);
                lower.appendChild(card);
                if(gamearray[i][j] == -1){
                    let para = document.createElement('p');
                    para.innerHTML = " ";
                    card.appendChild(para);
                }
                else{
                    card.appendChild(gamearray[i][j]);
                    
                }
            }

        }
    };
    const row = ()=>{
        let j=0;
        for(let i=0;i<3;i++){
            if(gamearray[i][j]==1&& gamearray[i][j+1]==1 &&gamearray[i][j+2]==1){
                return 1;
            }
            else if(gamearray[i][j]==2&& gamearray[i][j+1]==2 &&gamearray[i][j+2]==2){
                return 2;
            }
        }
        return 0;
    }
    const col = ()=>{
        let i=0;
        for(let j=0;j<3;j++){
            if(gamearray[i][j]==1 &&gamearray[i+1][j]==1 &&gamearray[i+2][j]==1){
                return 1;
            }
            if(gamearray[i][j]==2 &&gamearray[i+1][j]==2 &&gamearray[i+2][j]==2){
                return 2;
            }
        }
        return 0;
    }
    const diagonal =()=>{
        if(gamearray[0][0]==1&&gamearray[1][1]==1&&gamearray[2][2]==1){
            return 1;
        }
        else if(gamearray[0][0]==2 && gamearray[1][1] ==2 &&gamearray[2][2]==2){
            return 2;
        }
        else if(gamearray[0][2]==1 &&gamearray[1][1] ==1 &&gamearray[2][0]==1){
            return 1;
        }
        else if(gamearray[0][2]==2 &&gamearray[1][1] ==2 &&gamearray[2][0]==2){
            return 2;
        }
        return 0;
    }
    const add = (player1, player2, lower) => {
        let card = document.querySelectorAll('.card');
        card.forEach(cardItem=>{
            cardItem.addEventListener('click',(e)=>{
                let i=parseInt(cardItem.getAttribute("i"));
                let j = parseInt(cardItem.getAttribute("j"));
                console.log(gamearray);

                if(player2.turn==true && gamearray[i][j]==-1){
                    
                    gamearray[i][j]=2;
                    player2.turn=false;
                    player1.turn =true;
                    
                    let markerImg = document.createElement("img");
                    markerImg.src = player2.marker.src;
                    cardItem.appendChild(markerImg);
                    
                    
                }
                else if(player1.turn == true && gamearray[i][j]==-1){
                    gamearray[i][j]=1;
                    player2.turn = true;
                    player1.turn = false;
                    
                    let markerImg = document.createElement("img");
                    markerImg.src = player1.marker.src;
                    cardItem.appendChild(markerImg);
                    
                }
                if(row()==1){
                    alert('player1 has won')
                    return;
                }
                else if(row()==2){
                    alert('player2 has won');
                    return;
                }
                if(col()==1){
                    alert('player1 has won');
                    return
                }
                else if(col()==2){
                    alert('player2 has won');
                }
                if(diagonal()==1){
                    alert('player1 has won')
                }
                else if(diagonal()==2){
                    alert('player 2 has won');
                }
               
            })
            
            
            
        })
        
        
    };
    return{gamearray,display,add};

})();
gameBoard.display(lower);

const player = (player_name,marker,turn)=>{
    return {player_name,marker,turn};
}
const marker1 = document.createElement("img");
marker1.src = "united.png";
const marker2 = document.createElement("img");
marker2.src = "barca.png";
player1 = player("kartik",marker1,true);
player2 = player("kritika",marker2,false);
console.log(player1);
gameBoard.add(player1,player2,lower);
reset.addEventListener('click',()=>{
    
    gameBoard.gamearray = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    console.log(gameBoard.gamearray)
    gameBoard.display(lower);
    gameBoard.add(player1,player2,lower);
});

