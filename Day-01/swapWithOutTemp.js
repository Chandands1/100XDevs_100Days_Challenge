
function swapNum(number1, number2){
    number1= number1+number2;//30
    number2= number1-number2;//10
    number1 = number1-number2;//20

    console.log("The numbers after swapping: "+ number1+" "+number2);
}

let number1=10, number2=20;
console.log("The numbers before swapping: "+ number1+" "+ number2);

swapNum(number1,number2);



