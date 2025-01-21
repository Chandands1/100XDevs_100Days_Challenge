function reverseString(str){
    reverse = "";

    for(let i = str.length-1;i>=0;i--){
        reverse = reverse+str[i];
    }
    return reverse;
}
const inputString = "chandands"
const result = reverseString(inputString);
console.log(result);
