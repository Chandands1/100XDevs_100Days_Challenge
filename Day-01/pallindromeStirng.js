function revString(str){
    let reverse = "";

    for ( let i = str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    return reverse;
}

const inputString = "madam";
const result = revString(inputString);

if(inputString == result){
    console.log("The string is pallindrome! :"+ inputString);
}else{
    console.log("The String is not a pallindrome")
}