function isPrime(number){

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i ==  0){
            return false;
        }
    }
    return true;
}    

function PrimeNum(){
    let start = 2;
    let count = 0;
    let prime;

    while(count < 10001){
       if(isPrime(start)){
        prime = start;
        count++
       }
       start++;       
    }
    return prime;
}

let num = PrimeNum();
console.log(num);