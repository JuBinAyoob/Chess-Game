let moves=0, side;

let chessPos = new Array(8);
for(let i=0;i<8;i++){
    chessPos[i] = new Array(8);
}

$(document).ready(function(){
    initialPos();
    enableInitialClick();
});

//saving initial positions of chess piece
function initialPos(){
    for(let i=0;i<8;i++){
        chessPos[0][i]="black";
        chessPos[1][i]="black";

        chessPos[2][i]=0;
        chessPos[3][i]=0;
        chessPos[4][i]=0;
        chessPos[5][i]=0;

        chessPos[6][i]="white";
        chessPos[7][i]="white";
    }

    //test rook
    chessPos[3][3]="white";
}

//enabling chess-piece class click
function enableInitialClick(){
    $(".chess-piece").on("click",chessMoveIniClick);
}

function enableSecondClick(){
    $(".second-click").on("click",secondClick);
}

//
function changeTurn(){
    moves++;
    if(side=="black"){
        $(".spn-turn").text("white");
    }else{
        $(".spn-turn").text("black");
    }
}

function chessMoveIniClick(){
    //disabling click of class 
    $('.chess-piece').off('click');
    let src = $(this).attr("src");

    let position = $(this).parent().attr("id");

    side = src.substring(14,19);

    if(moves%2 == 0 && side == "white"){//play turn: white
        
        console.log("side",side);

        let piece = src.substring(20,22);
        showMoves(piece,position,side);
        enableSecondClick();
        
    }else if(moves%2 == 1 && side == "black"){//play turn: black

        console.log("side",side);

        let piece = src.substring(20,22);
        showMoves(piece,position,side);
        enableSecondClick();
    }
}


function secondClick(){
    //disabling click of class 
    $('.second-click').off('click');
        
    
    if(moves%2 == 0 && side == "white"){//play turn: white

        changeTurn();
        enableInitialClick();
    }else if(moves%2 == 1 && side == "black"){//play turn: black

        changeTurn();
        enableInitialClick();
    }
}

//function to show the moves of clicked chess piece
function showMoves(piece,position,side){

    let intCurRow = parseInt(position[0]);
    let intCurCol = parseInt(position[1]);

    if(piece=="ro"){ //chess piece: rook
        for(let row = intCurRow+1; row < 8; row++){

            if(chessPos[row][intCurCol]==side)
                break;

            $("#"+row+intCurCol).addClass("show-moves");

            if(chessPos[row][intCurCol]!=0)
                break;
        }

        for(let row = intCurRow-1; row >= 0; row--){

            if(chessPos[row][intCurCol]==side)
                break;

            $("#"+row+intCurCol).addClass("show-moves");

            if(chessPos[row][intCurCol]!=0)
                break;
        }


        for(let col = intCurCol+1; col < 8; col++){

            if(chessPos[intCurRow][col]==side)
                break;
            
            $("#"+intCurRow+col).addClass("show-moves");

            if(chessPos[intCurRow][col]!=0)
                break;
        }

        for(let col = intCurCol-1; col >= 0; col--){

            if(chessPos[intCurRow][col]==side)
                break;

            $("#"+intCurRow+col).addClass("show-moves");

            if(chessPos[intCurRow][col]!=0)
                break;
        }

    }else if(piece=="kn"){ //chess piece: knight

        if(intCurRow+1<8 && intCurCol+2<8 && chessPos[intCurRow+1][intCurCol+2]!=side){
            $("#"+(intCurRow+1)+(intCurCol+2)).addClass("show-moves");
        }

        if(intCurRow-1>=0 && intCurCol+2<8 && chessPos[intCurRow-1][intCurCol+2]!=side){
            $("#"+(intCurRow-1)+(intCurCol+2)).addClass("show-moves");
        } 

        if(intCurRow+1<8 && intCurCol-2>=0 && chessPos[intCurRow+1][intCurCol-2]!=side){
            $("#"+(intCurRow+1)+(intCurCol-2)).addClass("show-moves");
        }

        if(intCurRow-1>0 && intCurCol-2>=0 && chessPos[intCurRow-1][intCurCol-2]!=side){
            $("#"+(intCurRow-1)+(intCurCol-2)).addClass("show-moves");
        }

        if(intCurRow+2<8 && intCurCol+1<8 && chessPos[intCurRow+2][intCurCol+1]!=side){
            $("#"+(intCurRow+2)+(intCurCol+1)).addClass("show-moves");
        }

        if(intCurRow-2>=0 && intCurCol+1<8 && chessPos[intCurRow-2][intCurCol+1]!=side){
            $("#"+(intCurRow-2)+(intCurCol+1)).addClass("show-moves");
        } 

        if(intCurRow+2<8 && intCurCol-1>=0 && chessPos[intCurRow+2][intCurCol-1]!=side){
            $("#"+(intCurRow+2)+(intCurCol-1)).addClass("show-moves");
        }
        
        if(intCurRow-2>0 && intCurCol-1>=0 && chessPos[intCurRow-2][intCurCol-1]!=side){
            $("#"+(intCurRow-2)+(intCurCol-1)).addClass("show-moves");
        }

    }else if(piece=="bi"){ //chess piece: bishop

    }else if(piece=="qu"){ //chess piece: queen

    }else if(piece=="ki"){ //chess piece: king

    }else if(piece=="pa"){ //chess piece: pawn

    }
}