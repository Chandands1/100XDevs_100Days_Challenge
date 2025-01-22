function sortArray(array){
     for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
     }
     return array;
}

const array = [7,3,4,1,2];
const sorted = sortArray(array);

console.log(sorted);