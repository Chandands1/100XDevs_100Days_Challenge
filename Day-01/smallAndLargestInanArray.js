
let numArray =[2,5,8,24,433,1];

function smallNumberInArray(numArray){
    let smallNum = numArray[0];
    for(let i = 0;i<numArray.length;i++){
        if(numArray[i]<smallNum){
            smallNum = numArray[i];
        }
    }
    return smallNum;
}

function larNumberInArray(numArray){
    let larNum = numArray[0];
    for(let i =0;i<numArray.length;i++){
        if(numArray[i]> larNum){
            larNum = numArray[i];
        }
    }
    return larNum;
}



const smallResult = smallNumberInArray( numArray);
console.log(smallResult);

const largeNumber = larNumberInArray(numArray);
console.log(largeNumber);