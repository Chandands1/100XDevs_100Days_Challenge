function removeduplicate(array){
    return[...new Set(array)];
}

let orginialArray =[1,2,3,4,2,3];

let result = removeduplicate(orginialArray);

console.log(result);