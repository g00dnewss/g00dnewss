'use strict';
//함수연습
function doSomething(add){
    const result = add(2,5)
    console.log(result)
};

function add(a,b){
    const sum = a+b
    return sum
};
doSomething(add);
//array 연습
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2[0]);
//시작

const widthBlockCount = document.getElementById('input_row').value;
const heightBlockCount = document.getElementById('input_column').value;

let stackedBlock = new Array(widthBlockCount);

function blockArray(row, column){
    let arr = new Array(row);
    for (let x = 0 ; x < row; x++){
        arr[x] = new Array(column);
    }
    return arr;
}

function initBlockArray(blockArray) {
    for (let x = 0 ; x < widthBlockCount ; x++){
        for(let y = 0 ; y < heightBlockCount ; y++){
            blockArray[x][y] = false
        }
    }
}

function clickBlocks() {

} 

function drawBlocks() {
    for (let x = 0; x < widthBlockCount; x++){
        for(let y = 0; y < heightBlockCount; y++){
            if(stackedBlock[x][y]){
                ctx.fillStyle = 'black';
            } else{
                ctx.fillStyle = 'gray';
            }

            ctx.fillRect(
                borderWidth*x + blockSize*x,
                borderWidth*y + blockSize*y,
                blockSize,
                blockSize
            );
        }
    }
}

//반복결과에 따라 참 거짓 변경
function lifegame() {
    for (let x = 0; x < widthBlockCount; x++){
       for(let y = 0; y < heightBlockCount; y++){
           const aroundsum = Number(stackedBlock[x-1][y-1])+Number(stackedBlock[x][y-1])+Number(stackedBlock[x+1][y-1])+Number(stackedBlock[x-1][y])+Number(stackedBlock[x+1][y])+Number(stackedBlock[x-1][y+1])+Number(stackedBlock[x][y+1])+Number(stackedBlock[x+1][y+1]);

           if(stackedBlock[x][y]){
               if(aroundsum == 2 || aroundsum == 3 ){
                   stackedBlock[x][y]=true;
               }else{
                   stackedBlock[x][y]=false;
               }
            }
           if(!stackedBlock[x][y]){
               if(aroundsum == 3){
                   stackedBlock[x][y]=true;
               }else{
                   stackedBlock[x][y]=false;
               }
           }

        }
    }
}

initBlockArray(widthBlockCount);
//클릭시 초기값 함수 넣기
//
while(true){
    drawBlocks();
    lifegame();
}
//html_/재생버튼
//intial함수+"클릭시 초기값 함수 "+ while(true){funtion()/lifegame_function}