function primeNumber(number){
    let count =0;
    for(let i = 1;i<=number;i++){
        
        if(number%i==0){
            count++;

        }
    }
    return count;
}
const number = 9;
const result = primeNumber(number);
if(result ===2){
    console.log("The number is a prime number! : "+ number);
}else{
    console.log("The number is not a prime number! : "+ number);
}

