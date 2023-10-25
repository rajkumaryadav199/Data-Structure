function Fibonacci(n){

    if(n<2){
        return n
    }
    else{
        let prev=0;
        let curr=1;
        let next=0;
        for(let i=2; i<=n; i++){
           next=prev+curr;
           prev=curr;
           curr=next;
        }   
        return next;
    }
}

console.log(Fibonacci(6))