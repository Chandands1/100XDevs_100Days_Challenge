function sumOfNumber(number){
    let sum = 0;
  while(number>0){
    let digit= number %10;
    sum+=digit;
    number = Math.floor(number/10);
  }
  return sum;
}

const number = 3234;

const result = sumOfNumber(number);
console.log(result)