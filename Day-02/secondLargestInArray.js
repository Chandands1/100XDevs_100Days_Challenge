function secondLargest(array){
    if (array < 2) {
        return "Array must have at least two elements.";
    }
   let n = array.length;
    for(let i=0;i<n-1;i++){
       for(let j =0;j<n-i-1;j++){
        if(array[j]>array[j+1]){
            let temp = array[j];
            array[j]= array[j+1];
            array[j+1]=temp;
        }
       }
    }
    return array[n-2];
}

const array = [2,3,4,56,44,123,4,5];
const secondlar = secondLargest(array);

console.log(secondlar);