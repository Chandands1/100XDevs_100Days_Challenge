

function generateFibonacci(n){
    let fiboSeries=[];
    fiboSeries[0]=0;
    fiboSeries[1]=1;

    for(let i = 2;i <n;i++){
        fiboSeries[i]= fiboSeries[i-1]+fiboSeries[i-2];
    }
    return fiboSeries;
}

let n = 10;

const result = generateFibonacci(n);
console.log("The fibonacci series upto "+n+ " terms: "+result.join(", "));